import { TableSortProps } from 'models';
import { boolean } from 'yargs';

const TableSortButton = ({
    TableSort,
    setTableSort,
    nameSort,
}: TableSortProps) => {
    const getNewSortValue = (equalsName: boolean, value: number) => {
        if (equalsName || value === 0) {
            return 1;
        } else if (value === 1) {
            return 2;
        } else {
            return 0;
        }
    };

    const setUserTableSortClick = () => {
        setTableSort({
            name: nameSort,
            value: getNewSortValue(
                TableSort.name !== nameSort,
                TableSort.value
            ),
        });
    };

    const getArrowCollor = (equalvalue: boolean, equalName: boolean) => {
        return equalvalue && equalName ? 'black' : 'grey';
    };

    return (
        <div
            className="UserTableSortButton"
            onClick={() => setUserTableSortClick()}>
            <div
                style={{
                    color: getArrowCollor(
                        TableSort.value === 2,
                        TableSort.name === nameSort
                    ),
                }}>
                ▲
            </div>
            <div
                style={{
                    color: getArrowCollor(
                        TableSort.value === 1,
                        TableSort.name === nameSort
                    ),
                }}>
                ▼
            </div>
        </div>
    );
};

export default TableSortButton;
