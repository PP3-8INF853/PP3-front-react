import { Customer } from "./Customer"

export type Account = {
    id?: string,
    numero?: string,
    solde?: string,
    userId?: string,
    customer?: Customer
}