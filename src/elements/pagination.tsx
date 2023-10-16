import {
    useState,
    useEffect,
    SetStateAction,
    Dispatch,
    MouseEvent,
} from 'react';
import ReactPaginate from 'react-paginate';
import './pagination.scss';
import { DataItems, Items } from 'redux/models/reduxModels';

const InfoTablePagination = (props: {
    data: Items[];
    setViewData: Dispatch<SetStateAction<Items[]>>;
}) => {
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 2;

    useEffect(() => {
        props.setViewData(
            props.data.slice(itemOffset, itemOffset + itemsPerPage)
        );
    }, [itemOffset, props.data]);
    const pageCount = Math.ceil(
        props.data ? props.data.length / itemsPerPage : 0
    );

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % props.data.length;
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
