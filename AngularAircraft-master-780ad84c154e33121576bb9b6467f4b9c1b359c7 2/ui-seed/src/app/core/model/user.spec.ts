import { User } from './user';
import * as firebase from 'firebase';

let mockUser  = { uid: '3'}
let mockSnapshot = {companyID:"1",companyName:"Honeywell",fullName:"CA 1",suspended:false,
		    tailAccess:{1:{aircraftID:"1",tailNumber:"N100XA"}},
		    tailOfInterest: 'None',
		    userID: '3',userName: 'ca1',userType:'admin'}
describe('User', () => {
  let user;
  let fbUser = mockUser as firebase.User;
  
  it('should instantiate with firebase User ', () => {
    user = new User(fbUser);    
    expect(user.userId).toBe('3');
    expect(user.authState).toBeDefined();
  });

  it('should add the user snapshot from firebase ', () => {
    user = new User(fbUser);
    user.addSnapshot(mockSnapshot);
    expect(user.tails).toBe(mockSnapshot.tailAccess);
    expect(user.companyId).toBe(mockSnapshot.companyID);
    expect(user.companyName).toBe(mockSnapshot.companyName);
    expect(user.userType).toBe(mockSnapshot.userType);
    expect(user.userName).toBe(mockSnapshot.userName);
    expect(user.tailOfInterest).toBe(mockSnapshot.tailOfInterest);
    expect(user.fullName).toBe(mockSnapshot.fullName);    
  });

  it('should add plans based on the merge of companytails and user tails', () => {
  });


});
