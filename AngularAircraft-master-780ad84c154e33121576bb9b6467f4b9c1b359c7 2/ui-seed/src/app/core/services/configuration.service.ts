import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable()
export class ConfigurationService {
  domain = environment.domain;
  app_name = environment.app_name;
  is_beta = environment.is_beta;
  constructor() { }

  isBeta(){
      return this.is_beta;
  }
  getBaseUrl(){
        return `https://${this.domain}/${this.app_name}`;
  }

  getLoginUrl(){
      return `/ADC/Login/Login?back=https%3a%2f%2f${this.domain}%2f${this.app_name}`;
  }

  getAssetsRoot(){
      return `${this.app_name}/assets`;
  }

}
