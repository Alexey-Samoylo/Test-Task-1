import { useState, useEffect, SetStateAction, Dispatch } from 'react';
import ReactPaginate from 'react-paginate';
import './pagination.scss';
import { Items } from 'redux/models/reduxModels';
import { ITEMS_PER_PAGE } from 'constants/index';

const InfoTablePagination = (props: {
    data: Items[];
    setViewData: Dispatch<SetStateAction<Items[]>>;
}) => {
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        props.setViewData(
            props.data.slice(itemOffset, itemOffset + ITEMS_PER_PAGE)
        );
    }, [itemOffset, props.data]);
    const pageCount = Math.ceil(
        props.data ? props.data.length / ITEMS_PER_PAGE : 0
    );

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * ITEMS_PER_PAGE) % props.data.length;
        setItemOffset(newOffset);
    };

    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
        />
    );
};

export default InfoTablePagination;
