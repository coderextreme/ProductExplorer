
import type { FileSystemNode, Product, Asset3D, Track, Contact, Meeting, Document } from '../types';
import React from 'react';
import { FolderIcon, ProductIcon, Asset3DIcon, MusicIcon, ContactIcon, CartIcon, FileIcon, ChartBarIcon, CpuChipIcon, DocumentTextIcon, BriefcaseIcon } from '../components/Icons';

// --- MOCK DATA ---
export const products: Product[] = [
  { id: 'prod-001', name: 'AuraBook Pro 14"', brand: 'Stellar', price: 1499, description: 'A sleek and powerful laptop for professionals and creatives.', imageUrl: 'https://picsum.photos/seed/laptop1/400/300', specs: { Processor: 'M3 Pro', Memory: '18GB Unified', Storage: '512GB SSD' }, options: { Color: ['Space Black', 'Silver'], Memory: ['18GB', '36GB'] } },
  { id: 'prod-002', name: 'Galaxy Phone X', brand: 'Orion', price: 999, description: 'The latest flagship smartphone with a stunning display and pro-grade camera.', imageUrl: 'https://picsum.photos/seed/phone1/400/300', specs: { Display: '6.7" Dynamic AMOLED', Camera: '108MP Wide', Battery: '5000mAh' }, options: { Color: ['Phantom Black', 'Cosmic Blue', 'Cloud White'], Storage: ['256GB', '512GB'] } },
  { id: 'prod-003', name: 'SoundScape ANC Headphones', brand: 'EchoWave', price: 349, description: 'Immerse yourself in pure sound with industry-leading noise cancellation.', imageUrl: 'https://picsum.photos/seed/headphones1/400/300', specs: { 'Noise Cancellation': 'Adaptive Hybrid ANC', 'Playtime': '30 hours', 'Connectivity': 'Bluetooth 5.2' }, options: { Color: ['Midnight Black', 'Ivory White'] } },
];

export const assets: Asset3D[] = [
    { id: 'asset-001', name: 'Cyberpunk Drone', format: 'GLB', polyCount: 45200, fileSize: '12.5 MB', thumbnailUrl: 'https://picsum.photos/seed/drone/300/300'},
    { id: 'asset-002', name: 'Vintage Sports Car', format: 'OBJ', polyCount: 150000, fileSize: '35.1 MB', thumbnailUrl: 'https://picsum.photos/seed/car/300/300'},
    { id: 'asset-003', name: 'Sci-Fi Spaceship', format: 'FBX', polyCount: 88900, fileSize: '21.8 MB', thumbnailUrl: 'https://picsum.photos/seed/ship/300/300'},
];

export const engDocs: Document[] = [
    { id: 'eng-001', name: 'System Architecture v2.0', type: 'PDF', size: '4.2 MB', lastModified: '2023-10-24' },
    { id: 'eng-002', name: 'API Specification', type: 'DOCX', size: '1.1 MB', lastModified: '2023-11-02' },
    { id: 'eng-003', name: 'Deployment Logs', type: 'TXT', size: '45 KB', lastModified: '2023-11-15' },
];

export const financeDocs: Document[] = [
    { id: 'fin-001', name: 'Q3 2024 Budget Analysis', type: 'XLSX', size: '2.5 MB', lastModified: '2023-10-15' },
    { id: 'fin-002', name: 'October Payroll', type: 'PDF', size: '800 KB', lastModified: '2023-11-01' },
    { id: 'fin-003', name: 'Investment Strategy', type: 'PDF', size: '5.2 MB', lastModified: '2023-09-20' },
];

export const hrDocs: Document[] = [
    { id: 'hr-001', name: 'Employee Handbook 2024', type: 'PDF', size: '3.1 MB', lastModified: '2023-08-12' },
    { id: 'hr-002', name: 'Org Chart', type: 'PDF', size: '1.5 MB', lastModified: '2023-11-05' },
    { id: 'hr-003', name: 'Holiday Schedule', type: 'DOCX', size: '120 KB', lastModified: '2023-01-10' },
];


// FIX: Define a type for the file system structure before paths are added. This makes the `children` property type-safe.
type FileSystemNodeStructure = Omit<FileSystemNode, 'path' | 'children'> & {
    children?: FileSystemNodeStructure[];
};

const musicAlbums: FileSystemNodeStructure[] = [
    { id: 'album-001', name: 'Chroma Dreams', type: 'album_detail', icon: React.createElement(MusicIcon, null), meta: { artist: 'Digital Nomads', year: '2023', coverArt: 'https://picsum.photos/seed/album1/400/400', tracks: [{id:'t11', title: 'Neon Sunrise', duration: '3:45'}, {id:'t12', title: 'Glass Towers', duration: '4:12'}, {id:'t13', title: 'Midnight Drive', duration: '5:02'}] } },
    { id: 'album-002', name: 'Oceanic Echoes', type: 'album_detail', icon: React.createElement(MusicIcon, null), meta: { artist: 'Aria Isles', year: '2022', coverArt: 'https://picsum.photos/seed/album2/400/400', tracks: [{id:'t21', title: 'Coral Hymn', duration: '4:01'}, {id:'t22', title: 'Tidal Whispers', duration: '3:55'}, {id:'t23', title: 'Abyssal Plain', duration: '6:15'}] } },
];

