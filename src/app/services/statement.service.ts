import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from 'rxjs';
import {BankStatement} from "../modals/BankStatement";
import {TransactionService} from "./transaction.service";
import {Customer} from "../modals/Customer";
import {map} from "rxjs/operators";
import {Virement} from "../modals/Virement";
import {CustomerService} from "./customer.service";

@Injectable({
  providedIn: 'root'
})
export class StatementService {
  userBankStatements: BehaviorSubject<BankStatement[]> = new BehaviorSubject<BankStatement[]>([])

  constructor(private http:HttpClient,
              private transactionService: TransactionService,
              private customerService: CustomerService) {
    this.getBankStatementFromCustomer(this.customerService.connectedUser.value);
  }

  getBankStatementFromCustomer(customer: Customer){
    this.transactionService.getAllTransactions().subscribe((virements) => {
      console.log(virements)
      const userVirements = virements.filter(virement => virement?.compteRecepteur?.userId === customer?.id
            || virement?.compteEmetteur?.userId === customer?.id) as Virement[];
      const account = customer.account;
      const mostRecentStatement = new Date(Math.max.apply(null, userVirements.map( e => {
        return new Date(e.dateEnvoi);})));

      this.userBankStatements.next([{
        virements: userVirements,
        compte: account,
        statementDate: mostRecentStatement
      }])
    })
  }
}
