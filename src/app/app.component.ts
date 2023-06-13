import { Component } from '@angular/core';
import { Person, IName, nameTemplate } from './person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Persons list';
  persons: Person[] = [
    new Person({ first: 'Juan', last: 'Barahona' }),
    new Person({ first: 'Viviana', last: 'Delgado' })
  ];

  addNewPerson(person: Person) {
    this.persons.push(person);
  }

  clearList() {
    this.persons = [];
  }
}
