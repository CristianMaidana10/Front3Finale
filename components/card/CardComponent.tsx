import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { IComic } from 'types/IComic.type';

interface Props {
    comic: IComic;
}

const CardComponent: React.FC<Props> = ({ comic }) => {
    const { title, thumbnail } = comic;

    return (
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
                component="img"
                height="400"
                image={`${thumbnail.path}.${thumbnail.extension}`}
                alt={title}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                    {title}
                </Typography>
                <Button variant="contained" color="primary">
                    Comprar
                </Button>
                <Button variant="outlined" color="primary">
                    Ver detalle
                </Button>
            </CardContent>
        </Card>
    );
};

export default CardComponent;