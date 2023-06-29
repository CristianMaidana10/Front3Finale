import React from 'react';
import { Grid } from '@mui/material';
import { Comic } from '../../types/ComicsTypes';
import CardComponent from '../card/CardComponent';

interface ComicGridProps {
    comics: Comic[];
}

const ComicGrid: React.FC<ComicGridProps> = ({ comics }) => {
    const renderResults = () =>
        comics?.map((comic) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={comic.id}>
                <CardComponent comic={comic} />
            </Grid>
        ));

    return (
        <Grid
            container
            alignItems="stretch"
            spacing={2}
        >
            {renderResults()}
        </Grid>
    );
};

export default ComicGrid;