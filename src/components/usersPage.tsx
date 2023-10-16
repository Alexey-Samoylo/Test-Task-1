import NavigateButton from 'elements/navigateButton'
import UsersTable from 'elements/usersTable'

const UsersPage = () => {
    return (
        <div className="tablePage">
            <NavigateButton name="Table" path="/" />
            <UsersTable />
        </div>
    )
}

export default UsersPage
