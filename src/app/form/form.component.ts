import { IName, nameTemplate, Person } from './../person.model';
import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @Input() personsLength: number = 0;
  @Output() newPerson = new EventEmitter<Person>();
  @Output() clearFlag = new EventEmitter<void>();

  addPerson(firstName: HTMLInputElement, lastName: HTMLInputElement) {
    const newName: IName = {
      first: firstName.value,
      last: lastName.value,
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
