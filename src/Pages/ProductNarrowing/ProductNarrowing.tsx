import styled from "@mui/material/styles/styled";
import ImageLink from "../../Components/ImageLink/ImageLink";

const Layout = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.text.secondary,
    minHeight: 'calc(100vh - 320px)',
}));

export default function ProductNarrowing() {
    const categories: ImagePathTitles[] = [
        {
            src: 'assets/resources/logoC.png',
            title: 'All Products',
            to: 'products/all',
        }, {
            src: 'assets/resources/cat.png',
            title: 'Cats',
            to: 'products/cats',
        }, {
            src: 'assets/resources/dog.png',
            title: 'Dogs',
            to: 'products/dogs',
        }
    ];

    return (
        <Layout>
            {categories.map((v) => <ImageLink src={v.src} title={v.title} to={v.to}/>)}
        </Layout>
    );
}
