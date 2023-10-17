import NavigateButton from 'elements/navigateButton';
import InfoTable from 'elements/infoTable';

const TablePage = () => {
    return (
        <div className="tablePage">
            <NavigateButton name="Users" path="users" />
            <InfoTable />
        </div>
    );
};
export default TablePage;
