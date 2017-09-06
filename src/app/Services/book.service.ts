import { Injectable } from '@angular/core';
import {AngularFireDatabase,FirebaseObjectObservable,FirebaseListObservable} from 'angularfire2/database';
import {Router} from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
// import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Injectable()
export class BookService {
 
 Locations:FirebaseListObservable<any>;
 getLocations:FirebaseObjectObservable<any>;
 foruserBookings:FirebaseObjectObservable<any>;
 userBookings=[];
 userBookingsKey=[];
 locationsArray:any=[];
 bookParking=[];
 feedbacks=[];
 
 bookSlot:FirebaseListObservable<any>;
 time=[];
 simpleDate;
 resSlots=[];
 locatSlots;
 actualSlots=[];
 BKDet={
   Dates:'',
   Time: '',
   Hours: '',
   EndTime: '',
   slotNum:'',
   
 };
 array=['a','b','c'];
 
  constructor(private db:AngularFireDatabase) {
    
    // this.Locations=this.db.list('Locations/');    
     for (var i=9;i<=21;i++)
    {
      this.time[i-9]=[i];
    }
    
   }

   toAddLocation(locForm){
    //  const locObject={name:'KMDC',slot:8};
    this.Locations=this.db.list('Locations/');
    this.Locations.push(locForm);
    console.log("this.Locations",this.Locations);
    
    return this.Locations;
   }
   toGetLocations(){
    this.getLocations=this.db.object('Locations/',{ preserveSnapshot: true });
    this.getLocations.subscribe(snapshot=>{
      this.locationsArray.length=0;
      snapshot.forEach(level1=>{
        this.locationsArray.push(level1.val())
        // console.log(level1.val())
      })
    
})
        return this.locationsArray;
  }
  toGetDate(date:Date){
    this.simpleDate = date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear();
    // return simpleDate;
    // console.log("aaa",a);
  }
//   toGetEndTime(time,hours){

// const endTime=time+hours; 
// return endTime;
//   }
toCheckBook
  toCheckSlot(form){
    console.log("form1",form)
    form.EndTime=form.Time+form.Hours;
    if(form.EndTime>24)
    {
      alert("Hours can not be selected for next Day");
    }
    else{
      // console.log("this.simpleDate",this.simpleDate)
      this.toGetDate(form.Dates);
    form.Dates=this.simpleDate;
    console.log("form1",form);
    this.BKDet=form;
     this.toRunOnChange()
    // form.slotNum=slot;
    // console.log("slot",slot)
    // console.log("form",form);
    //============================
  //   this.resSlots.length=0;
  //   console.log(this.bookParking)
  //   for(var i=0;i<this.bookParking.length ; i++)
  //   {
  //     console.log(this.bookParking[i].Dates);
  //   if(this.bookParking[i].Dates==form.Dates)
  //   {
  //     console.log(this.bookParking[i].Dates);
  //    if((form.Time>=this.bookParking[i].Time && form.Time<=this.bookParking[i].EndTime)||(form.Time<=this.bookParking[i].Time && form.EndTime>=this.bookParking[i].Time))
  //     {
  //       this.resSlots.push(this.bookParking[i].slotNum);
  //       console.log("this.resSlots.",this.resSlots)
  //     }
  //   }
  //  }
  //  return this.resSlots;
  //=================================
    // const bookObservable = this.db.object('BookingAreas/'+locat,{preserveSnapshot:true});
    // bookObservable.subscribe(snapshot=>{
    //   this.bookParking.length=0;
    //   snapshot.forEach(level1=>{
    //     level1.forEach(level2=>{
    //       this.bookParking.push(level2.val())
    //     })
    //   })
    // })
    // console.log(this.bookParking);
    //  for (var i=0 ; i<1 ; i++)
    // {
     
    //   console.log( "this.bookParking[i]",this.bookParking[i].Dates)
    // }  
    // const userKey = localStorage.getItem('currentUser.uid');
    // this.bookSlot=this.db.list('BookingAreas/'+locat +'/'+userKey);
    // this.bookSlot.push(form);
    }
    
  }
  toGetLocationBooking(locat,slots){
    this.locatSlots=slots;
    const bookObservable = this.db.object('BookingAreas/'+locat,{preserveSnapshot:true});
    bookObservable.subscribe(snapshot=>{
      this.bookParking.length=0;
      snapshot.forEach(level1=>{
        level1.forEach(level2=>{
          this.bookParking.push(level2.val())
        })
      })
      this.toRunOnChange();
    })
    console.log(this.bookParking)

  }
  // toCheckBook(){
  //   for (var i=0 ; i<this.bookParking.length ; i++)
  //   {
  //     console.log( this.bookParking[i])
  //   }

