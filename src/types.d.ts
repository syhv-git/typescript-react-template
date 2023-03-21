type Paths = '/' | '/products' | '/FAQs';

type UUID = string

interface GlobalProps {
    theme: mui.Theme;
}

interface ContextActions {
    ChangeTheme: () => void;
}

interface PathTitles {
    title: React.ReactNode;
    to: Paths;
}

interface Product {
    id: UUID;
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
