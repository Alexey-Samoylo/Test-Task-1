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
    {
        label: 'Test Field1',
        value: 'testField1',
    },
    {
        label: 'Test Field2',
        value: 'testField2',
    },
    {
        label: 'Test Field3',
        value: 'testField3',
    },
    {
        label: 'Test Field4',
        value: 'testField4',
    },
    {
        label: 'Test Field5',
        value: 'testField5',
    },
    {
        label: 'Test Field6',
        value: 'testField6',
    },
    {
        label: 'Test Field7',
        value: 'testField7',
    },
    {
        label: 'Test Field8',
        value: 'testField8',
    },
];
const USER_TABLE_TITLES = [
    ...FORM_TABLE_FIELDS,
    { label: 'Role', value: 'role' },
];
const COINS_TABLE_TITLES = [
    {
        label: 'Name',
        value: 'name',
        toSort: false,
    },
    {
        label: 'UUID',
        value: 'uuid',
        toSort: false,
    },
    {
        label: 'Price',
        value: 'price',
        toSort: true,
    },
    {
        label: 'Market Cap',
        value: 'marketCap',
        toSort: true,
    },
];
const EMPTY_USER_DETAILS = {
    firstName: '',
    lastName: '',
    email: '',
    testField1: '',
    testField2: '',
    testField3: '',
    testField4: '',
    testField5: '',
    testField6: '',
    testField7: '',
    testField8: '',
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
    USER_TABLE_TITLES,
    COINS_TABLE_TITLES,
};