  // }

  // toShowBookSlot(location,){

  // }
  toRunOnChange(){
    this.resSlots.length=0;
    this.actualSlots.length=0;
    console.log(this.bookParking)
    for(var i=0;i<this.bookParking.length ; i++)
    {
      console.log(this.bookParking[i].Dates);
    if(this.bookParking[i].Dates==this.BKDet.Dates)
    {
      console.log(this.bookParking[i].Dates);
     if((this.BKDet.Time>=this.bookParking[i].Time && this.BKDet.Time<=this.bookParking[i].EndTime)||(this.BKDet.Time<=this.bookParking[i].Time && this.BKDet.EndTime>=this.bookParking[i].Time))
      {
        this.resSlots.push(this.bookParking[i].slotNum);
        console.log("this.resSlots.",this.resSlots)
      }
    }
  }
  for(var i=0 ;i<this.locatSlots ;i++)
    {
      this.actualSlots[i]=i+1;
    }
    // this.resSlots= this.BS.toBookSlot(this.submitCp,slotNum,this.locat)
    for(var i=0 ;i<this.resSlots.length ;i++)
    {
      var index = this.actualSlots.indexOf(this.resSlots[i]);
      this.actualSlots.splice(index, 1);
    }
  }


  toBookSlot(form,slotNum,locat){
    form.slotNum=slotNum;
    const userKey = localStorage.getItem('currentUser.uid');
     this.bookSlot=this.db.list('BookingAreas/'+locat +'/'+userKey);
    console.log("form2",form);
    // console.log(locat);
    this.bookSlot.push(form);
  //    this.resSlots.length=0;
  //   console.log(this.bookParking)
  //   for(var i=0;i<this.bookParking.length ; i++)
  //   {
  //     console.log(this.bookParking[i].Dates);
  //   if(this.bookParking[i].Dates==form.Dates)
  //   {
  //     console.log(this.bookParking[i].Dates);
  //    if((form.Time>=this.bookParking[i].Time && form.Time<=this.bookParking[i].EndTime)||(form.Time<=this.bookParking[i].Time && form.EndTime>=this.bookParking[i].Time))
  //     {
  //       this.resSlots.push(this.bookParking[i].slotNum);
  //       console.log("this.resSlots.",this.resSlots)
  //     }
  //   }
  // }
  // return this.resSlots;
}
 toGetUserBooking(){
  
  const userKey = localStorage.getItem('currentUser.uid');
  // console.log("this.locationsArray.length",this.locationsArray.length)
  //  for(var i=0;i<this.locationsArray.length;i++)
  //  {
  //    console.log("this.locationsArray.location",this.locationsArray[i].location);
       this.foruserBookings=this.db.object('BookingAreas/',{preserveSnapshot:true});
       this.foruserBookings.subscribe(snapshot=>{
          this.userBookings.length=0;
          this.userBookingsKey.length=0;
         snapshot.forEach(level1=>{
           level1.forEach(level2=>{
           if(level2.key==userKey)
           {
             level2.forEach(level3=>{
              const key=level1.key+'/'+level2.key+'/'+level3.key;
              // console.log("key",key) 
             this.userBookings.push(level3.val()) ;
             this.userBookingsKey.push(key);
              
             })
           }
           }
           )  
         }  
         )
       })
       console.log("this.userBookings",this.userBookings)
       console.log("this.userBookingsKey",this.userBookingsKey)
       
  //  }
  
}
toCancelBooking(ind){

       this.db.object('BookingAreas/'+this.userBookingsKey[ind]).remove();
  
}
toPushFeedback(fb){
  const userKey = localStorage.getItem('currentUser.uid');  
  this.db.list('Feedbacks/'+ userKey).push(fb) 
}
toShowFeedback(){
  const userKey = localStorage.getItem('currentUser.uid');    
  this.db.object('Feedbacks/'+userKey,{preserveSnapshot:true})
  .subscribe(snapshot=>{
    this.feedbacks.length=0;
    snapshot.forEach(level1=>{
      this.feedbacks.push(level1.val())
      // console.log(level1.val())
    })
  })
}


}

