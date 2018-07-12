import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { AppStore } from '../app-store';
import * as AdcActions from '../actions/adc.actions';
import { AdcService } from '../../services/adc.service';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AdcEffects {
  constructor (
    private actions$: Actions,
    private adcService: AdcService,
  ) {}

  
  @Effect() fetchLegUsage$ = this.actions$
    .ofType(AdcActions.FETCH_LEG_USAGE)
    .map(toPayload)
    .switchMap(
      payload =>
      this.adcService.getLegUsage(payload.acftId))
    .map(res => new AdcActions.FetchLegUsageSuccess(res))
		 .catch(error => Observable.of(new AdcActions.FetchLegUsageFailure(error)));
		 
}
