import {NgModule} from "@angular/core";
import {RegisterLoginRoutingModule} from "../register-login/register-login-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {AddVirementComponent} from "./add-virement/add-virement.component";
import {ListVirementComponent} from "./list-virement/list-virement.component";
import {VirementRouting} from "./virement.routing";
import {NgForOf} from "@angular/common";
import {MyTable} from "../../shared/table/my-table";


@NgModule({
    imports: [
        VirementRouting,
        ReactiveFormsModule,
        NgForOf,
        MyTable
    ],
  declarations: [
    AddVirementComponent,
    ListVirementComponent
  ],
  exports: [AddVirementComponent, ListVirementComponent],
  providers: []
})
export class VirementModule{
}
