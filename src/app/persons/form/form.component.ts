import { PersonsService } from '../../persons.service';
import { LoggingService } from '../../logging.service';
import { IName, nameTemplate, Person } from '../../person.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  constructor(
    private loggingService: LoggingService,
    private personsService: PersonsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.personsService.greetings.subscribe((pos: number) => {
      const idx = pos - 1;
      alert(`Click on ${idx}`);
    })
  }
  ngOnInit(): void {
    this.idx = this.route.snapshot.params['id']

    if (!this.idx) return // add new person

    // edit person
    const person: Person = this.personsService.getPersonByIdx(this.idx);
    this.firstName = person.name.first;
    this.lastName = person.name.last;
  }

  firstName: string | null = null;
  lastName: string | null = null;
  idx: number | null = null;

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
      // create person
      const newPerson = new Person(newName);
      if (!this.idx) {
        // Add new person
        this.loggingService.log(`New person: ${newName.first} ${newName.last}`);
        this.personsService.addPerson(newPerson);
        // clean fields
        this.firstName = null;
        this.lastName = null;
      } else {
        // Edit person
        this.personsService.updatePerson(this.idx, newPerson);
      }
      // go to people endpoint
      this.router.navigate(['people']);
    }
  }

  clearPersonsList() {
    this.personsService.clearList();
  }
}
