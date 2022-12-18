import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AddVirementComponent} from "./add-virement/add-virement.component";
import {ListVirementComponent} from "./list-virement/list-virement.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'add',
        component: AddVirementComponent
      },
      {
        path: 'list',
        component: ListVirementComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VirementRouting{
}
