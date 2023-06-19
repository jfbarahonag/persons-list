import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

@Injectable()
export class LoginService {
  token: string | undefined = undefined;

  constructor(private router: Router) {}

  login(email: string, password: string) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        user.getIdToken().then((token) => (this.token = token));
      })
      .then(() => {
        this.router.navigate(['/']);
      })
      .catch((err) => {
        console.error(`Login error code: ${err.code}`);
        console.error(`Login error message: ${err.message}`);
      });
  }

  getIdToken() {
    return this.token;
  }
}
