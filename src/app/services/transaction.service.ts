import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {VirementSendDTO} from "../modals/VirementSendDTO";
import {forkJoin, Observable, of} from 'rxjs';
import {VirementSendDAO} from "../modals/VirementSendDAO";
import {concatMap, map, mergeMap, switchMap, toArray} from "rxjs/operators";
import {Virement} from "../modals/Virement";
import {CustomerService} from "./customer.service";
import {Customer} from "../modals/Customer";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  url = environment.backend_url + "transaction-service"

  constructor(private http: HttpClient, private customerService: CustomerService) {}

  public getAllTransactions(): Observable<Virement[]>{
    return this.http.get<Virement[]>(this.url + "/getAll").pipe();
  }

  public sendMoney(virement: VirementSendDTO): Observable<{message: string}>{
    return this.http.post<{message: string}>(this.url + "/send", JSON.stringify(virement)).pipe();
  }

  public getVirementListByCustomerAccountId(accountId: string): Observable<VirementSendDAO[]>{
    return this.http.get<Virement[]>(this.url + "/transactions/" + accountId).pipe(
      map(virements =>{
        const newVirement = [] as VirementSendDAO[]

        virements.forEach(virement => {
          newVirement.push(
            {
              montant: virement.montant,
              dateEnvoi: virement?.dateEnvoi,
              dateReception: virement?.dateReception,
              statut: virement?.statut,
              destinataireCustomer: virement.compteRecepteur.userId
            } as VirementSendDAO
          )
          }
        )
        return newVirement;
      }),
    );
  }
}
