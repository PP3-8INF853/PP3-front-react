import { Account } from "./Account";

export interface Customer  {
  id?: string,
  username?: string,
  firstname?: string,
  lastname?: string,
  password?: string,
  email?: string,
  phoneNumber?: string,
  account?: Account
}
