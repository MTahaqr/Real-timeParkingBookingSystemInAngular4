import { Component, OnInit } from '@angular/core';
import {FirebaseListObservable} from 'angularfire2/database';
import {BookService} from '../../Services/book.service';


@Component({
  selector: 'app-book-parking',
  templateUrl: './book-parking.component.html',
  styleUrls: ['./book-parking.component.css']
})
export class BookParkingComponent implements OnInit {

  constructor(private BS:BookService) { }

  ngOnInit() {
  }
 

}
