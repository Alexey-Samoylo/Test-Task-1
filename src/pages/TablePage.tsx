import { NavigateButton } from 'components';
import { InfoTable } from 'templates';

const TablePage = () => {
    return (
        <div className="tablePage">
            <NavigateButton name="Users" path="users" />
            <InfoTable />
        </div>
    );
};
export default TablePage;
