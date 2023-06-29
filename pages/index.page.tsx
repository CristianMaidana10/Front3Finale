import { useEffect, useState } from 'react';
import Head from 'next/head';
import BodySingle from 'dh-marvel/components/layouts/body/single/body-single';
import ComicGrid from '../components/comics/ComicGrid';
import { getComics } from '../pages/api/marvelAPI';

const IndexPage = () => {
    const [comics, setComics] = useState([]);

    useEffect(() => {
        const fetchComics = async () => {
            try {
                const comicsData = await getComics();
                setComics(comicsData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchComics();
    }, []);

    return (
        <>
            <Head>
                <title>"DH MARVEL" </title>
                <meta name='description' content='Sitio DH MARVEL' />
            </Head>
            <BodySingle>
                <ComicGrid comics={comics} />
            </BodySingle>

        </>
    );
};

export default IndexPage;