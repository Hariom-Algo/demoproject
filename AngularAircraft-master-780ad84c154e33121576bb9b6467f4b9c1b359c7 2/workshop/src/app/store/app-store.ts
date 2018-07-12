import * as  acft from './reducers/acft.reducer';
export interface Acft{}

export interface AppStore {
  acft: { [acftId: string]: Acft };
}

export const reducers = {
  acft: acft.acftReducer,
};