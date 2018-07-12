import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../core/services/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthenticationService,
	      private router: Router){}

  canActivate(): Observable<boolean> {
    return this.authService.authState()
      .do(authenticated => {
	if (!authenticated) {
          this.router.navigate(['/login']);
	}
      });
  }
}
