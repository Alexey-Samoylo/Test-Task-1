import { Modal, Form, Button } from 'react-bootstrap';
import { Formik, ErrorMessage } from 'formik';
import {
    AddUserModalProps,
    FormTableFieldProps,
    UserModalProps,
    FormikProps,
    FormikValuesProps,
    TypographyProps,
} from 'models';
import {
    EMPTY_USER_DETAILS,
    FORM_TABLE_FIELDS,
    USER_MODAL_SELECTS,
    FROMIK_TABLE_FIELDS_VALIDATION,
} from 'constants/main';
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
        console.log(!index ? EMPTY_USER_DETAILS : usersData[index]);
        return !index ? EMPTY_USER_DETAILS : usersData[index];
    };

    const getUsersDataUpdate = (
        index: number | null,
        usersData: UserModalProps[],
        newValue: UserModalProps
    ) => {
        if (!index) {
            return [...usersData, newValue];
        } else {
            usersData[index] = newValue;
            return [...usersData];
        }
    };

    const handleClose = () => setOpen(false);

    const validateText = (values: UserModalProps) => {
        const errors: FormikValuesProps = {};
        FROMIK_TABLE_FIELDS_VALIDATION.text.map(name => {
            if (!values[name as keyof FormikValuesProps]) {
                errors[name as keyof FormikValuesProps] = 'Requiere';
            }
        });
        FROMIK_TABLE_FIELDS_VALIDATION.email.map(name => {
            if (!values[name as keyof FormikValuesProps]) {
                errors[name as keyof FormikValuesProps] = 'Requiere';
            } else if (
                !/^[A-Z0-9.%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                    values?.[name as keyof FormikValuesProps] ?? ''
                )
            ) {
                errors[name as keyof FormikValuesProps] =
                    'Invalid email address';
            }
        });
        return errors;
    };
    const ErrorFormik = (props: TypographyProps) => {
        const { children } = props;
        return <Typography style={{ color: 'red' }}>{children}</Typography>;
    };

    return (
        <Modal show={isOpen} onHide={handleClose}>
            <Formik
                initialValues={getUserDetails(index, usersData)}
                validate={validateText}
                onSubmit={async values => {
                    setUsersData(getUsersDataUpdate(index, usersData, values));
                    setOpen(false);
                }}>
                {({
                    values,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                }: FormikProps) => (
                    <Form onSubmit={handleSubmit}>
                        <Modal.Header closeButton>
                            <Modal.Title>
                                <Typography>Add new user</Typography>
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="modalBody">
                            {FORM_TABLE_FIELDS.map(
                                (field: FormTableFieldProps) => {
                                    return (
                                        <Form.Group
                                            className="mb-3"
                                            controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>
                                                {field.label}
                                            </Form.Label>
                                            <Form.Control
                                                name={field.value}
                                                value={
                                                    values[
                                                        field.value as keyof UserModalProps
                                                    ]
                                                }
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                placeholder={field.label}
                                            />
                                            <ErrorMessage
                                                name={field.value}
                                                component={ErrorFormik}
                                            />
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
                                value={values.role}
                                onChange={handleChange}
                                onBlur={handleBlur}>
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
                            <Button variant="secondary" onClick={handleClose}>
                                <Typography>Close</Typography>
                            </Button>
                            <Button type="submit" variant="primary">
                                <Typography>Save</Typography>
                            </Button>
                        </Modal.Footer>
                    </Form>
                )}
            </Formik>
        </Modal>
    );
};

export default UserModal;
