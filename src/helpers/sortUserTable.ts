import { UserModalProps, TableSortState } from 'models';

const sortUserTable = (
    usersData: UserModalProps[],
    userTableSort: TableSortState
) => {
    const newArray: UserModalProps[] = [...usersData].sort(
        (a: UserModalProps, b: UserModalProps) =>
            a[userTableSort.name as keyof UserModalProps] >
            b[userTableSort.name as keyof UserModalProps]
                ? userTableSort.value === 1
                    ? 1
                    : -1
                : userTableSort.value === 1
                ? -1
                : 1
    );
    return [1, 2].includes(userTableSort.value) ? newArray : usersData;
};

export default sortUserTable;
