import { Action } from '@ngrx/store';
import { createSelector } from '@ngrx/store';

export interface AcftState {

}

export const initialState: AcftState = {}


export function acftReducer(state: State = initialState, action: Action): State {
  switch (action.type) {

    case MyAction:
      // your action code here
      return;

    default:
      return state;
  }
}


/* 
    Below are the selectors for this reducer. Make sure to make compact selectors as per 
    requirements of your application.
*/
export const getProperty1 = (state: AcftState) => state.property1;

export const getProperty2 = (state: AcftState) => state.property2;