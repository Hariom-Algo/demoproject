import { TestBed, async, inject } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { AuthGuard } from './auth.guard';
import {  AuthenticationService } from '../../core/services/authentication.service';
import { Router } from '@angular/router';
import { authMock } from '../../core/_test/_mocks/services/authentication.service.mock';


const router = {
  navigate: jasmine.createSpy('navigate')
};

describe('AuthGuard - logged in case', () => {
  const authMock = {
    authState() { return Observable.of(false)}
  };
  
  beforeEach(() => {
    
    TestBed.configureTestingModule({
      providers: [AuthGuard,
		  {'provide': AuthenticationService, 'useValue': authMock },
		  {'provide': Router, 'useValue': router }
		 ]
      
    });
  });
  it('should return observable of false and route to login', inject([AuthGuard], (guard: AuthGuard) => {
    const res = guard.canActivate();
    res.subscribe(ret => expect(ret).toBe(false, 'User is not logged in'));
    expect(router.navigate.calls.allArgs()).toEqual( [[['/login']]] )
  }));
});


describe('AuthGuard - logged out case', () => {
  const authMock = {
    authState() { return Observable.of(true)}
  };
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
	AuthGuard,
	{'provide': AuthenticationService, 'useValue': authMock },
	{'provide': Router, 'useValue': router }
      ] });
  });

  it('should return observable of true',
     inject([AuthGuard], (guard: AuthGuard) => {
       const res = guard.canActivate();
       console.log(res);
       res.subscribe(ret => expect(ret).toBe(true, 'User is logged in following the route'));
     }));
});
