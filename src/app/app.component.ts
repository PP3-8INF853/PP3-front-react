import {Component, OnInit} from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import {HttpClient} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {of} from "rxjs";
import {CustomerLoginDTO} from "./modals/CustomerLoginDTO";
import {Customer} from "./modals/Customer";
import {CustomerService} from "./services/customer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'pp3-front-react';
  userInfo: Customer;

  constructor(public authService: AuthenticationService,
  private customerService: CustomerService, public router: Router) {
  }

   ngOnInit(): void {
    this.authService.userIsConnected.subscribe((value) => {
      if (value){
        this.customerService.findById(localStorage.getItem("userId")).subscribe(user => {
          this.userInfo = user;
        })
      }
    })
  }

  disconnect(): void {
    this.authService.disconnect();
  }

  async redirectTo(eventInfo: { event: MouseEvent, route: string }) : Promise<void>{
    await this.router.navigate([eventInfo.route]);
  }
}
