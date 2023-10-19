import { TableSortProps } from 'models';

const TableSortButton = ({
    TableSort,
    setTableSort,
    nameSort,
}: TableSortProps) => {
    const setUserTableSortClick = () => {
        const newValue =
            TableSort.name !== nameSort
                ? 1
                : TableSort.value === 0
                ? 1
                : TableSort.value === 1
                ? 2
                : 0;
        setTableSort({ name: nameSort, value: newValue });
    };
    return (
        <div
            className="UserTableSortButton"
            onClick={() => setUserTableSortClick()}>
            <div
                style={{
                    color:
                        TableSort.value === 2 && TableSort.name === nameSort
                            ? 'black'
                            : 'grey',
                }}>
                ▲
            </div>
            <div
                style={{
                    color:
                        TableSort.value === 1 && TableSort.name === nameSort
                            ? 'black'
                            : 'grey',
                }}>
                ▼
            </div>
        </div>
    );
};

export default TableSortButton;
