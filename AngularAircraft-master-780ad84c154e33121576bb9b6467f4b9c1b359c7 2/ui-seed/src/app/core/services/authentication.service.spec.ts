import { DOCUMENT } from '@angular/platform-browser';
import {Injectable, ReflectiveInjector} from '@angular/core';
import {async, fakeAsync, tick} from '@angular/core/testing';

import {
	ConnectionBackend,
 } from '@angular/http';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {MockBackend, MockConnection} from '@angular/http/testing';

import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AuthenticationService } from './authentication.service';
import { ConfigurationService } from './configuration.service';
import { FireMock, AfAuthMock } from '../_test/_mocks/firebase.mocks';
import { ConfigMock } from '../_test/_mocks/services/config-mock.service'


import { MockStore  } from '../_test/_mocks/mock-store';
import { Store } from '@ngrx/store';
const MockDoc = {
  location: {href: ''}
};

describe('AuthenticationService', () => {
  // This shows how we can mock Http services for unittests
  beforeEach(() => {
    this.injector = ReflectiveInjector.resolveAndCreate([
      {provide: ConnectionBackend, useClass: MockBackend},
      {provide: AngularFireAuth, useValue: AfAuthMock},
      {provide: DOCUMENT, useValue: MockDoc},
      {provide: Store, useValue: MockStore},
      HttpClient,
      AuthenticationService,
    ]);
    this.service = this.injector.get(AuthenticationService);
    this.backend = this.injector.get(ConnectionBackend) as MockBackend;
    this.backend.connections.subscribe((connection: any) => this.connection = connection);
  });

  xit('should create', () => {
    expect(this.service).toBeTruthy();
  });

  xit('signout() should log the user out', fakeAsync(() => {
    const spy = spyOn(FireMock, 'signOut');
    this.service.logout();
    expect(spy.calls.any()).toBe(true, 'Firebase auth signout called');
  }));

  xit('authenticate() should log user in and authenticate', fakeAsync(() => {
    const spy = spyOn(FireMock, 'signInWithCustomToken');
    const res = this.service.authenticate();
    tick();

    expect(spy.calls.any()).toBe(true, 'sign in to firebase initiated');
  }));

  xit('authenticate() got an error', fakeAsync(() => {
    this.service.authenticate();
    tick();

    //no not  anymore We will use the router here.
    //expect(this.service.document.location.href).toBe(ConfigMock.getLoginUrl());

  }));
});
