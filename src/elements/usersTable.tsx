import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import minus from '../assets/images/minus.svg';
import plus from '../assets/images/plus.svg';
import edit from '../assets/images/pencil.svg';
import UserModal from './UserModal';
import { UserModalProps } from 'models';
import Typography from './Typography';

const UsersTable = () => {
    const localStorageUsersData = localStorage.getItem('usersData');
    const [usersData, setUsersData] = useState(
        localStorageUsersData ? JSON.parse(localStorageUsersData) : []
    );
    const [isOpen, setOpen] = useState(false);
    const [editUserIndex, setEditUserIndex] = useState<number | null>(null);

    const deleteUser = (index: number) => {
        usersData.splice(index, 1);
        setUsersData(usersData.slice());
    };
    useEffect(() => {
        if (!isOpen) {
            setEditUserIndex(null);
        }
    }, [isOpen]);

    useEffect(() => {
        localStorage.setItem('usersData', JSON.stringify(usersData));
    }, [usersData]);

    const editUser = (index: number) => {
        setEditUserIndex(index);
        setOpen(true);
    };

    return (
        <div className="tableCard">
            <Button
                variant="success"
                onClick={() => setOpen(true)}
                style={{ marginBottom: '10px' }}>
                <Typography>Add</Typography> <img alt="add" src={plus} />
            </Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>
                            <Typography>First Name</Typography>
                        </th>
                        <th>
                            <Typography>Second Name</Typography>
                        </th>
                        <th>
                            <Typography>Email</Typography>
                        </th>
                        <th>
                            <Typography>Role</Typography>
                        </th>
                        <th colSpan={2}></th>
                    </tr>
                </thead>
                <tbody>
                    {usersData.map((user: UserModalProps, index: number) => {
                        return (
                            <tr>
                                <td>
                                    <Typography>{user.firstName}</Typography>
                                </td>
                                <td>
                                    <Typography>{user.lastName}</Typography>
                                </td>
                                <td>
                                    <Typography>{user.email}</Typography>
                                </td>
                                <td>
                                    <Typography>{user.role}</Typography>
                                </td>
                                <td>
                                    <img
                                        src={edit}
                                        alt="edit"
                                        onClick={() => editUser(index)}
                                    />
                                </td>
                                <td>
                                    <img
                                        src={minus}
                                        alt="minus"
                                        onClick={() => deleteUser(index)}
                                    />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
            <div>
                <UserModal
                    isOpen={isOpen}
                    setOpen={setOpen}
                    usersData={usersData}
                    setUsersDatа={setUsersData}
                    index={editUserIndex}
                />
            </div>
        </div>
    );
};

export default UsersTable;
