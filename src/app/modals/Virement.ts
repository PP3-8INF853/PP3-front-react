import { Account } from "./Account"

export type Virement = {
  id?: string,
  montant?: number,
  status?: string,
  question?: string,
  reponse?: string,
  idEmeteur?: string,
  idRecepteur?: string,
  emetteur?: Account,
  recepteur?: Account,
  dateEnvoi?: Date,
  dateReception?: Date
}
