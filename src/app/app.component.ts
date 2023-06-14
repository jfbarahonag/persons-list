import { LoggingService } from './logging.service';
import { Component } from '@angular/core';
import { Person } from './person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private loggingService: LoggingService) {}

  title = 'Persons list';
  persons: Person[] = [
    new Person({ first: 'Juan', last: 'Barahona' }),
    new Person({ first: 'Viviana', last: 'Delgado' }),
  ];

  addNewPerson(person: Person) {
    this.persons.push(person);
    this.loggingService.log(`New persons length -> ${this.persons.length}`);
  }

  clearList() {
    this.persons = [];
    this.loggingService.log(`New persons length -> ${this.persons.length}`);
  }
}
