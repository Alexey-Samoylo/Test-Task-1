import { useState } from "react";
import { Table } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import minus from '../assets/images/minus.svg'
import plus from '../assets/images/plus.svg'
import edit from '../assets/images/pencil.svg'
import ModalAdd from "./modalAddEdit";


const UsersTable = () => {
    const localStorageUsersDate = localStorage.getItem('usersDate')
    const [usersDate, setUsersDate] = useState(localStorageUsersDate?JSON.parse(localStorageUsersDate):[]);
    const [showModal, setShowModal] = useState(false)

    return (
        <div style={{overflow: 'auto', maxHeight: '85vh'}}>
            <Button variant="success" onClick={() => setShowModal(true)} style={{marginBottom: '10px'}}>Add <img alt="add" src={plus} /></Button>
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
                    {usersDate.map((el: any) => {
                        return(
                            <tr>
                                <td>{el.firstName}</td>
                                <td>{el.lastName}</td>
                                <td>{el.email}</td>
                                <td>{el.role}</td>
                                <td><img src={edit} alt="edit"/></td>
                                <td><img src={minus} alt="minus"/></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            <div>
                <ModalAdd show={showModal} setShow={setShowModal} usersDate={usersDate} setUsersDate={setUsersDate} />
            </div>
        </div>
    )
}

export default UsersTable;