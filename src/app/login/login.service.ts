import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';

@Injectable()
export class LoginService {
  token: string = '';

  constructor(private router: Router) {}

  login(email: string, password: string) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        user.getIdToken().then((token) => {
          this.token = token;
          this.router.navigate(['/']);
        });
      })
      .catch((err) => {
        console.error(`Login error code: ${err.code}`);
        console.error(`Login error message: ${err.message}`);
      });
  }

  logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log('Sign-Out successful');
        this.token = '';
        this.router.navigate(['/login']);
      })
      .catch((err) => {
        console.error('Sign-Out error: ', err.code);
      });
  }

  getIdToken() {
    return this.token;
  }

  isLoggedIn() {
    return this.token !== '';
  }
}
