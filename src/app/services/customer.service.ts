import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../modals/Customer";
import {Account} from "../modals/Account";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  url = environment.backend_url + "authentication-service/customers/"

  constructor(private http: HttpClient) { }

  public findById(id: string): Observable<Customer | undefined | null>{
    return this.http.get(this.url + "findById/" + id);
  }

  public findCustomerAccount(customerId: string): Observable<Account>{
    return this.http.get(this.url + "findCustomerAccount/" + customerId);
  }
}
