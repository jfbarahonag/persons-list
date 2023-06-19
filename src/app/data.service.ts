import { Person } from './person.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class DataServices {
  constructor(private httpClient: HttpClient) {}

  private url =
    'https://people-list-91a74-default-rtdb.firebaseio.com/data.json';

  savePersons(persons: Person[]) {
    this.httpClient.put(this.url, persons).subscribe(
      (response) => {
        console.log('save persons result: ', response);
      },
      (error) => {
        console.error('save persons error: ', error);
      }
    );
  }

  getPersons() {
    return this.httpClient.get(this.url);
  }
}
