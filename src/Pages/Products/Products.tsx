import ProductCard from "../../Components/ProductCard/ProductCard";
import styled from "@mui/material/styles/styled";
import Grid2 from "@mui/material/Unstable_Grid2";

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

const ProductLayout = styled('div')({
    minHeight: 'calc(100vh - 320px)',
});

export default function Products() {
    const listProducts = defaultProducts.map((v) => (
        <div key={v.id}>
            <ProductCard { ...v } />
        </div>
    ));

    return (
        <ProductLayout>
            <Grid2>
                { listProducts }
            </Grid2>
        </ProductLayout>
    );
}
