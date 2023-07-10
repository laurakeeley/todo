import { Injectable } from '@angular/core';
// import { RouterStateSnapshot } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
// import { CanActivateFn } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(
    public hardcodedAuthenticationService: HardcodedAuthenticationService,
    public router: Router
    ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.hardcodedAuthenticationService.isUserLoggedIn()) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
