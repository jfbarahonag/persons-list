import { nameTemplate } from './../person.model';
import { Component, Input } from '@angular/core';
import { Person } from '../person.model';
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent {
  @Input() person: Person = new Person(nameTemplate);
  @Input() pos: number = -1;

  constructor() {}
}
