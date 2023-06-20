import { LoginGuard } from './login/login-guard.service';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { FormComponent } from './persons/form/form.component';
import { PersonsComponent } from './persons/persons.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    canActivate: [LoginGuard],
    component: PersonsComponent,
  },
  {
    path: 'people',
    canActivate: [LoginGuard],
    component: PersonsComponent,
    children: [
      {
        path: 'add',
        component: FormComponent,
      },
      {
        path: ':id',
        component: FormComponent,
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
