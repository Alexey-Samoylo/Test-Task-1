import { Dispatch, SetStateAction } from 'react';

export interface AddUserModalProps {
    isOpen: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    usersData: UserModalProps[];
    setUsersDatа: Dispatch<SetStateAction<UserModalProps[]>>;
    index: number | null;
    setIndex: Dispatch<SetStateAction<number | null>>;
}

export interface UserModalProps {
    firstName: string;
    lastName: string;
    email: string;
    role: string;
}

export interface FormTableFieldProps {
    value: string;
    label: string;
}
