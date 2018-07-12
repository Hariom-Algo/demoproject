import {
  ModuleWithProviders, NgModule,
  Optional, SkipSelf, ErrorHandler
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from '../routing/app-routing.module'

// environment imports
import { environment } from '../../environments/environment';
import { CookieModule } from 'ngx-cookie';

// components
import { LoginComponent } from './login/login.component';
import { FramerComponent } from './framer/framer.component';
import { LoadingComponent } from './loading/loading.component';
import { ValuesPipe } from './shared/pipes/values.pipe';
import { AcftInterestComponent } from './acft-interest/acft-interest.component';

// services prolly can nix config service soon
import { AdcService  } from './services/adc.service';
import { AuthenticationService  } from './services/authentication.service';
import { UserService } from './services/user.service';
import { ConfigurationService  } from './services/configuration.service';

import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';


import { SafeResourcePipe } from './shared/pipes/safe-resource.pipe';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    !environment.production ? LoggerModule.forRoot({ serverLoggingUrl: '' , level: NgxLoggerLevel.DEBUG,  serverLogLevel: NgxLoggerLevel.ERROR}) :
      LoggerModule.forRoot({ level: NgxLoggerLevel.WARN, serverLogLevel: NgxLoggerLevel.ERROR}),
    CookieModule.forRoot()
  ],
  exports: [
    LoginComponent,
    FramerComponent,
    LoadingComponent
  ],
  declarations: [
    LoginComponent,
    AcftInterestComponent,
    FramerComponent,
    LoadingComponent,
    SafeResourcePipe,
    ValuesPipe
   

  ],
  providers: [
    AuthenticationService,
    ConfigurationService,
    UserService,
    AdcService,   ]
})

export class CoreModule {

  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
      ]
    };
  }
}
