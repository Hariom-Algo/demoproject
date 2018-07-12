import { TestBed, inject } from '@angular/core/testing';
import { ConfigurationService } from './configuration.service';
import { environment } from '../../../environments/environment';

describe('ConfigurationService', () => {
  const domain = environment.domain;
  const app_name = environment.app_name;
  const is_beta = environment.is_beta;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfigurationService]
    });
  });

  it('should compile', inject([ConfigurationService], (service: ConfigurationService) => {    expect(service).toBeTruthy();
  }));
  it('should use dev environment', inject([ConfigurationService], (service: ConfigurationService) => {
    expect(service.domain).toBe(domain);
    expect(service.is_beta).toBe(is_beta)
    expect(service.app_name).toBe(app_name);
  }));

  it('should getBeta to be true', inject([ConfigurationService], (service: ConfigurationService) => {
    expect(service.isBeta()).toBe(is_beta);
  }));

  it('should getBaseUrl to be correct', inject([ConfigurationService], (service: ConfigurationService) => {
    expect(service.getBaseUrl()).toBe('https://' + domain + '/system-dashboard');
  }));

  it('should getLoginUrl to be correct', inject([ConfigurationService], (service: ConfigurationService) => {
    expect(service.getLoginUrl()).toBe('/ADC/Login/Login?back=https%3a%2f%2f' + domain + '%2fsystem-dashboard');
  }));

  it('should getAssetRoot() be assets', inject([ConfigurationService], (service: ConfigurationService) => {
    expect(service.getAssetsRoot()).toBe('system-dashboard/assets');
  }));

})
