import { PersonsService } from './persons.service';
import { LoggingService } from './logging.service';
import { Component, OnInit } from '@angular/core';
import { Person } from './person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private loggingService: LoggingService,
    private personsService: PersonsService
  ) {}

  ngOnInit(): void {}

  getPersons() {
    return this.personsService.getList();
  }

  title = 'Persons list';

  onAddNewPerson(person: Person) {
    this.personsService.addPerson(person);
    this.loggingService.log(`New persons length -> ${this.getPersons().length}`);
  }

  onClearPersonsList() {
    this.personsService.clearList();
    this.loggingService.log(`New persons length -> ${this.getPersons().length}`);
  }
}
