/// <reference types="react" />

interface Product {
  id: string;
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
