import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { AddUserModalProps, FormTableFieldProps, UserModalProps } from 'models';
import { EMPTY_USER_DETAILS, formTableFields } from 'constants/index';
import Typography from './Typography';

const UserModal = ({
    isOpen,
    setOpen,
    usersData,
    setUsersDatа,
    index,
}: AddUserModalProps) => {

    const getUserDetails = (
        index: number | null,
        usersData: UserModalProps[]
    ) => {
        return index !== null ? usersData[index] : EMPTY_USER_DETAILS;
    };

    const [newUser, setNewUser] = useState<UserModalProps>(
        getUserDetails(index, usersData)
    );
    useEffect(() => {
        setNewUser(getUserDetails(index, usersData));
    }, [isOpen]);

    const handleClose = () => setOpen(false);
    const saveAndClose = () => {
        localStorage.setItem(
            'usersData',
            JSON.stringify([...usersData, newUser])
        );
        setUsersDatа([...usersData, newUser]);
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
                    {formTableFields.map((field: FormTableFieldProps) => {
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
