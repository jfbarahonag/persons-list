import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const app = initializeApp({
      apiKey: "AIzaSyD_ZiElS9JTf_3EIU2Ti2aZkZAh6LFeujw",
      authDomain: "people-list-91a74.firebaseapp.com",
    });
    getAuth(app);

  }

  title = 'Persons list';
}
