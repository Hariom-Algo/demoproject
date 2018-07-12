import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Store } from '@ngrx/store';

@Injectable()
export class AcftEffects {
    @Effect() $EFFECT_OBSERVABLE_NAME: Observable<Action> = this.actions$.ofType(ACTION_TO_LISTEN_TO)
    // Map the payload into JSON to use as the request body
    .map(toPayload)
    .mergeMap(payload => {
        return this.http.METHOD(PARAMS)
        // If successful, dispatch success action with result
        .map(response => response.json())
        .map((data: any) => {
            //  do stuff you like here and then return success action
            return { type: SUCCESS_ACTION, payload: data };
        })
        // If request fails, dispatch failed action
        .catch(() => {
            return of({ type: ERROR_ACTION });
        })
    });

    constructor(
        private http: Http,
        private actions$: Actions
    ) {}
}
