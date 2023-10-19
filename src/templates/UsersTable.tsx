import { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import minus from '../assets/images/minus.svg';
import plus from '../assets/images/plus.svg';
import edit from '../assets/images/pencil.svg';
import { UserModal } from 'templates';
import { UserModalProps, TableSortState } from 'models';
import { Typography, TableSortButton } from 'components';
import { USER_TABLE_TITLE } from 'constants/main';
import sortUserTable from 'helpers/sortUserTable';

const UsersTable = () => {
    const localStorageUsersData = localStorage.getItem('usersData');
    const [usersData, setUsersData] = useState<UserModalProps[]>(
        localStorageUsersData ? JSON.parse(localStorageUsersData) : []
    );
    const [isOpen, setOpen] = useState(false);
    const [editUserIndex, setEditUserIndex] = useState<number | null>(null);
    const [userTableSort, setUserTableSort] = useState<TableSortState>({
        name: 'firstName',
        value: 0,
    });

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
                className="addButton">
                <Typography>Add</Typography> <img alt="add" src={plus} />
            </Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        {USER_TABLE_TITLE.map(title => {
                            return (
                                <th>
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                        }}>
                                        <Typography>{title.label}</Typography>
                                        <TableSortButton
                                            TableSort={userTableSort}
                                            setTableSort={setUserTableSort}
                                            nameSort={title.value}
                                        />
                                    </div>
                                </th>
                            );
                        })}
                        <th colSpan={2}></th>
                    </tr>
                </thead>
                <tbody>
                    {sortUserTable(usersData, userTableSort).map(
                        (user: UserModalProps, index: number) => {
                            return (
                                <tr>
                                    <td>
                                        <Typography>
                                            {user.firstName}
                                        </Typography>
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
                        }
                    )}
                </tbody>
            </Table>
            <div>
                <UserModal
                    isOpen={isOpen}
                    setOpen={setOpen}
                    usersData={usersData}
                    setUsersData={setUsersData}
                    index={editUserIndex}
                />
            </div>
        </div>
    );
};

export default UsersTable;
