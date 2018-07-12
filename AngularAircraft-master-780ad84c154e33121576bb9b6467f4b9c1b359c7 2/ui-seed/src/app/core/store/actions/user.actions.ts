import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store'; 
import {User} from '../../model/user';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOFF = 'LOGOFF';

export const GET_JWT = 'GET_JWT';

export class GetJwt implements Action{
  readonly type = GET_JWT
}

export const GET_JWT_SUCCESS = 'GET_JWT_SUCCESS';
export class GetJwtSuccess implements Action{
  readonly type = GET_JWT_SUCCESS
  constructor(public payload) {}
}

export const GET_JWT_FAILURE = 'GET_JWT_FAILURE';
export class GetJwtFailure implements Action{
  readonly type = GET_JWT_FAILURE
  constructor(public payload) {
  } // error obs
}

export class Login implements Action{
  readonly type = LOGIN ;
  constructor(public payload) {
  } // error obs
}
export class LoginSuccess implements Action{
  readonly type = LOGIN_SUCCESS
  constructor(public user) {}
}

export class LoginFailure implements Action{
  readonly type = LOGIN_FAILURE
  constructor(public payload) {} // error obs
}

export const GET_USER_PLANS = "GET_USER_PLANS"
export class GetUserPlans implements Action{
  readonly type = GET_USER_PLANS
  constructor(public payload) {}
}

export const GET_USER_PLANS_SUCCESS = "GET_USER_PLANS_SUCCESS"
export class GetUserPlansSuccess implements Action{
  readonly type = GET_USER_PLANS_SUCCESS
  constructor(public payload) {
  }
}


export class Logoff implements Action{
  readonly type = LOGOFF
}

export type All = Login
  | LoginSuccess
  | LoginFailure
  | GetUserPlans
  | GetJwt
  | GetJwtSuccess
  | GetJwtFailure
  | GetUserPlansSuccess
  | Logoff;
