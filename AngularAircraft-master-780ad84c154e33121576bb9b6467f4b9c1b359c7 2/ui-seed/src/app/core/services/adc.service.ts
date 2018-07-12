import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
//ngrx
import { Http  } from '@angular/http';
import { Store } from '@ngrx/store';
import * as UserActions from '../store/actions/user.actions';
import { AppStore } from '../store/app-store'

import { Observable } from 'rxjs/Observable';
import {assign} from 'lodash';

@Injectable()
export class AdcService {

  
  constructor(public http: HttpClient) {
  }

  /**
   * adcPost - post generic url and params to adc and get the response
   *
   *
   **/
  adcPost(url,params){
    console.log(url);
    return this.http.post(url,params);
  }
  
  /**
   *
   * getLegUsage - calls adc for leg usage
   * @params { string } acftId - id for aircraft
   **/ 
  getLegUsage(acft){
    return this.adcPost('/ADC/ADCContext/FlightStatusREST/Flights',{tail:acft});
  }
}

export interface FlightResp{
  flights:Flight[];
}

export interface Flight{
  offReport;
  status;
  tailID;
  onReport:boolean;
  dest;
  arrDateTime;
  legID;
  origin;
  depDateTime;
  fpName;
  tail;
  usage?:any,
  lastUpdated?:string;
}
