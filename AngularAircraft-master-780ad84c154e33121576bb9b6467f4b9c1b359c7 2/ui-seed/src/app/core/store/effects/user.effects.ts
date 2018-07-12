import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { AppStore } from '../app-store';
import * as UserActions from '../actions/user.actions';
import { User } from '../../model/user';
import { UserService } from '../../services/user.service';
import { AuthenticationService } from '../../services/authentication.service';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/do";

@Injectable()
export class UserEffects {
  constructor (
    private actions$: Actions,
    private userService: UserService,
    private authService: AuthenticationService
  ) {}

  @Effect() getJwt$ =  this.actions$
    .ofType(UserActions.GET_JWT)
    .switchMap(() => this.authService.fetchJWT())
    .map((u) =>  new UserActions.GetJwtSuccess(u['jwt']))   
      .catch( (err) => Observable.of( new UserActions.LoginFailure(err)));
  
  @Effect() getJwtSuccess$ = this.actions$
    .ofType(UserActions.GET_JWT_SUCCESS)  
    .map(toPayload)
    .map( payload => new UserActions.Login(payload))
  
  @Effect() userLogin$ =  this.actions$
    .ofType(UserActions.LOGIN)
    .map(toPayload)
    .switchMap((jwt) => Observable.fromPromise(this.authService.authenticate(jwt)))
    .switchMap(() =>  this.userService.login())
    .map((user) => new UserActions.LoginSuccess(user))  
      .catch( (err) => Observable.of( new UserActions.LoginFailure(err)));


  @Effect() userLoginSuccess$ = this.actions$
    .ofType(UserActions.LOGIN_SUCCESS)
      .map( p => new UserActions.GetUserPlans(p))

  @Effect() addUserPlans$ = this.actions$
    .ofType(UserActions.GET_USER_PLANS)
    .switchMap(() => this.userService.getCompanyTails())
    .map(t  => new UserActions.GetUserPlansSuccess(t));
  
  // @Effect() getPlansSuccess$ = this.actions$
  //   .ofType(UserActions.GET_USER_PLANS_SUCCESS)
  //   .map(t  => new WidgetActions.FetchWidgets());

  // @Effect() logoff$ = this.actions$
  //   .ofType(UserActions.LOGOFF)
  //   .do(t  => this.userService.logout());
}
