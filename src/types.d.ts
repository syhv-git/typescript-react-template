type PathsType = '/' | '/products' | '/FAQs';

type ReducerType = 'SET_THEME';
type ReducerAction = { type: ReducerType };

type UUIDType = string;

interface ThemeContextType {
    state: { theme: string };
    dispatch: React.Dispatch<ReducerAction>;
}

interface GlobalProps {
    theme: Theme;
}

interface GlobalStateActions {
    ThemeContext: React.Context<ThemeContextType>;
}

interface PathTitles {
    title: React.ReactNode;
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
