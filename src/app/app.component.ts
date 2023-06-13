import { Component } from '@angular/core';
import { Person } from './person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'persons-list';
  persons: Person[] = [
    new Person({ first: 'Juan', last: 'Barahona' }),
    new Person({ first: 'Viviana', last: 'Delgado' })
  ];
}
