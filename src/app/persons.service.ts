import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';
import { Person } from './person.model';

@Injectable()
export class PersonsService {
  constructor(private loggingService: LoggingService) {}

  private persons: Person[] = [
    new Person({ first: 'Juan', last: 'Barahona' }),
    new Person({ first: 'Viviana', last: 'Delgado' }),
  ];

  addPerson(person: Person) {
    // Add only if person does not match exactly
    if (
      !this.persons.find(
        (p) => JSON.stringify(p.name) === JSON.stringify(person.name)
      )
    ) {
      this.persons.push(person);
      this.loggingService.log('----- New person added -----');
    }
  }

  clearList() {
    this.persons = [];
    this.loggingService.log('----- Persons list cleared -----');
  }

  getList() {
    return this.persons;
  }
}
