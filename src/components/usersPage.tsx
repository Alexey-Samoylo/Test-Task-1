import NavigateButton from "../elements/navigateButton"
import UsersTable from "../elements/usersTable"


const UsersPage = () => {
    return (
        <div style={{padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px'}}>
            <NavigateButton name="Table" path="/" />
            <UsersTable />
        </div>
    )
}

export default UsersPage