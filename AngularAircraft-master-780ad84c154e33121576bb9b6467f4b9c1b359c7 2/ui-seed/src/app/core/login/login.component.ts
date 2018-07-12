import { Component, Inject, OnInit, OnDestroy, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import * as UserActions from '../store/actions/user.actions';
import { AppStore } from '../store/app-store'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
//test
export class LoginComponent implements OnInit {
  
  user;
  form: FormGroup;
  constructor( public router: Router,
	       private store: Store<AppStore>,
	       private fb: FormBuilder) {}

  onSubmit(user){
//x    this.store.dispatch(new UserActions.Login());
    // move this into effects and use ngrx
//    this.router.navigate(['dashboard']);
  }

  ngOnInit() {
    this.form = this.fb.group({
      user: this.fb.group({
        name: ['', Validators.minLength(2)],
        pass: ['', Validators.required]
      })
    });
  }

  ngOnDestroy(){
    this.form.reset();
  }
}
