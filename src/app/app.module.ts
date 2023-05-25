import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingComponent } from './components/landing/landing.component';
import {RegisterLoginModule} from "./components/register-login/register-login.module";
import {HttpClientModule} from "@angular/common/http";
import {AuthGuard} from "./auth.guard";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { AddVirementComponent } from './components/virement/add-virement/add-virement.component';
import { ListVirementComponent } from './components/virement/list-virement/list-virement.component';
import {VirementModule} from "./components/virement/virement.module";
import {MyDropdown} from "./shared/dropdown/my-dropdown";
import {MyTable} from "./shared/table/my-table";
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
  ],
    imports: [
        CommonModule,
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        HttpClientModule,
        NgbModule,
        RegisterLoginModule,
        VirementModule,
        SharedModule
    ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
