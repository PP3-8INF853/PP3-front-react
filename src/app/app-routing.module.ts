import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import {LandingComponent} from "./components/landing/landing.component";

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import(`./components/register-login/register-login.module`)
      .then( module => module.RegisterLoginModule)
  },
  {
    path: 'virements',
    loadChildren: () => import(`./components/virement/virement.module`)
      .then( module => module.VirementModule)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
