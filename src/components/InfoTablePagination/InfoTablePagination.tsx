import ReactPaginate from 'react-paginate';
import './InfoTablePagination.scss';
import { ITEMS_PER_PAGE } from 'constants/main';
import { InfoTablePaginationProps } from 'models';

const InfoTablePagination = ({totalPages, setPageOffset}: InfoTablePaginationProps) => {

    const handlePageClick = (event: any) => {
        setPageOffset(event.selected * ITEMS_PER_PAGE);
    };

    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={totalPages}
            previousLabel="<"
            renderOnZeroPageCount={null}
        />
    );
};

export default InfoTablePagination;
