import { useState, useEffect, SetStateAction, Dispatch, MouseEvent } from 'react'
import ReactPaginate from 'react-paginate'
import './pagination.scss'
import { IDataItems, IItems } from 'redux/models/IItems'

const InfoTablePagination = (props: {
    data: IDataItems
    setViewData: Dispatch<SetStateAction<IItems[]>>
}) => {
    const [itemOffset, setItemOffset] = useState(0)
    const itemsPerPage = 2

    useEffect(()=> {
        props.setViewData(props.data.items.slice(itemOffset, itemOffset + itemsPerPage))
    }, [itemOffset, props.data])
    const pageCount = Math.ceil(props.data?props.data.items.length/itemsPerPage:0)

    const handlePageClick = (event: MouseEvent<HTMLElement>) => {
        const newOffset = (event.selected * itemsPerPage) % props.data.items.length
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
