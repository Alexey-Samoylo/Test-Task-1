import { UserModalProps, TableSortState } from 'models';

const sortUserTable = (
    usersData: UserModalProps[],
    userTableSort: TableSortState
) => {
    const sortuserFN = (a: UserModalProps, b: UserModalProps) => {
        switch (
            a[userTableSort.name as keyof UserModalProps] >
            b[userTableSort.name as keyof UserModalProps]
        ) {
            case true:
                return userTableSort.value === 1 ? 1 : -1;
            case false:
                return userTableSort.value === 2 ? -1 : 1;
        }
    };
    const newArray: UserModalProps[] = [...usersData].sort(sortuserFN);
    return [1, 2].includes(userTableSort.value) ? newArray : usersData;
};

export default sortUserTable;
