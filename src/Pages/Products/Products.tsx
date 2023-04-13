import React from 'react';
import { Stack } from "@mui/material";
import ProductCard from "../../Components/ProductCard/ProductCard";

const defaultProducts: Product[] = [
    {
        id: '6f4fcc9c-95be-4714-a383-d6dd6e682c56',
        name: 'Cat',
        image: '',
        price: 0,
        type: 'animal',
        avail: false,
    }, {
        id: 'b578a530-dbe1-414c-a3f1-be9db64e192e',
        name: 'Dog',
        image: '',
        price: 0,
        type: 'animal',
        avail: false,
    },
];

export default function Products() {
    const listProducts = defaultProducts.map((v) => (
        <div key={v.id}>
            <ProductCard { ...v } />
        </div>
    ));

    return (
        <Stack>
            {listProducts}
        </Stack>
    );
}
