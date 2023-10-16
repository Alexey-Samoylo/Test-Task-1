import { useEffect, useState, Dispatch, SetStateAction } from "react";
import { Table } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import minus from '../assets/images/minus.svg'
import plus from '../assets/images/plus.svg'
import edit from '../assets/images/pencil.svg'
import ModalAdd, { users } from "./modalAddEdit";

interface usersModalProps {
    show: boolean,
    setShow: Dispatch<SetStateAction<boolean>>,
    usersData: users[],
    setUsersData: Dispatch<SetStateAction<users[]>>
    editData?: users,
    index?: number,
} 

const UsersTable = () => {
    const localStorageUsersDate = localStorage.getItem('usersData')
    const [usersData, setUsersData] = useState(localStorageUsersDate?JSON.parse(localStorageUsersDate):[]);
    const [showModal, setShowModal] = useState(false)
    const [editUser, setEditUser] = useState({
        data: usersData,
    })

    const deleteUser = (index: number) => {
        usersData.splice(index, 1)
        setUsersData(usersData.slice())
    }

    useEffect(() => {
        localStorage.setItem('usersData', JSON.stringify(usersData))
    }, [usersData])

    const edituser = (data: users, index: number) => {
         
    }

    

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
                    {usersData.map((el: any, index: number) => {
                        return(
                            <tr>
                                <td>{el.firstName}</td>
                                <td>{el.lastName}</td>
                                <td>{el.email}</td>
                                <td>{el.role}</td>
                                <td><img src={edit} alt="edit" /></td>
                                <td><img src={minus} alt="minus" onClick={() => deleteUser(index)} /></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            <div>
                <ModalAdd show={showModal} setShow={setShowModal} usersData={usersData} setUsersData={setUsersData} />
            </div>
        </div>
    )
}

export default UsersTable;