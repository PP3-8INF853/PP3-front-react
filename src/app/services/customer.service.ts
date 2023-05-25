import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Customer} from "../modals/Customer";
import {Account} from "../modals/Account";
import {map, switchMap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  url = environment.backend_url + "authentication-service/customers"
  connectedUser: BehaviorSubject<Customer> = new BehaviorSubject<Customer>(undefined);

  constructor(private http: HttpClient) {
    if (localStorage?.getItem("userId") !== null){
      this.findById(localStorage?.getItem("userId"), true).subscribe(customer => {
        this.connectedUser.next(customer);
      });
    }
  }

  public findAllCustomers(withAccountInfo = false): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.url).pipe(
      map((customers) => {
        return customers.map((customer) => {
          if (withAccountInfo){
            this.findCustomerAccount(customer.id).subscribe(account => {
              customer.account = account;
            });
          }
          return customer;
        })
      })
    );
  }

  public findById(id: string, withAccountInfo = false): Observable<Customer>{
    return this.http.get<Customer>(this.url + "/findById/" + id).pipe(
      switchMap((customer) => this.findCustomerAccount(customer.id).pipe(
        map(account => {
          if (withAccountInfo)
            customer.account = account;
          return customer;
        })
      )),
    );
  }

  public findCustomerAccount(customerId: string): Observable<Account>{
    return this.http.get(this.url + "/findCustomerAccount/" + customerId);
  }
}
