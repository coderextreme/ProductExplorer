
import React, { useState, useCallback } from 'react';
import type { FileSystemNode, Product, CartItem, Track, Meeting, Document } from '../types';
import { SparklesIcon, FileIcon, DocumentTextIcon } from './Icons';
import { generateProductDescription } from '../services/geminiService';

type ContentPaneProps = {
  node: FileSystemNode;
  onNavigate: (path: string[]) => void;
  onAddToCart: (product: Product, quantity: number) => void;
  cart: CartItem[];
  updateCartQuantity: (productId: string, quantity: number) => void;
  onPlayTrack: (track: Track, album: FileSystemNode) => void;
};

// Main dispatcher component
export const ContentPane: React.FC<ContentPaneProps> = (props) => {
  switch (props.node.type) {
    case 'folder':
    case 'root':
      return <FolderView {...props} />;
    case 'products_list':
      return <ProductsListView {...props} />;
    case 'assets_list':
      return <AssetsListView {...props} />;
    case 'music_list':
        return <MusicListView {...props} />;
    case 'album_detail':
        return <AlbumDetailView {...props} />;
    case 'contacts_list':
        return <ContactsListView {...props} />;
    case 'meetings_list':
        return <MeetingsListView {...props} />;
    case 'cart_view':
        return <CartView {...props} />;
    case 'documents_list':
        return <DocumentsListView {...props} />;
    default:
      return <div className="text-center text-gray-500">Unsupported file type.</div>;
  }
};


// --- VIEW COMPONENTS ---

const FolderView: React.FC<ContentPaneProps> = ({ node, onNavigate }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
    {node.children?.map(child => (
      <div key={child.id} onClick={() => onNavigate(child.path)} className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-800 cursor-pointer transition-colors duration-150 group">
        <div className="w-16 h-16 mb-2 group-hover:scale-110 transition-transform">{child.icon}</div>
        <p className="text-center text-sm break-words w-full">{child.name}</p>
      </div>
    ))}
  </div>
);

const DocumentsListView: React.FC<ContentPaneProps> = ({ node }) => (
  <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden">
      <table className="w-full text-left">
          <thead className="bg-gray-700 text-gray-300">
              <tr>
                  <th className="p-4 font-semibold">Name</th>
                  <th className="p-4 font-semibold">Type</th>
                  <th className="p-4 font-semibold">Size</th>
                  <th className="p-4 font-semibold">Last Modified</th>
              </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
              {node.meta.items.map((doc: Document) => (
                  <tr key={doc.id} className="hover:bg-gray-700/50 transition-colors cursor-default">
                      <td className="p-4 flex items-center space-x-3">
                          <DocumentTextIcon className="w-5 h-5 text-indigo-400"/>
                          <span className="font-medium text-gray-200">{doc.name}</span>
                      </td>
                      <td className="p-4 text-gray-400 text-sm">{doc.type}</td>
                      <td className="p-4 text-gray-400 text-sm">{doc.size}</td>
                      <td className="p-4 text-gray-400 text-sm">{doc.lastModified}</td>
                  </tr>
              ))}
          </tbody>
      </table>
  </div>
);

