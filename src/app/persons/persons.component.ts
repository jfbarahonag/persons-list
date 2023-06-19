import { PersonsService } from './../persons.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css'],
})
export class PersonsComponent {
  constructor(
    private personsService: PersonsService,
    private router: Router
  ) {}

  getPersons() {
    return this.personsService.getList();
  }

  addPerson() {
    this.router.navigate(['person/add'])
  }
}
