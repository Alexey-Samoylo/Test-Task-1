import { Table, Spinner } from 'react-bootstrap';
import { useEffect, useState, useRef } from 'react';
import { itemsAPI } from 'redux/services/itemsService';
import { Coins, Items } from 'redux/models/reduxModels';
import { InfoTablePagination, Typography } from 'components';
import { ITEMS_PER_PAGE } from 'constants/main';

const InfoTable = () => {
    const stickyElementRef = useRef<HTMLTableHeaderCellElement>(null);

    const [pageOffset, setPageOffset] = useState(0);
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
    const { data: items, isLoading } =
        itemsAPI.useFetchAllItemsQuery(pageOffset);
    useEffect(() => {
        console.log(isLoading);
    }, [isLoading]);

    return (
        <>
            <InfoTablePagination
                setPageOffset={setPageOffset}
                totalPages={items?.data.stats.total / ITEMS_PER_PAGE ?? 0}
            />
            <div className="tableCard">
                <Table striped bordered hover>
                    <thead>
                        <tr className="sticky" style={{ zIndex: 1000 }}>
                            <th ref={stickyElementRef} className={'sticky'}>
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
                    {isLoading ? (
                        <Spinner animation="border" variant="primary" />
                    ) : (
                        <tbody>
                            {items &&
                                items.data.coins.map((coins: Coins) => {
                                    return (
                                        <tr>
                                            <td className="sticky">
                                                <Typography>
                                                    {coins.name}
                                                </Typography>
                                            </td>
                                            <td
                                                className="sticky"
                                                style={{
                                                    left: stickyParam.width,
                                                }}>
                                                <Typography>
                                                    {coins.uuid}
                                                </Typography>
                                            </td>
                                            <td>
                                                <Typography>
                                                    {coins.price}
                                                </Typography>
                                            </td>
                                            <td>
                                                <Typography>
                                                    {coins.marketCap}
                                                </Typography>
                                            </td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    )}
                </Table>
            </div>
        </>
    );
};

export default InfoTable;
