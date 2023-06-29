import React from 'react';

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
}) => {
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;

    const handlePrevPage = () => {
        if (!isFirstPage) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (!isLastPage) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className='pagination'>
            <button onClick={handlePrevPage} disabled={isFirstPage}>
                Previous
            </button>
            <span className='current-page'>{currentPage}</span>
            <span className='separator'>/</span>
            <span className='total-pages'>{totalPages}</span>
            <button onClick={handleNextPage} disabled={isLastPage}>
                Next
            </button>
        </div>
    );
};

export default Pagination;