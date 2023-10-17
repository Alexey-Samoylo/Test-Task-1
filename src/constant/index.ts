import { CSSProperties } from "react";

const formTableFields = [
    {
        label: 'First Name',
        value: 'firstName',
    },
    {
        label: 'Last Name',
        value: 'lastName',
    },
    {
        label: 'Email',
        value: 'email',
    },
];
const EMPTY_USER_DETAILS = {
    firstName: '',
    lastName: '',
    email: '',
    role: 'Admin',
};
const ITEMS_PER_PAGE = 2;
const DEFAULT_TYPOGRAPHY_STYLES: CSSProperties = {
    textTransform: 'none',
    textAlign: 'center',
    fontWeight: 'normal',
    fontSize: 'normal',
    lineHeight: 'normal',
    color: 'red',
    display: 'block',
};

export { formTableFields, EMPTY_USER_DETAILS, ITEMS_PER_PAGE, DEFAULT_TYPOGRAPHY_STYLES };
