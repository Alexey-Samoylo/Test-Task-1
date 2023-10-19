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
const USER_TABLE_TITLE = [
    ...FORM_TABLE_FIELDS,
    { label: 'Role', value: 'role' },
];
const COINS_TABLE_TITLE = [
    {
        label: 'Name',
    },
    {
        label: 'UUID',
    },
    {
        label: 'Price',
        value: 'price',
    },
    {
        label: 'Market Cap',
        value: 'marketCap',
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
const USER_MODAL_SELECTS = ['Admin', 'Editor', 'User'];

export {
    FORM_TABLE_FIELDS,
    EMPTY_USER_DETAILS,
    ITEMS_PER_PAGE,
    DEFAULT_TYPOGRAPHY_STYLES,
    USER_MODAL_SELECTS,
    USER_TABLE_TITLE,
    COINS_TABLE_TITLE,
};
