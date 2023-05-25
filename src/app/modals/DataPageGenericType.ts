import {Virement} from "./Virement";
import {VirementSendDAO} from "./VirementSendDAO";
import {BankStatement} from "./BankStatement";

export type DataPageGenericType<T extends Virement | VirementSendDAO | BankStatement> =
  T extends Virement ? Virement :
    T extends VirementSendDAO ?  VirementSendDAO
      : T extends BankStatement? BankStatement
        : unknown;
