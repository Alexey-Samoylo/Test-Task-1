import { useState, useEffect, SetStateAction, Dispatch } from 'react';
import ReactPaginate from 'react-paginate';
import './pagination.css'

const InfoTablePagination = (props: {data: any, setViewData: Dispatch<SetStateAction<never[]>>}) => {
    
    const [itemOffset, setItemOffset] = useState(0)
    const itemsPerPage = 2;
    const pageCount = Math.ceil(props.data?props.data.items.length/itemsPerPage:0)

    useEffect(()=> {
        props.setViewData(!props.data?[]:props.data.items.slice(itemOffset, itemOffset + itemsPerPage))
    }, [itemOffset, props.data])
    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % props.data.items.length
        console.log(newOffset)
        setItemOffset(newOffset)
    }

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
    )
}

export default InfoTablePagination;