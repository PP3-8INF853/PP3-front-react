import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {VirementSendDTO} from "../modals/VirementSendDTO";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  url = environment.backend_url + "transaction-service"

  constructor(private http: HttpClient) { }

  public sendMoney(virement: VirementSendDTO): Observable<string>{
    return this.http.post<string>(this.url + "/send", JSON.stringify(virement)).pipe();
  }
}
