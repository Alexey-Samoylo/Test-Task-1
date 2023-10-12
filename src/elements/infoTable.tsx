import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const InfoTable = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://cloud.feedly.com/v3/streams/contents?streamId=feed/https://www.fca.org.uk/news/rss.xml&unreadOnly=False')
        .then((res:any) => {setData(res.data.items); console.log(res.data.items)})
    }, [])

    const secondElementStickyLeft = document.querySelector('th.FirstRow');
    const widthSecondElementStickyLeft = secondElementStickyLeft?.clientWidth;
    const heightSecondElementStickyLeft = secondElementStickyLeft?.clientHeight;

    return (
        <div style={{overflow: 'auto', maxHeight: '85vh'}}>
            <Table striped bordered hover>
                <thead>
                    <tr style={{position: 'sticky', top: 0, zIndex: 1000}}>
                        <th className={'FirstRow'} style={{position: 'sticky', left:0, top:0}}>Title</th>
                        <th style={{position: 'sticky', left: widthSecondElementStickyLeft, top:0}}>Author</th>
                        <th>Keywords</th>
                        <th>Summary</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((el: any) => {
                        return(
                            <tr>
                                <td style={{position: 'sticky', left: 0}}>{el.title}</td>
                                <td style={{position: 'sticky', left: widthSecondElementStickyLeft}}>{el.author}</td>
                                <td>{el.keywords}</td>
                                <td>{el.summary.content.replace("&amp", "&")}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default InfoTable;