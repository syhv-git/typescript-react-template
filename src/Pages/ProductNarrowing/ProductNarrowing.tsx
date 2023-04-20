import styled from "@mui/material/styles/styled";
import ImageLink from "../../Components/ImageLink/ImageLink";
import logo from "../../assets/resources/logoC.png";
import cat from "../../assets/resources/cat.png";
import dog from "../../assets/resources/dog.png";

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
            src: logo,
            title: 'All Products',
            to: 'products/all',
        }, {
            src: cat,
            title: 'Cats',
            to: 'products/cats',
        }, {
            src: dog,
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
