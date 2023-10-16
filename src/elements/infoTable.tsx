import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import InfoTablePagination from './pagination';
import { itemsAPI } from '../redux/services/itemsService';

const InfoTable = () => {
    const stickyElementRef = useRef<HTMLTableHeaderCellElement>(null)

    const [viewData, setViewData] = useState([])
    const [stickyParam, setStickyParam] = useState({
        width: stickyElementRef.current?.clientWidth,
        height: stickyElementRef.current?.clientHeight,
    })

    useEffect(() => {
        setStickyParam({
            width: stickyElementRef.current?.clientWidth,
            height: stickyElementRef.current?.clientHeight,
        })
    }, [viewData])
    const {data: items} = itemsAPI.useFetchAllItemsQuery('')

    return (
        <>
            <InfoTablePagination date={date} setViewData={setViewData} />
            <div className="tableCard">
                <Table striped bordered hover>
                    <thead>
                        <tr className="sticky" style={{ zIndex: 1000 }}>
                            <th ref={stickyElementRef} className={'sticky'}>
                                Title
                            </th>
                            <th
                                className="sticky"
                                style={{ left: stickyParam.width }}
                            >
                                Author
                            </th>
                            <th>Keywords</th>
                            <th>Summary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {viewData.map((el: any) => {
                            return (
                                <tr>
                                    <td className="sticky">{el.title}</td>
                                    <td
                                        className="sticky"
                                        style={{ left: stickyParam.width }}
                                    >
                                        {el.author}
                                    </td>
                                    <td>{el.keywords}</td>
                                    <td>
                                        {el.summary.content.replace(
                                            '&amp',
                                            '&'
                                        )}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
            <InfoTablePagination data={items} setViewData={setViewData} />
        </>
    )
}

export default InfoTable
