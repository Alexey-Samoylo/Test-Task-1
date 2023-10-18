import { NavigateButton } from 'components';
import { UsersTable } from 'templates';

const UsersPage = () => {
    return (
        <div className="tablePage">
            <NavigateButton name="Table" path="/" />
            <UsersTable />
        </div>
    );
};

export default UsersPage;
