import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import InfoTablePagination from './pagination';
import { itemsAPI } from '../redux/services/itemsService';

const InfoTable = () => {

    const secondElementStickyLeft = document.querySelector('th.FirstRow');

    const [viewData, setViewData] = useState([])
    const [stickyParam, setStickyParam] = useState({
        width: secondElementStickyLeft?.clientWidth,
        height: secondElementStickyLeft?.clientHeight
    })

    useEffect(() => {
        setStickyParam({
            width: secondElementStickyLeft?.clientWidth,
            height: secondElementStickyLeft?.clientHeight
        })
    }, [viewData])
    const {data: items} = itemsAPI.useFetchAllItemsQuery('')

    return (
        <>
            <div style={{overflow: 'auto', maxHeight: '85vh'}}>
                <Table striped bordered hover>
                    <thead>
                        <tr style={{position: 'sticky', top: 0, zIndex: 1000}}>
                            <th className={'FirstRow'} style={{position: 'sticky', left:0, top:0}}>Title</th>
                            <th style={{position: 'sticky', left: stickyParam.width, top:0}}>Author</th>
                            <th>Keywords</th>
                            <th>Summary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {viewData.map((el: any) => {
                            return(
                                <tr>
                                    <td style={{position: 'sticky', left: 0}}>{el.title}</td>
                                    <td style={{position: 'sticky', left: stickyParam.width}}>{el.author}</td>
                                    <td>{el.keywords}</td>
                                    <td>{el.summary.content.replace("&amp", "&")}</td>
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

export default InfoTable;