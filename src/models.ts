import { Dispatch, SetStateAction } from 'react'

export interface AddUserModalProps {
    isOpen: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
    usersData: UserModalProps[]
    setUsersDatа: Dispatch<SetStateAction<UserModalProps[]>>
}

export interface UserModalProps {
    firstName: string
    lastName: string
    email: string
    role: string
}
