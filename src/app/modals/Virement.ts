import { Account } from "./Account"

export interface Virement  {
  id?: string,
  montant?: number,
  statut?: string,
  question?: string,
  reponse?: string,
  idCompteEmetteur?: string,
  idCompteRecepteur?: string,
  compteEmetteur?: Account,
  compteRecepteur?: Account,
  dateEnvoi?: Date,
  dateReception?: Date
}
