import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {CustomerLoginDTO} from "../modals/CustomerLoginDTO";
import {BehaviorSubject, Observable} from "rxjs";
import {map, tap} from "rxjs/operators";
import {CustomerSignUpDTO} from "../modals/CustomerSignUpDTO";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url = environment.backend_url + "authentication-service/customers/"
  userIsConnected: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private http: HttpClient) {
    this.userIsConnected.next(this.isAuthenticated());
  }

  public isAuthenticated(): boolean {
    const userId = localStorage.getItem("userId");
    return userId !== null;
  }

  public login(credentials: CustomerLoginDTO): Observable<string>{
    return this.http.post(this.url + "login", JSON.stringify(credentials)).pipe(
      map((response: {userId: string}) => response.userId),
      tap((response) => {
        if (response !== null){
          alert("Connexion reussi");
          console.log(response);
          localStorage.setItem("userId", response);
          this.userIsConnected.next(this.isAuthenticated());
        }else
          alert("Echec de connection");
      })
    );
  }

  public register(credentials: CustomerSignUpDTO): Observable<CustomerSignUpDTO>{
    return this.http.post(this.url + "signUp", JSON.stringify(credentials)).pipe(
      tap(() => {
        alert("Utilisateur creer");
      })
    );
  }

  public disconnect(): void {
    localStorage.removeItem('userId');
    this.userIsConnected.next(this.isAuthenticated());
    alert("Deconnexion reussi");
  }
}
