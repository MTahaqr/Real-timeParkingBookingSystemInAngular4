import { Component, OnInit } from '@angular/core';
import {BookService} from '../../Services/book.service';

@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.css']
})
export class ViewBookingComponent implements OnInit {

  userBookingsArray;
  userBookingsArrayKeys;
  constructor(private BS:BookService) {
    this.userBookingsArray=this.BS.userBookings;
    //  this.userBookingsArrayKeys=this.BS.userBookingsKey;
    this.BS.toGetUserBooking();
    console.log("this.userBookingsArray",this.userBookingsArray)
   }

  ngOnInit() {
  }
  cancelBooking(index){
    // console.log(index)
    this.BS.toCancelBooking(index);

  }

}
