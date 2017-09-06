import { Component, OnInit , ViewEncapsulation } from '@angular/core';
import {RegisterService} from '../../Services/register.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
// import {FirebaseListObservable} from 'angularfire2/database';
import {BookService} from '../../Services/book.service';
import {FormGroup,FormControl,Validators,FormsModule} from '@angular/forms';

import 'hammerjs'

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  
    user: Observable<firebase.User>;
    
    locations=[];
     bookTime;
     submitCp={};
     Time = [];
     endTime;
     date;
     Hours=[1,2,3 ];
     check=false;
     locat;
     slots;
     slotsArray=[];
     enableBook=false;
     slotNum;
     resSlots=[];
     showTable=false;
     
    constructor(private RS:RegisterService, private afAuth:AngularFireAuth,private BS:BookService) {
     this.user = afAuth.authState;
    //  this.resSlots= this.BS.resSlots;
    this.BS.bookParking;
    // this.BS.resSlots;
    this.BS.actualSlots;
     this.locations = this.BS.toGetLocations();
     for (var i=9;i<=21;i++)
    {
      this.Time[i-9]=i;
    }
     this.bookTime = new FormGroup({
      Dates: new FormControl("",Validators.compose([Validators.required])),
      Time: new FormControl("",Validators.compose([Validators.required])),
      Hours: new FormControl("",Validators.compose([Validators.required])),
      EndTime: new FormControl(""),
      slotNum: new FormControl(""),
      // endTime: new FormControl(,Validators.compose([Validators.required])),
      
      
    });
     
    
   }
  ngOnInit() {
  }
  
  logout(){
    this.RS.LogOut();
  
  }
  onSubmit(locForm){
    // console.log("locForm",locForm);
    this.submitCp=locForm;
    for(var i=0 ;i<this.slots ;i++)
    {
      this.slotsArray[i]=i+1;
    }
    // this.resSlots=this.BS.toCheckSlot(locForm);
    this.BS.toCheckSlot(locForm);
    console.log("this.resSlots",this.resSlots);
    for(var i=0 ;i<this.resSlots.length ;i++)
    {
      var index = this.slotsArray.indexOf(this.resSlots[i]);
      this.slotsArray.splice(index, 1);
    }
    this.showTable=true;
    
    // console.log("this.resSlots",this.resSlots)

    // this.BS.toAddLocation(locForm);
  }
  // sendLoc(loc,slot){
  //   // this.check=!(this.check);
  //   this.check=true;
  //   this.slotsArray.length=0;
  //   this.locat=loc;
  //   this.slots=slot;
  //   for(var i=0 ;i<this.slots ;i++)
  //   {
  //     this.slotsArray[i]=i;
  //   }
  //   console.log("location",loc,slot)
  // }
  backToLocat(){
    this.check=false;
    this.enableBook=false;
    this.showTable=false;
    console.log(this.BS.bookParking)
    
  }
  toCheckTrue()
  {
    // this.slotNum=slot;
    this.enableBook=true;
    
  }
  // toCheckBook(){
  //   this.BS.toCheckBook();
  // }
  toGetLocationBook(lct,slot){
    this.check=true;
    this.slotsArray.length=0;
    this.locat=lct;
    this.slots=slot;
    for(var i=0 ;i<this.slots ;i++)
    {
      this.slotsArray[i]=i+1;
    }
 
    this.BS.toGetLocationBooking(lct,slot);
  }
  //  getLocations(){
  //    return this.BS.toGetLocations();

  //   }
  toBookSlots(slotNum){
    for(var i=0 ;i<this.slots ;i++)
    {
      this.slotsArray[i]=i+1;
    }
    // this.resSlots= this.BS.toBookSlot(this.submitCp,slotNum,this.locat)
    this.BS.toBookSlot(this.submitCp,slotNum,this.locat)
    for(var i=0 ;i<this.resSlots.length ;i++)
    {
      var index = this.slotsArray.indexOf(this.resSlots[i]);
      this.slotsArray.splice(index, 1);
    }
  }
 

}