const ProductsListView: React.FC<ContentPaneProps> = ({ node, onAddToCart }) => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    if (selectedProduct) {
        return <ProductDetailView product={selectedProduct} onAddToCart={onAddToCart} onBack={() => setSelectedProduct(null)} />
    }
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {node.meta.items.map((product: Product) => (
                <div key={product.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex flex-col">
                    <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover"/>
                    <div className="p-4 flex flex-col flex-grow">
                        <h3 className="text-lg font-bold text-white">{product.name}</h3>
                        <p className="text-sm text-gray-400 mb-2">{product.brand}</p>
                        <p className="text-xs text-gray-300 flex-grow">{product.description}</p>
                        <div className="mt-4 flex justify-between items-center">
                            <span className="text-xl font-semibold text-blue-400">${product.price}</span>
                            <button onClick={() => setSelectedProduct(product)} className="text-sm bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                                View
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const ProductDetailView: React.FC<{product: Product, onAddToCart: (product: Product, quantity: number) => void, onBack: () => void}> = ({product, onAddToCart, onBack}) => {
    const [config, setConfig] = useState<Record<string, string>>({});
    const [aiDescription, setAiDescription] = useState<string>('');
    const [isLoadingAi, setIsLoadingAi] = useState(false);

    const handleGenerateDesc = useCallback(async () => {
        setIsLoadingAi(true);
        setAiDescription('');
        const desc = await generateProductDescription(product);
        setAiDescription(desc);
        setIsLoadingAi(false);
    }, [product]);
    
    return (
        <div className="max-w-4xl mx-auto">
            <button onClick={onBack} className="mb-4 text-sm text-blue-400 hover:underline">{'<'} Back to Products</button>
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 md:flex md:space-x-8">
                <div className="md:w-1/2">
                    <img src={product.imageUrl} alt={product.name} className="w-full rounded-lg shadow-md" />
                </div>
                <div className="md:w-1/2 mt-6 md:mt-0">
                    <h2 className="text-3xl font-bold">{product.name}</h2>
                    <p className="text-gray-400 mb-4">{product.brand}</p>
                    <p className="text-gray-300 mb-4">{product.description}</p>
                    
                    <div className="bg-gray-900/50 p-3 rounded-lg my-4">
                        <button onClick={handleGenerateDesc} disabled={isLoadingAi} className="flex items-center space-x-2 text-sm text-blue-400 hover:text-blue-300 disabled:opacity-50 disabled:cursor-wait">
                            <SparklesIcon className="w-5 h-5"/>
                            <span>{isLoadingAi ? 'Generating...' : 'Generate AI Description'}</span>
                        </button>
                        {isLoadingAi && <div className="mt-2 text-sm text-gray-400 animate-pulse">Thinking...</div>}
                        {aiDescription && <p className="mt-2 text-sm text-gray-300 italic">"{aiDescription}"</p>}
                    </div>

                    <div className="text-3xl font-bold text-blue-400 my-4">${product.price}</div>
                    
                    {/* Configuration would go here */}

                    <button onClick={() => onAddToCart(product, 1)} className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-4 rounded-lg transition-colors">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

const CartView: React.FC<ContentPaneProps> = ({ cart, updateCartQuantity }) => {
    const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

    if (cart.length === 0) {
        return <div className="text-center text-gray-400">Your shopping cart is empty.</div>
    }

    return (
        <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg p-6 shadow-xl">
            <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
            <div className="space-y-4">
                {cart.map(item => (
                    <div key={item.product.id} className="flex items-center space-x-4 border-b border-gray-700 pb-4">
                        <img src={item.product.imageUrl} alt={item.product.name} className="w-20 h-20 rounded-md object-cover"/>
                        <div className="flex-grow">
                            <p className="font-semibold">{item.product.name}</p>
                            <p className="text-sm text-gray-400">${item.product.price.toFixed(2)}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <input type="number" min="0" value={item.quantity} onChange={(e) => updateCartQuantity(item.product.id, parseInt(e.target.value, 10))} className="w-16 bg-gray-900 text-center rounded-md p-1 border border-gray-600"/>
                        </div>
                        <p className="font-semibold w-24 text-right">${(item.product.price * item.quantity).toFixed(2)}</p>
                    </div>
                ))}
            </div>
            <div className="mt-6 text-right">
                <p className="text-lg">Subtotal: <span className="font-bold text-xl text-blue-400">${subtotal.toFixed(2)}</span></p>
                <button className="mt-4 bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-6 rounded-lg transition-colors">Checkout</button>
            </div>
        </div>
    );
};

const AssetsListView: React.FC<ContentPaneProps> = ({ node }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {node.meta.items.map((asset: any) => (
             <div key={asset.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg text-center p-4">
                 <img src={asset.thumbnailUrl} alt={asset.name} className="w-full h-48 object-cover rounded-md mb-4"/>
                 <h3 className="font-bold">{asset.name}</h3>
                 <p className="text-sm text-gray-400">{asset.format}</p>
                 <div className="text-xs mt-2 text-gray-500">
                     <span>{asset.polyCount.toLocaleString()} Polys</span> | <span>{asset.fileSize}</span>
                 </div>
             </div>
        ))}
    </div>
);

const MusicListView: React.FC<ContentPaneProps> = ({ node, onNavigate }) => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {node.children?.map(album => (
            <div key={album.id} onClick={() => onNavigate(album.path)} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer transform hover:-translate-y-1 transition-all duration-300 group">
                <img src={album.meta.coverArt} alt={album.name} className="w-full aspect-square object-cover" />
                <div className="p-3">
                    <p className="font-bold truncate group-hover:text-blue-400">{album.name}</p>
                    <p className="text-sm text-gray-400 truncate">{album.meta.artist}</p>
                </div>
            </div>
        ))}
    </div>
);

const AlbumDetailView: React.FC<ContentPaneProps> = ({ node, onPlayTrack }) => (
    <div className="max-w-4xl mx-auto md:flex md:space-x-8">
        <div className="md:w-1/3 flex-shrink-0">
             <img src={node.meta.coverArt} alt={node.name} className="w-full aspect-square object-cover rounded-lg shadow-2xl"/>
        </div>
        <div className="mt-6 md:mt-0">
            <h2 className="text-3xl font-bold">{node.name}</h2>
            <p className="text-lg text-gray-300">{node.meta.artist}</p>
            <p className="text-sm text-gray-500 mb-6">{node.meta.year}</p>
            <div className="space-y-2">
                {node.meta.tracks.map((track: Track, index: number) => (
                    <div key={track.id} onClick={() => onPlayTrack(track, node)} className="flex items-center p-3 rounded-md hover:bg-gray-800 cursor-pointer">
                        <span className="text-gray-500 w-8">{index + 1}.</span>
                        <span className="flex-grow">{track.title}</span>
                        <span className="text-gray-400">{track.duration}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const ContactsListView: React.FC<ContentPaneProps> = ({ node }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {node.meta.items.map((contact: any) => (
             <div key={contact.id} className="bg-gray-800 rounded-lg p-4 flex items-center space-x-4">
                 <img src={contact.avatarUrl} alt={contact.name} className="w-16 h-16 rounded-full" />
                 <div>
                     <h3 className="font-bold text-lg">{contact.name}</h3>
                     <p className="text-sm text-blue-400">{contact.email}</p>
                     <p className="text-sm text-gray-400">{contact.phone}</p>
                 </div>
             </div>
        ))}
    </div>
);

const MeetingsListView: React.FC<ContentPaneProps> = ({ node }) => {
    const meetingsToday = node.meta.items;
    
    return (
        <div className="max-w-2xl mx-auto bg-gray-800 rounded-lg p-6 shadow-xl">
             <h2 className="text-2xl font-bold mb-6">Upcoming Meetings</h2>
             <div className="space-y-4">
                {meetingsToday.map((meeting: Meeting) => (
                    <div key={meeting.id} className="bg-gray-900/50 p-4 rounded-lg flex space-x-4">
                        <div className="text-center border-r border-gray-700 pr-4">
                            <p className="text-sm text-blue-400 font-semibold">{meeting.startTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                            <p className="text-xs text-gray-500">to {meeting.endTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                        </div>
                        <div>
                            <h3 className="font-bold">{meeting.title}</h3>
                            <p className="text-sm text-gray-400">With: {meeting.participants.join(', ')}</p>
                        </div>
                    </div>
                ))}
             </div>
        </div>
    );
};