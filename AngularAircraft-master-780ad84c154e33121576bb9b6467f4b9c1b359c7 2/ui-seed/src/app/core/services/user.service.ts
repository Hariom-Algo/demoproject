import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireObject} from 'angularfire2/database';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from './authentication.service';
import { isEmpty } from 'lodash';
import { User } from '../model/user';
import { Store } from '@ngrx/store';
import { AppStore } from '../store/app-store';
import { LoginSuccess, Logoff } from '../store/actions/user.actions'
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';


@Injectable()
export class UserService {

  user: User;
  userId = '';
  authSub: Subscription;
  /**
   * Represents UserService
   * @constructor
   */
  constructor(private db: AngularFireDatabase,
	      private authService: AuthenticationService,
	      private store: Store<AppStore>,
	      private cookieService:CookieService,
	      private router:Router
	     ) 
  {
  }

  /**
   * initAuthObs - check the cookie for legacy compatibility
   * @return {Subscription} - subscription for the auth observable
   */


  // I DONT THINK WE NEED THIS SINCE WE HOST THERE ALREADY WE HAVE THE COOKIE Shouldnt server handle this?
  initAuthObs(){ // might be easier to test with if we return Observable to test the sub
    //We need to refactor this 
    return Observable.interval(1000).subscribe(() => {
      const auth_tkt = this.cookieService.get('auth_tkt');
      if (isEmpty(auth_tkt)){
        this.logout();
      }
    });
  }
  

  /** logout() - user out of firebase unsubs from auth and clears user **/
  logout(){
    this.cookieService.remove('auth_tkt');
    this.authSub.unsubscribe();
    this.setUser(null, null);
    this.authService.logout();
  }
  
  /** login() - user out of firebase unsubs from auth and clears user **/
  login(){
    return this.authService.firebaseUser().switchMap(
      
      fbUser => {
	if (fbUser){
	  // start the cookie checker
	  this.authSub = this.initAuthObs();
	  let user$ = this.getFBUser(fbUser.uid).map( u => {
	    let user = new User(fbUser);
	    user.addSnapshot(u);
	    this.user = user;	    
	    return user;
	  });
	  return user$
	}
      });
  }
  /**
   * getUserTails - gets the tails for the user 
   * @return {FireBaseObjectObservable<any>} the firebase observable representing company tails
   */  
  getCompanyTails() : Observable<any>{
    return this.db.list('/company/'+ this.user.companyId + '/tails', ref => ref.orderByChild('plan')).valueChanges();
  }
  
  /**
   * getUser - gets user from firebase
   * @return {FireBaseObjectObservable<any>} the firebase observable representing user
   */
  getFBUser(id): Observable<any>{
    return this.db.object('/user/' + id).valueChanges();
  }

   /**
   * setUser - sets the user in localstorage
   * @param user {User} - typescript representation of hte user
   * @param userId {any} - user id
   * @return {any} - the firebase observable representing user
   */
  setUser(user: User, userID: any): void{

    //THIS NEEDS TO BE MOVED TO STORE WE CAN REMOVE THE MODULE
    if (user){
      localStorage.setItem(userID, JSON.stringify(user));
      localStorage.setItem('userID', userID);
    }else{
      localStorage.clear();
    }
  }
}
