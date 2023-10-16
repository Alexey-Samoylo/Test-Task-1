import { useState, useEffect, SetStateAction, Dispatch } from 'react'
import ReactPaginate from 'react-paginate'
import './pagination.scss'

const InfoTablePagination = (props: {
    date: any
    setViewData: Dispatch<SetStateAction<never[]>>
}) => {
    const [itemOffset, setItemOffset] = useState(0)
    const itemsPerPage = 2

    useEffect(() => {
        props.setViewData(
            props.date.slice(itemOffset, itemOffset + itemsPerPage)
        )
    }, [itemOffset, props.date])
    const pageCount = Math.ceil(props.date.length / itemsPerPage)

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % props.date.length
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

export default InfoTablePagination
