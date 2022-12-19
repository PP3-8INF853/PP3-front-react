import { Component, OnInit } from '@angular/core';
import {VirementSendDAO} from "../../../modals/VirementSendDAO";
import {TransactionService} from "../../../services/transaction.service";
import {CustomerService} from "../../../services/customer.service";

@Component({
  selector: 'app-list-virement',
  templateUrl: './list-virement.component.html',
  styleUrls: ['./list-virement.component.css']
})
export class ListVirementComponent implements OnInit {
  virements: VirementSendDAO[];
  constructor(private transactionService: TransactionService,
              private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.connectedUser.subscribe(customer => {
      if (customer !== undefined){
        this.transactionService.getVirementListByCustomerAccountId(customer.account.id).subscribe((virements) => {
          this.virements = virements;
          console.log(this.virements);
        });
      }
    });
  }
}
