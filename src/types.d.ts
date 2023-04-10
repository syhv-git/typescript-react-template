/// <reference types="@mui/material" />

type ReducerType = 'SET_THEME';
type ReducerActions = { type: ReducerType };

type UUIDType = string;

interface ThemeContextType {
    state: {
        theme: Theme
    };
    dispatch: React.Dispatch<ReducerActions>;
}

interface GlobalProps {
    theme: Theme;
    isAuth: boolean;
    id?: string;
}

interface GlobalStateActions {
    ThemeContext: React.Context<ThemeContextType>;
}

interface PathTitles {
    title: JSX.Element | string;
    to: string;
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
