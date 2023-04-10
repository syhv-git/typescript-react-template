/// <reference types="@mui/material" />

type PathsType = '/' | '/products' | '/FAQs';

type ReducerType = 'SET_THEME';
type ReducerActions = { type: ReducerType };

type UUIDType = string;

interface ThemeContextType {
    state: { theme: 'light' | 'dark' };
    dispatch: React.Dispatch<ReducerActions>;
}

interface GlobalProps {
    theme: Theme;
}

interface GlobalStateActions {
    ThemeContext: React.Context<ThemeContextType>;
}

interface PathTitles {
    title: JSX.Element | string;
    to: PathsType;
}

interface Product {
    id: UUIDType;
    name: string;
    image: string | Array<string>;
    price: number;
    type: string;
    avail: boolean;
}

interface ProductInfo extends Product {
    desc: string;
    qty: number;
    sub: boolean;
}
