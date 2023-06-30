import { useEffect, useState } from 'react';
import Head from 'next/head';
import BodySingle from 'dh-marvel/components/layouts/body/single/body-single';
import { getComics } from '../pages/api/marvelAPI';
import Pagination from 'dh-marvel/components/pagination/Pagination';
import ComicGrid from 'dh-marvel/components/comics/ComicGrid';

const IndexPage = () => {
    const [comics, setComics] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const fetchComics = async () => {
            try {
                const comicsData = await getComics(currentPage);
                setComics(comicsData.results);
                setTotalPages(comicsData.totalPages);
            } catch (error) {
                console.error(error);
            }
        };

        fetchComics();
    }, [currentPage]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <>
            <Head>
                <title>"DH MARVEL" </title>
                <meta name='description' content='Sitio DH MARVEL' />
            </Head>
            <BodySingle>
                <ComicGrid comics={comics} />
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </BodySingle>
        </>
    );
};

export default IndexPage;