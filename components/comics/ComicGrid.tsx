import React from 'react';
import { Comic } from '../../types/ComicsTypes';

interface ComicGridProps {
    comics: Comic[];
}

const ComicGrid: React.FC<ComicGridProps> = ({ comics }) => {
    return (
        <div className="comic-grid">
            {comics.map((comic) => (
                <div className="comic-card" key={comic.id}>
                    <img
                        className="comic-thumbnail"
                        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                        alt={comic.title}
                    />
                    <h3 className="comic-title">{comic.title}</h3>
                    <p className="comic-description">{comic.description}</p>
                    <p className="comic-issue">Issue #{comic.issueNumber}</p>
                </div>
            ))}
        </div>
    );
};

export default ComicGrid;