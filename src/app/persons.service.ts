import { DataServices } from './data.services';
import { Injectable, EventEmitter } from '@angular/core';
import { LoggingService } from './logging.service';
import { Person } from './person.model';

@Injectable()
export class PersonsService {
  constructor(
    private loggingService: LoggingService,
    private dataServices: DataServices
  ) {}

  private persons: Person[] = [
    new Person({ first: 'Juan', last: 'Barahona' }),
    new Person({ first: 'Viviana', last: 'Delgado' }),
  ];

  greetings = new EventEmitter<number>();

  addPerson(person: Person) {
    // Add only if person does not match exactly
    if (
      !this.persons.find(
        (p) => JSON.stringify(p.name) === JSON.stringify(person.name)
      )
    ) {
      this.persons.push(person);
      this.dataServices.savePersons(this.persons);
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

  getPersonByIdx(idx: number) {
    return this.persons[idx];
  }

  updatePerson(idx: number, newPersonData: Person) {
    this.persons[idx] = newPersonData;
  }

  removePersonByIdx(idx: number) {
    this.persons.splice(idx, 1);
  }
}
