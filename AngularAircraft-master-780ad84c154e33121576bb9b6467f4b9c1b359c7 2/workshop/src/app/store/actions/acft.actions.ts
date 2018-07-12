import { Action } from '@ngrx/store';

export const ACTION_NAME =           '[MODEL_NAME] ActionName';
export const ACTION_NAME =           '[MODEL_NAME] ActionName';

export class ActionName implements Action {
  readonly type = ACTION_NAME;

  constructor(public payload: PAYLOAD_TYPE) { }
}

export class ActionName implements Action {
    readonly type = ACTION_NAME;
  
    constructor(public payload: PAYLOAD_TYPE) { }
  }

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
= ActionName
| ActionName;