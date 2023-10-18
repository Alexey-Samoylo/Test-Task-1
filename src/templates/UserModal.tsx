import { useEffect, useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { AddUserModalProps, FormTableFieldProps, UserModalProps } from 'models';
import { EMPTY_USER_DETAILS, FORM_TABLE_FIELDS } from 'constants/main';
import { Typography } from 'components';

const UserModal = ({
    isOpen,
    setOpen,
    usersData,
    setUsersData,
    index,
}: AddUserModalProps) => {
    const getUserDetails = (
        index: number | null,
        usersData: UserModalProps[]
    ) => {
        return !index ? EMPTY_USER_DETAILS : usersData[index];
    };

    const [newUser, setNewUser] = useState<UserModalProps>(
        getUserDetails(index, usersData)
    );

    const getUsersDataUpdate = (index: number | null, usersData: UserModalProps[]) => {
        if (!index) {
            return [...usersData, newUser]
        } else {
            usersData[index] = newUser
            return [...usersData]
        }
    }
    useEffect(() => {
        setNewUser(getUserDetails(index, usersData));
    }, [isOpen]);

    const handleClose = () => setOpen(false);
    const saveAndClose = () => {
        setUsersData(getUsersDataUpdate(index, usersData));
        setOpen(false);
    };

    return (
        <Modal show={isOpen} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <Typography>Add new user</Typography>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    {FORM_TABLE_FIELDS.map((field: FormTableFieldProps) => {
                        return (
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1">
                                <Form.Label>{field.label}</Form.Label>
                                <Form.Control
                                    value={
                                        newUser[
                                            field.value as keyof typeof newUser
                                        ]
                                    }
                                    onChange={e =>
                                        setNewUser({
                                            ...newUser,
                                            [field.value]: e.target.value,
                                        })
                                    }
                                    placeholder={field.label}
                                />
                            </Form.Group>
                        );
                    })}
                    <Form.Control
                        aria-label="Default select example"
                        as="select"
                        value={newUser.role}
                        onChange={e =>
                            setNewUser({ ...newUser, role: e.target.value })
                        }>
                        <option value="Admin">
                            <Typography>Admin</Typography>
                        </option>
                        <option value="User">
                            <Typography>User</Typography>
                        </option>
                        <option value="Editor">
                            <Typography>Editor</Typography>
                        </option>
                    </Form.Control>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    <Typography>Close</Typography>
                </Button>
                <Button variant="primary" onClick={saveAndClose}>
                    <Typography>Save</Typography>
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default UserModal;
