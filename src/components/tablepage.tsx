import NavigateButton from "../elements/navigateButton";
import InfoTable from "../elements/table";


const TablePage = () => {
    return (
        <div>
            <NavigateButton name="Users" path="users" />
            <InfoTable />
        </div>
    )
}
export default TablePage;