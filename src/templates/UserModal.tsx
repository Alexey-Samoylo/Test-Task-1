import { Modal, Form, Button } from 'react-bootstrap';
import {
    AddUserModalProps,
    FormTableFieldProps,
    UserModalFormVAlidation,
    UserModalProps,
} from 'models';
import {
    EMPTY_USER_DETAILS,
    FORM_TABLE_FIELDS,
    USER_MODAL_SELECTS,
    USER_TABLE_FROM_VALIDATION,
} from 'constants/main';
import { Typography } from 'components';
import { useForm, SubmitHandler } from 'react-hook-form';

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

    const getUsersDataUpdate = (
        index: number | null,
        usersData: UserModalProps[],
        data: UserModalProps
    ) => {
        if (!index) {
            return [...usersData, data];
        } else {
            usersData[index] = data;
            return [...usersData];
        }
    };

    const handleClose = () => {
        setOpen(false);
        reset();
    };

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<UserModalProps>({
        values: getUserDetails(index, usersData),
        mode: 'onBlur',
    });
    const onSubmit: SubmitHandler<UserModalProps> = data => {
        setUsersData(getUsersDataUpdate(index, usersData, data));
        setOpen(false);
        reset();
    };

    return (
        <Modal show={isOpen} onHide={handleClose}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <Typography>Add new user</Typography>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="modalBody">
                    {FORM_TABLE_FIELDS.map(
                        (field: FormTableFieldProps, index: number) => {
                            return (
                                <Form.Group
                                    className="mb-3"
                                    controlId="firstName">
                                    <Form.Label>{field.label}</Form.Label>
                                    <Form.Control
                                        {...register(
                                            field.value as any,
                                            USER_TABLE_FROM_VALIDATION[
                                                field.value as keyof UserModalFormVAlidation
                                            ]
                                        )}
                                        placeholder={field.label}
                                    />
                                    {errors?.[
                                        field.value as keyof UserModalProps
                                    ] && (
                                        <p>
                                            {errors?.[
                                                field.value as keyof UserModalProps
                                            ]?.message || 'Error'}
                                        </p>
                                    )}
                                </Form.Group>
                            );
                        }
                    )}
                    <Form.Label>
                        <Typography>Role</Typography>
                    </Form.Label>
                    <Form.Control
                        aria-label="Default select example"
                        as="select"
                        {...register('role')}
                        placeholder={'Role'}>
                        {USER_MODAL_SELECTS.sort().map(selector => {
                            return (
                                <option value={selector}>
                                    <Typography>{selector}</Typography>
                                </option>
                            );
                        })}
                    </Form.Control>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        type="submit"
                        variant="secondary"
                        onClick={handleClose}>
                        <Typography>Close</Typography>
                    </Button>
                    <Button type="submit" variant="primary">
                        <Typography>Save</Typography>
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
};

export default UserModal;
