import { User } from '../model/user';
import * as user from './reducers/user.reducer';
import * as adc from './reducers/adc.reducer';


export interface AppStore {
  user: User;
  adc;
}

export const reducers = {
  user: user.userReducer,
  adc: adc.adcReducer
};
