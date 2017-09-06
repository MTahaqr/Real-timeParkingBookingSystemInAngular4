import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../Services/admin.service';

@Component({
  selector: 'app-view-all-bookings',
  templateUrl: './view-all-bookings.component.html',
  styleUrls: ['./view-all-bookings.component.css']
})
export class ViewAllBookingsComponent implements OnInit {

  userBookingsArray;
  constructor(public AS:AdminService) { 
     this.userBookingsArray=this.AS.userBookings;
      this.AS.toShowBookings();
      console.log("this.userBookingsArray",this.userBookingsArray);
  }
  ngOnInit() {
  }
  cancelBooking(i){
    this.AS.toCancelBooking(i);
  }

}
