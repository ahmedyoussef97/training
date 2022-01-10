import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './@shared/admin/admin.component';
import { LoginFormComponent } from './@shared/login-form/login-form.component';
import { LoginComponent } from './@shared/login/login.component';
import { RegisterFormComponent } from './@shared/register-form/register-form.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule { }
