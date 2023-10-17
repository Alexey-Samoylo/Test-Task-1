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

export { formTableFields, EMPTY_USER_DETAILS, ITEMS_PER_PAGE };
