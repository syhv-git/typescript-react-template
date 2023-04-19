import ProductCard from "../../Components/ProductCard/ProductCard";
import styled from "@mui/material/styles/styled";
import Grid2 from "@mui/material/Unstable_Grid2";
import cat from "../../assets/resources/cat.png";
import dog from "../../assets/resources/dog.png";

const defaultProducts: Product[] = [
    {
        id: '6f4fcc9c-95be-4714-a383-d6dd6e682c56',
        name: 'Cat',
        image: cat,
        price: 0,
        type: 'animal',
        avail: false,
    }, {
        id: 'b578a530-dbe1-414c-a3f1-be9db64e192e',
        name: 'Dog',
        image: dog,
        price: 0,
        type: 'animal',
        avail: false,
    },
];

const Layout = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 'calc(100vh - 320px)',
    backgroundColor: theme.palette.text.secondary,
}));

const Catalog = styled('div')(({ theme }) => ({
    height: 'calc(100vh - 380px)',
    width: 'calc(100% - 50px)',
    backgroundColor: theme.palette.mode === 'light' ? '#dde2e7' : '#6e7173',
    borderRadius: 25,
}));

export default function Products() {
    const listProducts = defaultProducts.map((v) => (
        <ProductCard { ...v } />
    ));

    return (
        <Layout>
            <Catalog>
                <Grid2>
                    { listProducts }
                </Grid2>
            </Catalog>
        </Layout>
    );
}
