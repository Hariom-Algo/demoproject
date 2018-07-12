//import  { User as FirebaseUser } from 'firebase';
import { TestBed, inject } from '@angular/core/testing';
import {Observable} from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { Subscription } from 'rxjs/Subscription';
import { AuthenticationService } from './authentication.service';
import { UserService } from './user.service';
import { User  } from '../model/user';
import { Store } from '@ngrx/store';
import { MockStore  }  from '../_test/_mocks/mock-store';
import { AppStore } from '../store/app-store';
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';

const  firebasePromise = new Promise((resolve, reject) => {
  resolve('123');
});

let firebaseUser =  {
  uid: '3',
  providerData: [{ displayName: 'Bill Cosby' }],
  delete(){},
  getIdToken(booli): Promise<any>{ return firebasePromise}
};

let mockCookie =  {
  remove(){return true},
};

let mockRouter =  {
  navigate(){return true}
};


describe('UserService', () => {

  const fireMock = { 'list': () => Observable.of() };
  let mockFBUser: any;

  const authMock = {
    logout(){return true },
    authenticate() {return Observable.of(firebaseUser)}
  };
  const user = new User(mockFBUser);
  const mockSub = new Subscription();
  const initialState = { user:null};
  let service;
  
  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({
      providers: [
	UserService,
	{ 'provide': Store, 'useValue': new MockStore<{user: User}>(initialState) },
	{'provide' : AuthenticationService, 'useValue': authMock},
	{'provide': AngularFireDatabase, 'useValue': fireMock},
	{'provide':CookieService, 'useValue':mockCookie},
	{'provide': Router, 'useValue':mockRouter}
      ],
    });
  });
  
  beforeEach(inject([UserService], (s: UserService) => {
    service = s;
  }));


  xit('login() should login  ', () => {
    const spy = spyOn(service, 'initAuthObs');
    const fetchSpy = spyOn(service, 'fetchUser');
    service.login();
    expect(spy.calls.count()).toBe(1, 'authobservable created');
    expect(fetchSpy.calls.count()).toBe(1, 'Fetch Called we got the user');
  });


  xit('login() should fail when not present  ', () => {
    firebaseUser = null;
    service.user = user;
    service.login();
    expect(service.user).toBeNull('user is null as expected');

  });

  // it('login() should clear local storage  ', () => {
  //   firebaseUser = null;
  //   localStorage.setItem('dashboard.3', JSON.stringify(user));
  //   localStorage.setItem('dashboard.userID', '3');
  //   service.login();
  //   setTimeout(()  => {
  //     expect(localStorage.getItem('dashboard.3')).toBeNull();
  //     expect(localStorage.getItem('dashboard.userID')).toBeNull();
  //   }, 100);
  // });


  xit('logout() should call  firebase signout ', () => {
    service.authSub = mockSub;
    const spy = spyOn(authMock, 'logout');
    service.logout();
    setTimeout(()  => {
      expect(spy.calls.count()).toBe(1);
    } , 100);
  });


  xit('logout() should unsubscribe ', () => {
    service.authSub = mockSub;
    const spy = spyOn(service, 'initAuthObs')
    service.logout();
    setTimeout(()  => {
      expect(spy.calls.count()).toBe(1);
    }, 100);

  });

  xit('logout() should remove users from local storage ',
     inject([UserService], (service: UserService) => {
       service.authSub = mockSub;
       service.setUser(user, '3');
       service.logout();
       setTimeout(()  => {
	 expect(localStorage.getItem('3')).toBe(null);
	 expect(localStorage.getItem('userID')).toBe(null);
       }, 100);
  }));



});


