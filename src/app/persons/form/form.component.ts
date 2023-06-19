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

  firstName: string | null = null;
  lastName: string | null = null;
  idx: number | undefined = undefined;
  editMode: number = 0;

  ngOnInit(): void {
    this.idx = this.route.snapshot.params['id'];
    this.editMode = Number(this.route.snapshot.queryParams['editMode']);

    // add new person
    if (this.idx === undefined) {
      this.editMode = 1;
      return;
    }

    // validate if idx exists
    if (
      isNaN(this.idx) ||
      this.idx < 0 || this.idx > this.personsService.getList().length - 1
    ) {
      this.router.navigate(['/people']);
      return;
    };

    // edit person
    const person: Person = this.personsService.getPersonByIdx(this.idx);
    this.firstName = person.name.first;
    this.lastName = person.name.last;
  }

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
      if (this.idx === undefined) {
        // Add new person
        this.loggingService.log(`New person: ${newName.first} ${newName.last}`);
        this.personsService.addPerson(newPerson);
      } else {
        // Edit person
        if (this.editMode === 1) this.personsService.updatePerson(this.idx, newPerson);
      }
      // go to people endpoint
      this.router.navigate(['people']);
    }
  }

  clearPersonsList() {
    this.personsService.clearList();
  }

  removePerson(){
    if (this.idx === undefined) return;
    // remove person
    this.personsService.removePersonByIdx(this.idx);
    // go to people endpoint
    this.router.navigate(['people']);
  }
}
