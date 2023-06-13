import { IName, nameTemplate, Person } from './../person.model';
import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Input() personsLength: number = 0;
  @Output() newPerson = new EventEmitter<Person>();
  @Output() clearFlag = new EventEmitter<void>();

  inputPerson: IName = { ...nameTemplate };

  addPerson() {
    if (JSON.stringify(this.inputPerson) !== JSON.stringify(nameTemplate)) {
      // create person
      const person = new Person(this.inputPerson);
      this.newPerson.emit(person);
      // clear fields
      this.inputPerson = { ...nameTemplate };

    }
  }

  clearPersonsList() {
    this.clearFlag.emit();
  }
}
