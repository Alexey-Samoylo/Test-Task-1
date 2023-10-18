import { CSSProperties } from 'react';

const FORM_TABLE_FIELDS = [
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
const ITEMS_PER_PAGE = 50;
const DEFAULT_TYPOGRAPHY_STYLES: CSSProperties = {
    textTransform: 'none',
    textAlign: 'center',
    fontWeight: 'normal',
    fontSize: 'normal',
    lineHeight: 'normal',
    color: 'black',
    display: 'block',
};

export {
    FORM_TABLE_FIELDS,
    EMPTY_USER_DETAILS,
    ITEMS_PER_PAGE,
    DEFAULT_TYPOGRAPHY_STYLES,
};
