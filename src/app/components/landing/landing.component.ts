import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/modals/Account';
import {CustomerService} from "../../services/customer.service";
import {TransactionService} from "../../services/transaction.service";
import {StatementService} from "../../services/statement.service";
import {BankStatement} from "../../modals/BankStatement";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  customerAccount: Account;
  statements: BankStatement[]
  constructor(private customerService: CustomerService, private statementService: StatementService) { }

  ngOnInit(): void {
    this.statementService.userBankStatements.subscribe(statements => {
      if (statements.length > 0) {
        console.log(statements)
        this.statements = statements;
      }
    })

    this.customerService.findCustomerAccount(localStorage.getItem('userId')).subscribe((account) => {
      this.customerAccount = account;
      this.customerService.connectedUser.subscribe(customer => {
        if (customer !== undefined)
          this.statementService.getBankStatementFromCustomer(customer);
      })
    });


  }

}