export const contacts: Contact[] = [
    { id: 'cont-001', name: 'Alia Chen', email: 'alia.chen@example.com', phone: '555-0101', avatarUrl: 'https://i.pravatar.cc/150?u=alia' },
    { id: 'cont-002', name: 'Ben Carter', email: 'ben.carter@example.com', phone: '555-0102', avatarUrl: 'https://i.pravatar.cc/150?u=ben' },
    { id: 'cont-003', name: 'Carla Diaz', email: 'carla.diaz@example.com', phone: '555-0103', avatarUrl: 'https://i.pravatar.cc/150?u=carla' },
];

export const meetings: Meeting[] = [
    { id: 'meet-001', title: 'Q3 Project Kickoff', participants: ['Alia Chen', 'Ben Carter'], startTime: new Date('2024-08-15T10:00:00'), endTime: new Date('2024-08-15T11:00:00')},
    { id: 'meet-002', title: 'Marketing Sync', participants: ['Carla Diaz'], startTime: new Date('2024-08-15T14:30:00'), endTime: new Date('2024-08-15T15:00:00')},
    { id: 'meet-003', title: 'Design Review', participants: ['Alia Chen', 'Carla Diaz'], startTime: new Date('2024-08-16T11:00:00'), endTime: new Date('2024-08-16T12:30:00')},
];


// --- FILE SYSTEM STRUCTURE ---

const buildFileSystem = (node: FileSystemNodeStructure, parentPath: string[] = []): FileSystemNode => {
  const currentPath = [...parentPath, node.name];
  const { children, ...rest } = node;
  const newNode: FileSystemNode = {
    ...rest,
    path: currentPath
  };
  if (children) {
    newNode.children = children.map(child => buildFileSystem(child, currentPath));
  }
  return newNode;
};

export const ROOT_NODE_STRUCTURE: FileSystemNodeStructure = {
  id: 'root',
  name: 'C:',
  type: 'root',
  icon: React.createElement(FolderIcon, { open: true }),
  children: [
    {
        id: 'workspaces', name: 'Workspaces', type: 'folder', icon: React.createElement(BriefcaseIcon, null),
        children: [
            { id: 'engineering', name: 'Engineering', type: 'documents_list', icon: React.createElement(CpuChipIcon, null), meta: { items: engDocs } },
            { id: 'finance', name: 'Finance', type: 'documents_list', icon: React.createElement(ChartBarIcon, null), meta: { items: financeDocs } },
            { id: 'hr', name: 'Human Resources', type: 'documents_list', icon: React.createElement(DocumentTextIcon, null), meta: { items: hrDocs } },
        ]
    },
    { 
        id: 'marketplace', name: 'Marketplace', type: 'folder', icon: React.createElement(ProductIcon, null),
        children: [
             { id: 'products', name: 'Products', type: 'products_list', icon: React.createElement(ProductIcon, null), meta: { items: products } },
             { id: 'cart', name: 'Shopping Cart', type: 'cart_view', icon: React.createElement(CartIcon, null) }
        ]
    },
    { 
        id: 'creative', name: 'Creative Studio', type: 'folder', icon: React.createElement(Asset3DIcon, null),
        children: [
             { id: 'assets', name: '3D Assets', type: 'assets_list', icon: React.createElement(Asset3DIcon, null), meta: { items: assets } },
             { id: 'music', name: 'Music Library', type: 'music_list', icon: React.createElement(MusicIcon, null), children: musicAlbums, meta: { items: musicAlbums } },
        ]
    },
    { 
        id: 'network', name: 'Network', type: 'folder', icon: React.createElement(ContactIcon, null),
        children: [
            { id: 'contacts-list', name: 'Contacts', type: 'contacts_list', icon: React.createElement(ContactIcon, null), meta: { items: contacts } },
            { id: 'meetings-list', name: 'Calendar', type: 'meetings_list', icon: React.createElement(FileIcon, null), meta: { items: meetings } },
        ]
    },
  ],
};

export const ROOT_NODE = buildFileSystem(ROOT_NODE_STRUCTURE);

export const findNodeByPath = (path: string[]): FileSystemNode | null => {
    if (path.length === 0) return null;
    let currentNode: FileSystemNode = ROOT_NODE;
    // If strict path matching fails on root name, handle gracefully or assume C:
    if (path[0] !== ROOT_NODE.name) return null;
    if (path.length === 1) return ROOT_NODE;

    for (let i = 1; i < path.length; i++) {
        const segment = path[i];
        const nextNode = currentNode.children?.find(child => child.name === segment);
        if (nextNode) {
            currentNode = nextNode;
        } else {
            return null;
        }
    }
    return currentNode;
};