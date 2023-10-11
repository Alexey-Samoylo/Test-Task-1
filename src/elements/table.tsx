import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const InfoTable = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://cloud.feedly.com/v3/streams/contents?streamId=feed/https://www.fca.org.uk/news/rss.xml&unreadOnly=False')
        .then((res:any) => {setData(res); console.log(res)})
    }, [])
    

    return (
        <Table>
            <thead>
                <tr>
                    <th>1</th>
                    <th>1</th>
                    <th>1</th>
                    <th>1</th>
                </tr>
            </thead>
            <tbody>
                {data.map(el => {
                    return (
                        <div></div>
                    )
                })}
            </tbody>
        </Table>
    )
}

export default InfoTable;