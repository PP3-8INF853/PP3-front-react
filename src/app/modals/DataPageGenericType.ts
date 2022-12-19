import {Virement} from "./Virement";
import {VirementSendDAO} from "./VirementSendDAO";

export type DataPageGenericType<T extends Virement> =
  T extends Virement ? Virement :
    T extends VirementSendDAO ?  VirementSendDAO
      : unknown;
