import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProductCard(props: Product) {
    let src: string
    if (typeof props.image === 'string') {
        src = props.image
    } else {
        src = props.image[0]
    }

    return (
        <Card>
            <CardMedia src={src} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.name}
                </Typography>
            </CardContent>
            <CardActions>

            </CardActions>
        </Card>
    );
}
