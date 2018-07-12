import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store'; 


export const FETCH_LEG_USAGE = 'FETCH_LEG_USAGE';
/** FetchLegUsage - Action to fetch usage for leg **/
export class FetchLegUsage implements Action{
  readonly type = FETCH_LEG_USAGE;
  acftId;
  constructor(public payload) {
    this.acftId = payload.acftId;
  }
}

export const FETCH_LEG_USAGE_SUCCESS = 'FETCH_LEG_USAGE_SUCCESS';
/** FetchLegUsageSuccess - Handler for success action fetching leg usage **/
export class FetchLegUsageSuccess implements Action{
  readonly type = FETCH_LEG_USAGE_SUCCESS;
  acftId;
  flights;
  constructor(public payload) {
    this.acftId = payload.acftId ;
    this.flights = payload.flights  || [];
  }
}

export const FETCH_LEG_USAGE_FAILURE = 'FETCH_LEG_USAGE_FAILURE';
/** FetchLegFailure - Handler for failure to fetch leg usage **/
export class FetchLegUsageFailure implements Action{
  readonly type = FETCH_LEG_USAGE_FAILURE;
  error;
  constructor(public payload) {
    this.error = payload.error;
    console.log(this.error);
  }
}


export type All = FetchLegUsage
  | FetchLegUsageSuccess
  | FetchLegUsageFailure;
