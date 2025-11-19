
import type React from 'react';

export interface FileSystemNode {
  id: string;
  name: string;
  type: 'folder' | 'products_list' | 'product_detail' | 'assets_list' | 'asset_detail' | 'music_list' | 'album_detail' | 'contacts_list' | 'meetings_list' | 'cart_view' | 'documents_list' | 'root';
  icon: React.ReactNode;
  path: string[];
  children?: FileSystemNode[];
  meta?: any;
}

export interface Product {
  id: string;
  name:string;
  brand: string;
  price: number;
  description: string;
  imageUrl: string;
  specs: Record<string, string>;
  options: Record<string, string[]>;
}

export interface CartItem {
    product: Product;
    quantity: number;
}

export interface Asset3D {
    id: string;
    name: string;
    format: 'GLB' | 'OBJ' | 'FBX';
    polyCount: number;
    fileSize: string;
    thumbnailUrl: string;
}

export interface Track {
    id: string;
    title: string;
    duration: string;
}

export interface Contact {
    id: string;
    name: string;
    email: string;
    phone: string;
    avatarUrl: string;
}

export interface Meeting {
    id: string;
    title: string;
    participants: string[];
    startTime: Date;
    endTime: Date;
}

export interface Document {
    id: string;
    name: string;
    type: 'PDF' | 'XLSX' | 'DOCX' | 'TXT';
    size: string;
    lastModified: string;
}