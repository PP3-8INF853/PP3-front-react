import {Customer} from "./Customer";

export interface VirementSendDAO  {
  idVirement?: string,
  destinataireCustomer?: Customer | string,
  dateEnvoi?: Date,
  dateReception?: Date,
  montant?: number,
  statut?: string,
}
