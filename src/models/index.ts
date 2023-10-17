import { Dispatch, SetStateAction } from 'react';
import { ReactNode, CSSProperties, Ref } from 'react';

export interface AddUserModalProps {
    isOpen: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    usersData: UserModalProps[];
    setUsersDatа: Dispatch<SetStateAction<UserModalProps[]>>;
    index: number | null;
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
export interface TypographyProps {
    children?: ReactNode;
    style?: CSSProperties;
    className?: string;
    onClick?: () => void;
    ref?: Ref<any>;
}
