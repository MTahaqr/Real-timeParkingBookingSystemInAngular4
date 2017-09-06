import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormsModule} from '@angular/forms';
import {BookService} from '../../Services/book.service';
@Component({
  selector: 'app-bahadurabad',
  templateUrl: './bahadurabad.component.html',
  styleUrls: ['./bahadurabad.component.css']
})
export class BahadurabadComponent implements OnInit {
   selectedValue: string;
   bookTime;
   Time = [];
   endTime;
  date;
  Hours=[1,2,3 ];
  constructor(private BS:BookService) {
    for (var i=9;i<=21;i++)
    {
      this.Time[i-9]=i;
    }
    // console.log(this.Time);
     this.bookTime = new FormGroup({
      Dates: new FormControl("",Validators.compose([Validators.required])),
      Time: new FormControl("",Validators.compose([Validators.required])),
      Hours: new FormControl("",Validators.compose([Validators.required])),
      EndTime: new FormControl(""),
      // endTime: new FormControl(,Validators.compose([Validators.required])),
      
      
    });
   }
   
   

  ngOnInit() {
  }
   onSubmit(form){
    console.log(form);
    // this.endTime = this.BS.toGetEndTime(form.Time,form.Hours);
     this.date =this.BS.toGetDate(this.date);
    // this.BS.ForBahadBooking(form);
    
    // console.log('this.endTime',this.endTime)
    //  console.log("form)form)form)",form);
    // console.log("this.datethis.datethis.date",this.date);
    // this.RS.signIn(form);

  }
  toGetDate(){
    // console.log(this.date);
   
  }
 

}
