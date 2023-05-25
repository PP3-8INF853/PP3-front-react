import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {RegisterLoginRoutingModule} from "./register-login-routing.module";


@NgModule({
  imports: [
    RegisterLoginRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  exports: [LoginComponent, RegisterComponent],
  providers: []
})
export class RegisterLoginModule{
}
