import {Observable} from 'rxjs/Rx';
import * as firebase from 'firebase/app';


// move me  up a level
const firebaseUser =  {
  uid: '3',
  providerData: [{ displayName: 'Bill Cosby' }],
  delete(){},
  getIdToken(booli): Promise<any>{ return firebasePromise}
};


const  firebasePromise = new Promise((resolve, reject) => {
  resolve('123');
});


export const authMock = {
  logout(){return true },
  authenticate() {return Observable.of(firebaseUser)},
  authState() { return Observable.of(true)}

};
