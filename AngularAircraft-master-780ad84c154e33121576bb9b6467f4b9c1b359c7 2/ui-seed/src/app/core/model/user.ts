import  { User as FirebaseUser } from 'firebase';
import { values, merge }  from 'lodash';

export class User {

  authState: FirebaseUser;
  userId: string;
  idToken?: string;
  companyId: string;
  companyName: string;
  userName: string;
  userType: string;
  fullName: string;
  snap: any;
  tails: any
  tailOfInterest: any;
  plans: any;

  /**
   * Represents a dashboard User
   * @constructor
   */
  constructor(authState: FirebaseUser) {
    if (authState) {
      this.authState = authState;
      this.userId = authState.uid;
    }
  }

  /** addSnapshot - fills in all the values for user not defined from the authstate **/
  addSnapshot(snap){
    this.tails = snap.tailAccess;
    this.companyId = snap.companyID;
    this.companyName = snap.companyName;
    this.userName = snap.userName;
    this.userType = snap.userType;
    this.tailOfInterest = snap.tailOfInterest;
    this.fullName = snap.fullName;
  }

  /**
   * addPlans - takes the company tails json and user tailAccess json and merges them together
   *           setting the plans on the user object
   * @param companyTails {Any} - company tails and plans
  **/
  addPlans(companyTails: any){
    this.plans =  values(merge( this.tails, companyTails));
  }

}

export interface Plan {
  planId?;
  isSharedPlan?;
  planName?: string;
  tails?;
}


export interface UserTail {
  aircraftID: string;
  plan?: any | Plan ;
  tailNumber: string;
}

