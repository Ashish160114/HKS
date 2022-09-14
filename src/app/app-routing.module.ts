import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginFormComponent } from './login-form/login-form.component';

const routes: Routes = [
  {
    path: 'login', component: LoginFormComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  { path: '**', redirectTo: 'login' } // ** wildcard route **
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const ROUTED_COMPONENTS = [
  LoginFormComponent
];
