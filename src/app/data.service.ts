import { LoginService } from './login/login.service';
import { Person } from './person.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class DataServices {
  constructor(
    private httpClient: HttpClient,
    private loginService: LoginService
  ) {}

  private url =
    'https://people-list-91a74-default-rtdb.firebaseio.com/data.json';

  savePersons(persons: Person[]) {
    const token = this.loginService.getIdToken();
    this.httpClient.put(`${this.url}?auth=${token}`, persons).subscribe(
      (response) => {
        console.log('save persons result: ', response);
      },
      (error) => {
        console.error('save persons error: ', error);
      }
    );
  }

  getPersons() {
    const token = this.loginService.getIdToken();
    return this.httpClient.get(`${this.url}?auth=${token}`);
  }

  updatePerson(idx: number, data: Person) {
    const token = this.loginService.getIdToken();
    const personUrl = `${this.url.split('.json')[0]}/${idx}.json?auth=${token}`;
    this.httpClient
      .put(personUrl, data)
      .subscribe((response) => console.log(response));
  }

  removePerson(idx: number) {
    const token = this.loginService.getIdToken();
    const personUrl = `${this.url.split('.json')[0]}/${idx}.json?auth=${token}`;
    this.httpClient
      .delete(personUrl)
      .subscribe((response) => console.log(response));
  }
}
