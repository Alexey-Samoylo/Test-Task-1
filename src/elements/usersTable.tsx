import { useState } from 'react'
import { Table } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import minus from 'assets/images/minus.svg'
import plus from 'assets/images/plus.svg'
import edit from 'assets/images/pencil.svg'
import AddUserModal from 'elements/AddUserModal'

const UsersTable = () => {
    const localStorageUsersDatа = localStorage.getItem('usersDatа')
    const [usersDatа, setUsersDatа] = useState(
        localStorageUsersDatа ? JSON.parse(localStorageUsersDatа) : []
    )
    const [isOpen, setOpen] = useState(false)

    return (
        <div className="tableCard">
            <Button
                variant="success"
                onClick={() => setOpen(true)}
                style={{ marginBottom: '10px' }}
            >
                Add <img alt="add" src={plus} />
            </Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Second Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th colSpan={2}></th>
                    </tr>
                </thead>
                <tbody>
                    {usersDatа.map((el: any) => {
                        return (
                            <tr>
                                <td>{el.firstName}</td>
                                <td>{el.lastName}</td>
                                <td>{el.email}</td>
                                <td>{el.role}</td>
                                <td>
                                    <img src={edit} alt="edit" />
                                </td>
                                <td>
                                    <img src={minus} alt="minus" />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            <div>
                <AddUserModal
                    isOpen={isOpen}
                    setOpen={setOpen}
                    usersData={usersDatа}
                    setUsersDatа={setUsersDatа}
                />
            </div>
        </div>
    )
}

export default UsersTable
