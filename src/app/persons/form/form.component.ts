import { PersonsService } from '../../persons.service';
import { LoggingService } from '../../logging.service';
import { IName, nameTemplate, Person } from '../../person.model';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  constructor(
    private loggingService: LoggingService,
    private personsService: PersonsService,
    private router: Router
  ) {
    this.personsService.greetings.subscribe((pos: number) => {
      const idx = pos - 1;
      alert(`Click on ${idx}`);
    })
  }

  firstName = null;
  lastName = null;

  getPersonsLength() {
    return this.personsService.getList().length;
  }

  onSavePerson() {
    if (!this.firstName || !this.lastName) {
      console.error('Error fname, lname')
      return;
    }

    const newName: IName = {
      first: this.firstName,
      last: this.lastName,
    };

    if (JSON.stringify(newName) !== JSON.stringify(nameTemplate)) {
      this.loggingService.log(`New person: ${newName.first} ${newName.last}`);
      // create person
      const newPerson = new Person(newName);
      this.personsService.addPerson(newPerson);
      // clean fields
      this.firstName = null;
      this.lastName = null;
      // go to people endpoint
      this.router.navigate(['people']);
    }
  }

  clearPersonsList() {
    this.personsService.clearList();
  }
}
