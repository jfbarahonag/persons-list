import { PersonsService } from './../persons.service';
import { LoggingService } from './../logging.service';
import { IName, nameTemplate, Person } from './../person.model';
import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @ViewChild('firstNameReference') firstName: ElementRef | undefined = undefined;
  @ViewChild('lastNameReference') lastName: ElementRef | undefined = undefined;

  constructor(
    private loggingService: LoggingService,
    private personsService: PersonsService,
  ) {
    this.personsService.greetings.subscribe((pos: number) => {
      const idx = pos - 1;
      alert(`Click on ${idx}`);
    })
  }

  getPersonsLength() {
    return this.personsService.getList().length;
  }

  addPerson() {
    if (!this.firstName || !this.lastName) {
      console.error('Error fname, lname')
      return;
    }

    const newName: IName = {
      first: this.firstName.nativeElement.value,
      last: this.lastName.nativeElement.value,
    };

    if (JSON.stringify(newName) !== JSON.stringify(nameTemplate)) {
      this.loggingService.log(`New person: ${newName.first} ${newName.last}`);
      // create person
      const newPerson = new Person(newName);
      this.personsService.addPerson(newPerson);
    }
  }

  clearPersonsList() {
    this.personsService.clearList();
  }
}
