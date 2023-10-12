import { useState, useEffect, SetStateAction, Dispatch } from 'react';
import ReactPaginate from 'react-paginate';
import './pagination.css'

const InfoTablePagination = (props: {date: any, setViewData: Dispatch<SetStateAction<never[]>>}) => {
    
    const [itemOffset, setItemOffset] = useState(0)
    const itemsPerPage = 2;

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    // const endOffset = itemOffset + itemsPerPage
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`)
    useEffect(()=> {
        props.setViewData(props.date.slice(itemOffset, itemOffset + itemsPerPage))
    }, [itemOffset, props.date])
    // const currentItems = props.date.slice(itemOffset, endOffset)
    const pageCount = Math.ceil(props.date.length / itemsPerPage)

    // Invoke when user click to request another page.
    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % props.date.length
        // console.log(
        //     `User requested page number ${event.selected}, which is offset ${newOffset}`
        // )
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