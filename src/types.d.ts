import React from 'react';
import { Theme } from '@mui/material';
import { Guid } from 'guid-typescript';

export interface ContextActions {
    ChangeTheme: () => void;
}

export type Paths = '/' | '/products' | '/FAQs';

export interface GlobalProps {
    theme: Theme;
}

export interface PathTitles {
    title: React.ReactNode;
    to: Paths;
}

export interface Product {
    id: Guid;
    name: string;
    image: string | Array<string>;
    price: number;
    type: string;
    avail: boolean;
}

export interface ProductInfo extends Product {
    desc: string;
    qty: number;
    sub: boolean;
}
