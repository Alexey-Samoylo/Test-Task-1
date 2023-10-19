import { Dispatch, SetStateAction } from 'react';
import { ReactNode, CSSProperties, Ref } from 'react';
import { Items } from 'redux/models/reduxModels';

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
