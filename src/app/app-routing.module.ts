import { FormComponent } from './persons/form/form.component';
import { PersonsComponent } from './persons/persons.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PersonsComponent,
  },
  {
    path: 'people',
    component: PersonsComponent,
  },
  {
    path: 'person/add',
    component: FormComponent,
  },
  {
    path: 'person/:id',
    component: FormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
