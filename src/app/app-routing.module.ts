import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditComponent } from './dashboard/edit/edit.component';
import { UserRegisterComponent } from './dashboard/user-register/user-register.component';
import { ViewComponent } from './dashboard/view/view.component';
import { DashboardGuard } from './gaurds/dashboard.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path : "", component : RegisterComponent},
  {path : "register", component : RegisterComponent},
  {path : "login", component : LoginComponent},
  {path : "dashboard", component : DashboardComponent, canActivate : [DashboardGuard]},
  {path : "dashboard/addUser", component : UserRegisterComponent, canActivate : [DashboardGuard]},
  {path : "dashboard/edit/:id", component : EditComponent, canActivate : [DashboardGuard]},
  {path : "dashboard/view/:id", component : ViewComponent, canActivate : [DashboardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
