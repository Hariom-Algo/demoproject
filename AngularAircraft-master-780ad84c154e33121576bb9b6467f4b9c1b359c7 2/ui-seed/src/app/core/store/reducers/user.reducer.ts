import { Observable } from 'rxjs/Observable';
import * as UserActions from '../actions/user.actions';
import { User, UserTail, Plan } from '../../model/user'
import { AppStore } from '../app-store';
import {createSelector } from '@ngrx/store';
import { merge,  uniqBy, filter, values, map, flatMap, flatten, without, keys , cloneDeep ,includes} from 'lodash';

export type UserAction = UserActions.All;

export function userReducer(state: any = {loginAttempts: 0, //initial state
					  jwt: '',
					  jwtFetchAttempts:0
					 }, action: UserAction): User {

  switch (action.type) {
  case UserActions.LOGIN:
    return state;
  case UserActions.LOGOFF:
    return null;

  case UserActions.GET_JWT:   
    return state;
    
  case UserActions.GET_JWT_SUCCESS:

    return Object.assign({}, state, {jwt:action.payload, jwtFetchAttempts: 0}) ;
    
  case UserActions.GET_JWT_FAILURE:
    return state;

  case UserActions.LOGIN_SUCCESS:
    return Object.assign({}, action.user, state);
        
  case UserActions.LOGIN_FAILURE:
    return null;
  case UserActions.GET_USER_PLANS:
    return state;
  case UserActions.GET_USER_PLANS_SUCCESS:{ // rename me later to company tails or something
    return  Object.assign({}, state, 
			  {
			    ...state.user, // remove the None from list and create plans
			    plans: action.payload
			  }
			 );
    
  }
  default:
    return state;
  }
};

/** Get the full user **/
export const getUserState = (state: AppStore) => state.user;

/** Just user Id **/
export const getUserId = createSelector(getUserState, (u:User) =>{
  if(u) return u.userId;
});

export const getCompanyTails = createSelector(getUserState, (u:User) =>{
  if(u){ 
    let t =  flatMap(u.tails,'tailNumber');
    return t
  }
});

export const getTailsOfInt = createSelector(getUserState, (u:User) =>{
  if(u) return u.tailOfInterest;
});

export const getCompanyName = createSelector(getUserState, (u:User) =>{
  if(u) return map(u.companyName);
});

export const getUserPlans = createSelector(getUserState, (u:User) =>{
  // planids
  if(u) return u.plans;
});

export const getTailsByPlan = createSelector(getUserState, (u:User) =>{
  // someone make this algorithm better please
  // attach the tails and plans removing none
  const tailsWithPlans = filter(merge(values(u.tails), u.plans) ,
				(p: UserTail) => { if (p.plan !== 'None') return p; });
  // now just the plans
  const plans = map(tailsWithPlans, (tail: UserTail) =>  tail.plan);
  // uniq object of plans
  const plansObj = uniqBy(map(plans , (p) => { return {planId: keys(p)[0], ...values(p)[0]}}), 'planId');
  // push tails to selected plans
  const plansWithTails = plansObj.map(( plan: Plan) => {
    let tails = [];
    // push tails to plan
    tailsWithPlans.forEach( (tail: UserTail) => {
      if (keys(tail.plan)[0] === plan.planId)
	tails.push({aircraftID: tail.aircraftID, tailNumber: tail.tailNumber});
    });
    plan.tails = tails;
    return plan;     
  });
  return plansWithTails;
});

export const getUserTails = createSelector(getUserState, (u:User) =>{
  return values(u.tails)
});

