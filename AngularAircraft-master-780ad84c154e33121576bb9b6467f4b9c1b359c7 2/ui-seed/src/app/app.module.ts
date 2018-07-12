// angular imports
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule  } from '@angular/common/http';
// environment imports
import { environment } from '../environments/environment';

// Maybe setup generic ngrx way of aclling data?
//firebase imports maybe move these to core
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

// Core Module and App Routing Module
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './routing/app-routing.module';

// ngrx store
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// actions effects reducers
import * as UserActions  from './core/store/actions/user.actions';


import { UserEffects, AdcEffects } from './core/store/effects';

import {  reducers } from './core/store/app-store';

// for debugging
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// app components imports
import { AppComponent } from './app.component';

import { GlobalErrorHandler } from './core/services/error-handler';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    CoreModule.forRoot(),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      UserEffects,
      AdcEffects
    ]),
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 500 }) : [],
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    }


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
