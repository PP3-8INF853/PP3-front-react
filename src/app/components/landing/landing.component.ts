import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/modals/Account';
import {CustomerService} from "../../services/customer.service";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  customerAccount: Account;
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.findCustomerAccount(localStorage.getItem('userId')).subscribe((account) => {
      this.customerAccount = account;
    })
  }

}
