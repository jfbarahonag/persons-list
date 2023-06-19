import { Person } from './../person.model';
import { PersonsService } from './../persons.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css'],
})
export class PersonsComponent implements OnInit {
  constructor(private personsService: PersonsService, private router: Router) {}

  persons: Person[] = [];

  ngOnInit() {
    this.personsService.getList().subscribe((persons) => {
      this.persons = persons as Person[];
      this.personsService.setPersons(persons as Person[]);
    });
  }

  getPersons() {
    return this.personsService.getList();
  }

  addPerson() {
    this.router.navigate(['people/add']);
  }
}
