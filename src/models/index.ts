import { Dispatch, SetStateAction } from 'react';
import { ReactNode, CSSProperties, Ref } from 'react';

export interface AddUserModalProps {
    isOpen: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    usersData: UserModalProps[];
    setUsersData: Dispatch<SetStateAction<UserModalProps[]>>;
    index: number | null;
}
export interface UserModalProps {
    firstName: string;
    lastName: string;
    email: string;
    testField1: string;
    testField2: string;
    testField3: string;
    testField4: string;
    testField5: string;
    testField6: string;
    testField7: string;
    testField8: string;
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
export interface InfoTablePaginationProps {
    setPageOffset: Dispatch<SetStateAction<number>>;
    totalPages: number;
}
export interface TableSortState {
    name: string;
    value: number;
}
export interface TableSortProps {
    TableSort: TableSortState;
    setTableSort: Dispatch<SetStateAction<TableSortState>>;
    nameSort: string;
}
export interface coinsTableTitleProps {
    title: string;
    value: string;
    toSort: boolean;
}
export interface UserModalFormVAlidation {
    firstName: {};
    lastName: {};
    email: {};
    testField1: {};
    testField2: {};
    testField3: {};
    testField4: {};
    testField5: {};
    testField6: {};
    testField7: {};
    testField8: {};
}
