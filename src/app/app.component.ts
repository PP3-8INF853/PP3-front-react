import {Component, OnInit} from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import {HttpClient} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {of} from "rxjs";
import {CustomerLoginDTO} from "./modals/CustomerLoginDTO";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'pp3-front-react';

  constructor(public authService: AuthenticationService, private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    /*this.httpClient.get("http://localhost:4444/authentication-service/customers").pipe(
      catchError(error => {
        return of(error);
      })
    ).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err)
    })
    this.httpClient.post("http://localhost:4444/authentication-service/customers/login",
      JSON.stringify({username:"Celia", password:"9999"})).pipe(
      catchError(error => {
        return of(error);
      })
    ).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err)
    })*/
  }

  disconnect(): void {
    this.authService.disconnect();
  }
}
