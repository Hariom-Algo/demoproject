import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { has } from 'lodash';

//ngrx
import { Store } from '@ngrx/store';
import * as UserActions from '../store/actions/user.actions';
import { AppStore } from '../store/app-store'


@Injectable()
export class AuthenticationService {

  fbUser: Observable<any>;
  // we can move this into store eventually but now we have user service wrapped
  constructor(public http: HttpClient, private afAuth: AngularFireAuth, public store: Store<AppStore>) {
    this.fbUser  = this.afAuth.authState;
  }

  authenticate(jwt){
    return this.afAuth.auth.signInWithCustomToken( jwt );    
  }
    
  fetchJWT(){
    return this.http.get('/ADC/ADCContext/DashboardREST/Authenticate')
  }
  
  logout(){
    this.afAuth.auth.signOut();
    let host = document.location.host;       
    window.location.href = 'https://' + host + '/ADC/Login/Login'    
  }

  firebaseUser(): Observable<any> {
    return this.fbUser;
  }

  /**
   * authState - gives the state of the user
   * @return {Observable<boolean>} - are we autheenticated
   */
  authState(): Observable<boolean>{
    return this.afAuth.authState
      .map(authState => !!authState);
  }
}
