import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class LoginGuard {

  constructor(
    private loginService:LoginService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.loginService.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['/login'])
    return false;
  }
}

