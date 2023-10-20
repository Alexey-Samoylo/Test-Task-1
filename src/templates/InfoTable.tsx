import { Table, Spinner } from 'react-bootstrap';
import { useEffect, useState, useRef } from 'react';
import { itemsAPI } from 'redux/services/itemsService';
import { Coins, Items, QueryProps } from 'redux/models/reduxModels';
import { InfoTablePagination, Typography, TableSortButton } from 'components';
import { ITEMS_PER_PAGE, COINS_TABLE_TITLES } from 'constants/main';
import toast from 'react-hot-toast';
import { TableSortState } from 'models';

const InfoTable = () => {
    const stickyElementRef = useRef<HTMLTableHeaderCellElement>(null);

    const [pageOffset, setPageOffset] = useState(0);
    const [stickyParam, setStickyParam] = useState({
        width: stickyElementRef.current?.clientWidth,
        height: stickyElementRef.current?.clientHeight,
    });
    const [tableSort, setTableSort] = useState<TableSortState>({
        name: 'price',
        value: 0,
    });
    const [queryProps, setQueryProps] = useState<QueryProps>({
        pageOffset: pageOffset,
        ...tableSort,
    });

    useEffect(() => {
        setQueryProps({
            ...tableSort,
            pageOffset: pageOffset,
        });
    }, [pageOffset, tableSort]);

    const {
        data: items,
        isLoading,
        error,
    } = itemsAPI.useFetchAllItemsQuery(queryProps);
    useEffect(() => {
        error && toast.error('Loading error');
    }, []);
    useEffect(() => {
        setStickyParam({
            width: stickyElementRef.current?.clientWidth,
            height: stickyElementRef.current?.clientHeight,
        });
    }, [items]);

    return (
        <>
            <InfoTablePagination
                setPageOffset={setPageOffset}
                totalPages={items?.data.stats.total / ITEMS_PER_PAGE ?? 0}
            />
            <div className="tableCard">
                {isLoading ? (
                    <div style={{ position: 'relative' }}>
                        <div className="loadingSpinner">
                            <Spinner animation="border" variant="primary" />
                        </div>
                    </div>
                ) : (
                    ''
                )}
                <Table striped bordered hover>
                    <thead>
                        <tr className="sticky" style={{ zIndex: 1000 }}>
                            {COINS_TABLE_TITLES.map((title, index) => {
                                return (
                                    <th
                                        ref={
                                            index === 0
                                                ? stickyElementRef
                                                : undefined
                                        }
                                        className={index === 0 ? 'sticky' : ''}
                                        style={{
                                            left:
                                                index === 1
                                                    ? stickyParam.width
                                                    : '',
                                        }}>
                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                            }}>
                                            <Typography>
                                                {title.label}
                                            </Typography>
                                            {title.toSort ? (
                                                <TableSortButton
                                                    TableSort={tableSort}
                                                    setTableSort={setTableSort}
                                                    nameSort={title.value}
                                                />
                                            ) : (
                                                ''
                                            )}
                                        </div>
                                    </th>
                                );
                            })}
                        </tr>
                    </thead>
                    {/* {isLoading ? (
                        <div className="loadingSpinner">
                            <Spinner animation="border" variant="primary" />
                        </div>
                    ) : ( */}
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
                </Table>
            </div>
        </>
    );
};

export default InfoTable;
