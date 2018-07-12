import { Component,  ChangeDetectionStrategy } from '@angular/core';
import  * as UserActions  from './core/store/actions/user.actions';
import { AppStore } from './core/store/app-store'
import { Store } from '@ngrx/store';
import { User } from './core/model/user'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent{
  
  constructor( 
	       private store: Store<AppStore>
  ) {
    this.store.dispatch(new UserActions.GetJwt());
  }

}
