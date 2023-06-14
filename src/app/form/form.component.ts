import { IName, nameTemplate, Person } from './../person.model';
import { Component, EventEmitter, Output, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @Input() personsLength: number = 0;
  @Output() newPerson = new EventEmitter<Person>();
  @Output() clearFlag = new EventEmitter<void>();
  @ViewChild('firstNameReference') firstName: ElementRef | undefined = undefined;
  @ViewChild('lastNameReference') lastName: ElementRef | undefined = undefined;

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
      // create person
      const newPerson = new Person(newName);
      this.newPerson.emit(newPerson);
    }
  }

  clearPersonsList() {
    this.clearFlag.emit();
  }
}
