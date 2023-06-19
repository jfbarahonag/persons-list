import { DataServices } from './data.service';
import { Injectable, EventEmitter } from '@angular/core';
import { LoggingService } from './logging.service';
import { Person } from './person.model';

@Injectable()
export class PersonsService {
  constructor(
    private loggingService: LoggingService,
    private dataServices: DataServices
  ) {}

  private persons: Person[] = [];

  greetings = new EventEmitter<number>();

  setPersons(persons: Person[]) {
    if (persons === null) {
      this.persons = [];
    } else {
      this.persons = persons;
    }
  }

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
    return this.dataServices.getPersons();
  }

  getPersonByIdx(idx: number) {
    return this.persons[idx];
  }

  updatePerson(idx: number, newPersonData: Person) {
    this.persons[idx] = newPersonData;
    this.dataServices.updatePerson(idx, newPersonData);
  }

  editPersons() {
    if (this.persons) {
      this.dataServices.savePersons(this.persons);
    }
  }

  removePersonByIdx(idx: number) {
    // remove by the idx
    this.persons.splice(idx, 1);
    this.dataServices.removePerson(idx);
    // save all db again to regenrate the idxs
    this.editPersons();
  }
}
