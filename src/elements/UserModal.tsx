import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { AddUserModalProps, UserModalProps } from 'models';

const formTable = [
    {
        title: 'First Name',
        label: 'firstName',
    },
    {
        title: 'Last Name',
        label: 'lastName',
    },
    {
        title: 'Email',
        label: 'email',
    },
];

const UserModal = (props: AddUserModalProps) => {
    const { isOpen, setOpen, usersData, setUsersDatа, index, setIndex } = props;
    const [newUser, setNewUser] = useState<UserModalProps>(
        index !== undefined
            ? usersData[index]
            : {
                  firstName: '',
                  lastName: '',
                  email: '',
                  role: 'Admin',
              }
    );
    useEffect(() => {
        setNewUser(
            index !== undefined
                ? usersData[index]
                : {
                      firstName: '',
                      lastName: '',
                      email: '',
                      role: 'Admin',
                  }
        );
    }, [isOpen]);

    const handleClose = () => setOpen(false);
    const seveAndClose = () => {
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
                <Modal.Title>Add new user</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    {formTable.map(el => {
                        return (
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1">
                                <Form.Label>{el.title}</Form.Label>
                                <Form.Control
                                    value={
                                        newUser[
                                            el.label as keyof typeof newUser
                                        ]
                                    }
                                    onChange={e =>
                                        setNewUser({
                                            ...newUser,
                                            [el.label]: e.target.value,
                                        })
                                    }
                                    placeholder="First Name"
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
                        <option value="Admin">Admin</option>
                        <option value="User">User</option>
                        <option value="Editor">Editor</option>
                    </Form.Control>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={seveAndClose}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default UserModal;
