import { Injectable } from '@angular/core';
import {AngularFireDatabase,FirebaseObjectObservable,FirebaseListObservable} from 'angularfire2/database';
import {BookService} from './book.service';

@Injectable()
export class AdminService {
  forUserBookings:FirebaseObjectObservable<any>;
  forUsersDetails:FirebaseObjectObservable<any>;
  userBookings=[];
  userBookingsKeys=[];
  allUsers=[];
  allUsersKeys=[];
  feedbacks=[];
  
  constructor(private db:AngularFireDatabase, private BS:BookService) { 

  }
  toShowBookings(){
    this.forUserBookings=this.db.object('BookingAreas/',{preserveSnapshot:true});
    this.forUserBookings.subscribe(snapshot=>{
      this.userBookings.length=0;
      this.userBookingsKeys.length=0;
      snapshot.forEach(level1=>{
        level1.forEach(level2=>{
          level2.forEach(level3=>{
          let key = level1.key+'/'+level2.key+'/'+level3.key;
          this.userBookingsKeys.push(key);
          this.userBookings.push(level3.val());
            
          }

          )
        })
      })
    })
    console.log("this.userBookings",this.userBookingsKeys)
  }
  toCancelBooking(ind){
    this.db.list('BookingAreas/'+this.userBookingsKeys[ind]).remove();
  }
  toShowAllUsers(){
    this.forUsersDetails =this.db.object('Users/AccountDetails',{preserveSnapshot:true});
    this.forUsersDetails.subscribe(snapshot=>{
      this.allUsers.length = 0;
      this.allUsersKeys.length=0;
      snapshot.forEach(level1=>{
        if(level1.val().userType!='admin')
        {
        this.allUsers.push(level1.val())
        this.allUsersKeys.push(level1.key);          
        }
        // console.log(level1.val().name + level1.val().email );
      })
    })
  }
  toRemoveUser(ind){
    console.log(this.BS.locationsArray);
    console.log('Users/AccountDetails/'+this.allUsersKeys[ind])
      this.db.object('Users/AccountDetails/'+this.allUsersKeys[ind]).remove();      
    for(var i=0;i<this.BS.locationsArray.length ; i++)
    {
      // console.log(this.BS.locationsArray[i].location)
      this.db.object('BookingAreas/'+this.BS.locationsArray[i].location+'/'+this.allUsersKeys[ind]).remove();
    }
    // console.log(this.allUsersKeys[ind])
  }
  toShowAllFeedbacks(uid){
    this.db.object('Feedbacks/'+uid,{preserveSnapshot:true})
    .subscribe(snapshot=>{
      this.feedbacks.length=0;
      snapshot.forEach(level1=>{
        this.feedbacks.push(level1.val())
        // console.log(level1.val());
      })
    })
  }
  toGetFeedback(fb,uid){
  // const userKey = localStorage.getItem('currentUser.uid');  
  this.db.list('Feedbacks/'+ uid).push(fb) 
}

  

}
