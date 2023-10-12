import NavigateButton from "../elements/navigateButton";
import InfoTable from "../elements/infoTable";


const TablePage = () => {
    return (
        <div style={{padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px'}}>
            <NavigateButton name="Users" path="users" />
            <InfoTable />
        </div>
    )
}
export default TablePage;