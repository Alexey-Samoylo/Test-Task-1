import { Table, Spinner } from 'react-bootstrap';
import { useEffect, useState, useRef } from 'react';
import { itemsAPI } from 'redux/services/itemsService';
import { Items } from 'redux/models/reduxModels';
import { InfoTablePagination, Typography } from 'components';

const InfoTable = () => {
    const stickyElementRef = useRef<HTMLTableHeaderCellElement>(null);

    const [viewData, setViewData] = useState<Items[]>([]);
    const [stickyParam, setStickyParam] = useState({
        width: stickyElementRef.current?.clientWidth,
        height: stickyElementRef.current?.clientHeight,
    });

    useEffect(() => {
        setStickyParam({
            width: stickyElementRef.current?.clientWidth,
            height: stickyElementRef.current?.clientHeight,
        });
    }, [viewData]);
    const { data: items, isLoading } = itemsAPI.useFetchAllItemsQuery('');

    return (
        <>
            {isLoading ? (
                <Spinner animation="border" variant="primary" />
            ) : (
                <>
                    <InfoTablePagination
                        data={items?.items ?? []}
                        setViewData={setViewData}
                    />
                    <div className="tableCard">
                        <Table striped bordered hover>
                            <thead>
                                <tr className="sticky" style={{ zIndex: 1000 }}>
                                    <th
                                        ref={stickyElementRef}
                                        className={'sticky'}>
                                        <Typography>Title</Typography>
                                    </th>
                                    <th
                                        className="sticky"
                                        style={{ left: stickyParam.width }}>
                                        <Typography>Author</Typography>
                                    </th>
                                    <th>
                                        <Typography>Keywords</Typography>
                                    </th>
                                    <th>
                                        <Typography>Summary</Typography>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {viewData.map((item: Items) => {
                                    return (
                                        <tr>
                                            <td className="sticky">
                                                <Typography>
                                                    {item.title}
                                                </Typography>
                                            </td>
                                            <td
                                                className="sticky"
                                                style={{
                                                    left: stickyParam.width,
                                                }}>
                                                <Typography>
                                                    {item.author}
                                                </Typography>
                                            </td>
                                            <td>
                                                <Typography>
                                                    {item.keywords}
                                                </Typography>
                                            </td>
                                            <td>
                                                <Typography>
                                                    {item.summary.content.replace(
                                                        '&amp',
                                                        '&'
                                                    )}
                                                </Typography>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    </div>
                </>
            )}
        </>
    );
};

export default InfoTable;
