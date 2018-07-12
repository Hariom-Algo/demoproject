import { Routes } from '@angular/router';
import { LoginComponent } from '../core/login/login.component';
import { AuthGuard } from './guards/auth.guard';


import { FramerComponent } from '../core/framer/framer.component';
import { AcftInterestComponent } from '../core/acft-interest/acft-interest.component';


// Define routes for application here
export const appRoutes: Routes = [
  // legacy app paths
  {
    path: 'ADC/ADCContext/NewCreateFPL',
    data: {
      title: 'Flight Planning',
      framerPath:'/ADC/ADCContext/NewCreateFPL',
	  },
    component: FramerComponent
  },
  /******** End Legacy Routes ********/
  {
    path: 'login',
    component: LoginComponent,
    data: {title: 'SBB Usage'},
  },

  {
    path: 'framer',
    component: FramerComponent,
    data: {title: 'SBB Usage'},
  },
  {
    path: '**',
    component: LoginComponent, //default route
    data: {title: 'Default'}
  },

];
