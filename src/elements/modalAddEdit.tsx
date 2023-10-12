import { Dispatch, SetStateAction, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ModalAdd = (props: {show: boolean, 
                        setShow: Dispatch<SetStateAction<boolean>>,
                        usersDate: any,
                        setUsersDate: Dispatch<SetStateAction<boolean>>}) => {

    const [newUser, setNewUser] = useState({
        'firstName': '',
        'lastName': '',
        'email': '',
        'role': 'Admin',
    })

    const handleClose = () => props.setShow(false)
    const seveAndClose = () => {
        localStorage.setItem('usersDate', JSON.stringify(props.usersDate.concat(newUser)))
        props.setUsersDate(props.usersDate.concat(newUser))
        props.setShow(false);
    }

    const setParam = (props: {name: string, value: string}) => {
        newUser[props.name as keyof typeof newUser] = props.value
        console.log(newUser)
    }

    return (
        <Modal show={props.show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add new user</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control onChange={(e) => setParam({name: 'firstName', value: e.target.value})} placeholder="First Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control onChange={(e) => setParam({name: 'lastName', value: e.target.value})} placeholder="Last Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" onChange={(e) => setParam({name: 'email', value: e.target.value})} placeholder="Email" />
                </Form.Group>
                <Form.Control aria-label="Default select example" as="select" onChange={(e) => setParam({name: 'role', value: e.target.value})}>
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

export default ModalAdd;