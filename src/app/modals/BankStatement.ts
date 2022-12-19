import { Account } from "./Account";
import {Virement} from "./Virement";

export type BankStatement = {
  virements?: Virement[],
  compte?: Account
  statementDate?: Date
}
