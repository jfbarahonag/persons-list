import { LoggingService } from './logging.service';
import { Person } from './person.model';
export class PersonsService {

  constructor() {}

  private persons: Person[] = [
    new Person({ first: 'Juan', last: 'Barahona' }),
    new Person({ first: 'Viviana', last: 'Delgado' }),
  ];

  addPerson(person: Person) {
    // Add only if person does not match exactly
    if (!this.persons.find(p => JSON.stringify(p.name) === JSON.stringify(person.name))) {
      this.persons.push(person);
    }
  }

  clearList() {
    this.persons = [];
  }

  getList() {
    return this.persons;
  }
}
