import { Observable } from 'rxjs/Observable';
import * as AdcActions from '../actions/adc.actions';
import { AppStore } from '../app-store';
import {createSelector } from '@ngrx/store';
import { merge  } from 'lodash';

export type AdcAction = AdcActions.All;

export function adcReducer(state: any = {}, action: AdcAction):any {

  switch (action.type) {
    
  case AdcActions.FETCH_LEG_USAGE:
    let acftId = action.payload.acftId;
    let newState = {};
    newState[acftId] = null;
    return Object.assign({},state, newState);
  case AdcActions.FETCH_LEG_USAGE_SUCCESS:
    let acft = action.payload.flights[0].tail;
    let addAcft = {};
    addAcft[acft] = action.payload.flights;
    
    return merge({}, state, addAcft);
  case AdcActions.FETCH_LEG_USAGE_SUCCESS:
    return action.payload;
    
  default:
    return state;
  }
};

