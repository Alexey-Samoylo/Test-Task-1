import { Dispatch, SetStateAction, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { AddUserModalProps, UserModalProps } from 'models'

const formTable = [
    {
        title: 'First Name',
        lable: 'firstName',
    },
    {
        title: 'Last Name',
        lable: 'lastName',
    },
    {
        title: 'Email',
        lable: 'email',
    },
]

const AddUserModal = (props: AddUserModalProps) => {
    const [newUser, setNewUser] = useState<UserModalProps>(props.index?props.usersData[props.index]:{
        firstName: '',
        lastName: '',
        email: '',
        role: 'Admin',
    })

    const handleClose = () => props.setOpen(false)
    const seveAndClose = () => {
        localStorage.setItem(
            'usersDate',
            JSON.stringify(props.usersData.concat(newUser))
        )
        props.setUsersDatа(props.usersData.concat(newUser))
        props.setOpen(false)
    }

    const setParam = (props: { name: string; value: string }) => {
        newUser[props.name as keyof typeof newUser] = props.value
        setParam(Object.assign(newUser))
    }

    return (
        <Modal show={props.isOpen} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add new user</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    {formTable.map((el) => {
                        console.log(newUser[el.lable as keyof typeof newUser])
                        return (
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>{el.title}</Form.Label>
                                <Form.Control
                                    value={newUser[el.lable as keyof typeof newUser]}
                                    onChange={(e) =>
                                        setParam({
                                            name: el.lable,
                                            value: e.target.value,
                                        })
                                    }
                                    placeholder="First Name"
                                />
                            </Form.Group>
                        )
                    })}
                    <Form.Control
                        aria-label="Default select example"
                        as="select"
                        onChange={(e) =>
                            setParam({ name: 'role', value: e.target.value })
                        }
                    >
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
    )
}

export default AddUserModal;
