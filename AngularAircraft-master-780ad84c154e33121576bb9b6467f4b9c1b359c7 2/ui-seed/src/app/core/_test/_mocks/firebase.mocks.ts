// Mock fireback classes for testing
export const FireMock = {
  signInWithCustomToken(){return true},
  signOut(){return true }
};

export const AfAuthMock = {
  auth: FireMock
};
export class DB{
  constructor(){}
};

export class AfDatabase {
  public db = new DB();
  list(anything: any){return true; }
};
