
import React, { useState, useMemo, useCallback, useEffect } from 'react';
import type { FileSystemNode, Product, Track, CartItem, Meeting } from './types';
import { ROOT_NODE, findNodeByPath } from './data/mockData';
import { HomeIcon, ChevronRightIcon, ArrowUpIcon, ArrowLeftIcon, ArrowRightIcon, CartIcon, PlayIcon, PauseIcon, SparklesIcon } from './components/Icons';
import { ContentPane } from './components/ContentPanes';

// Helper component defined outside App to prevent re-renders
const SidebarNode: React.FC<{
  node: FileSystemNode;
  currentPath: string[];
  onNavigate: (path: string[]) => void;
  level: number;
}> = ({ node, currentPath, onNavigate, level }) => {
  const [isOpen, setIsOpen] = useState(level < 2);
  const isFolder = node.children && node.children.length > 0;
  const pathString = node.path.join('/');
  const currentPathString = currentPath.slice(0, node.path.length).join('/');
  const isActive = pathString === currentPath.join('/');
  const isInPath = currentPathString.startsWith(pathString);

  const handleToggle = () => {
    if (isFolder) {
      setIsOpen(!isOpen);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate(node.path);
    if (isFolder) {
      setIsOpen(true);
    }
  };
  
  useEffect(() => {
    if(isInPath) {
      setIsOpen(true);
    }
  }, [isInPath]);

  return (
    <div>
      <div
        onClick={handleClick}
        className={`flex items-center space-x-2 py-1.5 px-3 rounded-md cursor-pointer transition-colors duration-150 ${
          isActive
            ? 'bg-blue-600 text-white'
            : 'hover:bg-gray-700'
        }`}
        style={{ paddingLeft: `${level * 1.5 + 0.75}rem` }}
      >
        {isFolder && (
          <ChevronRightIcon
            className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-90' : ''}`}
            onClick={handleToggle}
          />
        )}
        <div className="w-5 h-5 flex-shrink-0">{node.icon}</div>
        <span className="text-sm font-medium truncate">{node.name}</span>
      </div>
      {isFolder && isOpen && (
        <div className="mt-1">
          {node.children?.map((child) => (
            <SidebarNode
              key={child.id}
              node={child}
              currentPath={currentPath}
              onNavigate={onNavigate}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};


export default function App() {
  // Initialize state from local storage if available
  const [path, setPath] = useState<string[]>(() => {
    const saved = localStorage.getItem('gemini-explorer-path');
    return saved ? JSON.parse(saved) : ['C:'];
  });
  
  const [history, setHistory] = useState<string[][]>(() => {
    const saved = localStorage.getItem('gemini-explorer-history');
    return saved ? JSON.parse(saved) : [['C:']];
  });
  
  const [historyIndex, setHistoryIndex] = useState(() => {
    const saved = localStorage.getItem('gemini-explorer-historyIndex');
    return saved ? parseInt(saved, 10) : 0;
  });

  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('gemini-explorer-cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [nowPlaying, setNowPlaying] = useState<{track: Track, album: FileSystemNode} | null>(() => {
    try {
      const saved = localStorage.getItem('gemini-explorer-nowPlaying');
      return saved ? JSON.parse(saved) : null;
    } catch (e) { return null; }
  });
  
  const [isPlaying, setIsPlaying] = useState(false);

  const currentNode = useMemo(() => findNodeByPath(path) || ROOT_NODE, [path]);

  // Persistence effects
  useEffect(() => {
    localStorage.setItem('gemini-explorer-path', JSON.stringify(path));
  }, [path]);

  useEffect(() => {
    localStorage.setItem('gemini-explorer-cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('gemini-explorer-history', JSON.stringify(history));
    localStorage.setItem('gemini-explorer-historyIndex', historyIndex.toString());
  }, [history, historyIndex]);

  useEffect(() => {
    if (nowPlaying) {
      localStorage.setItem('gemini-explorer-nowPlaying', JSON.stringify(nowPlaying));
    } else {
      localStorage.removeItem('gemini-explorer-nowPlaying');
    }
  }, [nowPlaying]);


  const navigateTo = useCallback((newPath: string[]) => {
      const newHistory = history.slice(0, historyIndex + 1);
      newHistory.push(newPath);
      setHistory(newHistory);
      setHistoryIndex(newHistory.length - 1);
      setPath(newPath);
  }, [history, historyIndex]);

  const goBack = useCallback(() => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1;
      setHistoryIndex(newIndex);
      setPath(history[newIndex]);
    }
  }, [history, historyIndex]);

  const goForward = useCallback(() => {
    if (historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1;
      setHistoryIndex(newIndex);
      setPath(history[newIndex]);
    }
  }, [history, historyIndex]);

  const goUp = useCallback(() => {
    if (path.length > 1) {
      navigateTo(path.slice(0, -1));
    }
  }, [path, navigateTo]);

  const addToCart = useCallback((product: Product, quantity: number = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.product.id === product.id);
      if (existingItem) {
        return prevCart.map(item => 
          item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prevCart, { product, quantity }];
    });
    // Assuming 'Marketplace' is the parent of 'Shopping Cart' in new structure
    navigateTo(['C:', 'Marketplace', 'Shopping Cart']);
  }, [navigateTo]);

  const updateCartQuantity = useCallback((productId: string, quantity: number) => {
      setCart(prevCart => {
          if (quantity <= 0) {
              return prevCart.filter(item => item.product.id !== productId);
          }
          return prevCart.map(item => item.product.id === productId ? {...item, quantity} : item);
      });
  }, []);

  const playTrack = useCallback((track: Track, album: FileSystemNode) => {
      setNowPlaying({track, album});
      setIsPlaying(true);
  }, []);

  const togglePlayPause = useCallback(() => {
      if(nowPlaying) {
          setIsPlaying(prev => !prev);
      }
  }, [nowPlaying]);

  const cartItemCount = useMemo(() => cart.reduce((sum, item) => sum + item.quantity, 0), [cart]);

  return (
    <div className="h-screen w-screen flex flex-col bg-gray-900 text-gray-200 font-sans antialiased overflow-hidden">
      {/* Window Title Bar */}
      <header className="flex-shrink-0 h-8 bg-gray-800 flex items-center justify-center">
          <p className="text-xs font-semibold"><SparklesIcon className="w-4 h-4 inline-block -mt-1 mr-1 text-blue-400"/>Gemini File Explorer</p>
      </header>
      
      <div className="flex flex-grow min-h-0">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800/50 flex-shrink-0 p-2 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
          <nav className="space-y-1">
            <SidebarNode node={ROOT_NODE} currentPath={path} onNavigate={navigateTo} level={0} />
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col bg-gray-900 min-w-0">
          {/* Header/Toolbar */}
          <div className="flex-shrink-0 h-14 bg-gray-800/50 border-b border-gray-700/50 flex items-center px-4 space-x-2">
            <div className="flex items-center space-x-1">
              <button onClick={goBack} disabled={historyIndex === 0} className="p-2 rounded-full hover:bg-gray-700 disabled:opacity-50 disabled:hover:bg-transparent transition-colors">
                <ArrowLeftIcon className="w-5 h-5" />
              </button>
              <button onClick={goForward} disabled={historyIndex === history.length - 1} className="p-2 rounded-full hover:bg-gray-700 disabled:opacity-50 disabled:hover:bg-transparent transition-colors">
                <ArrowRightIcon className="w-5 h-5" />
              </button>
              <button onClick={goUp} disabled={path.length <= 1} className="p-2 rounded-full hover:bg-gray-700 disabled:opacity-50 disabled:hover:bg-transparent transition-colors">
                <ArrowUpIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Breadcrumbs */}
            <div className="flex-1 bg-gray-900/70 rounded-md p-2 flex items-center text-sm overflow-hidden">
              <HomeIcon className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0" />
              <div className="flex items-center overflow-x-auto scrollbar-none">
                {path.map((segment, index) => (
                  <React.Fragment key={index}>
                    <span 
                      className="cursor-pointer hover:underline whitespace-nowrap"
                      onClick={() => navigateTo(path.slice(0, index + 1))}
                    >
                      {segment}
                    </span>
                    {index < path.length - 1 && <ChevronRightIcon className="w-4 h-4 mx-1 text-gray-500 flex-shrink-0" />}
                  </React.Fragment>
                ))}
              </div>
            </div>
            
            <div className="relative">
                <button onClick={() => navigateTo(['C:', 'Marketplace', 'Shopping Cart'])} className="p-2 rounded-full hover:bg-gray-700 transition-colors">
                    <CartIcon className="w-6 h-6"/>
                    {cartItemCount > 0 && <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{cartItemCount}</span>}
                </button>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
            <ContentPane 
              node={currentNode} 
              onNavigate={navigateTo}
              onAddToCart={addToCart}
              cart={cart}
              updateCartQuantity={updateCartQuantity}
              onPlayTrack={playTrack}
            />
          </div>

          {/* Music Player */}
          {nowPlaying && (
            <footer className="flex-shrink-0 h-20 bg-gray-800/70 border-t border-gray-700/50 backdrop-blur-sm flex items-center px-4 space-x-4">
               <img src={nowPlaying.album.meta.coverArt} alt={nowPlaying.album.name} className="w-14 h-14 rounded-md shadow-lg" />
               <div className="flex-1">
                   <p className="font-bold text-white">{nowPlaying.track.title}</p>
                   <p className="text-sm text-gray-400">{nowPlaying.album.meta.artist}</p>
               </div>
               <button onClick={togglePlayPause} className="p-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white transition-colors">
                   {isPlaying ? <PauseIcon className="w-6 h-6" /> : <PlayIcon className="w-6 h-6" />}
               </button>
            </footer>
          )}
        </main>
      </div>
    </div>
  );
}
