import {Customer} from "./Customer";

export interface Account  {
  id?: string,
  numero?: string,
  solde?: string,
  userId?: string,
  customer?: Customer
}
