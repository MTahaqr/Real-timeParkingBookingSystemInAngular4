import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormsModule} from '@angular/forms';
import {BookService} from '../../Services/book.service';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit {
    locationForm;

  constructor(private BS:BookService) { }

  ngOnInit() {
    this.locationForm = new FormGroup({
      location: new FormControl("",Validators.compose([Validators.required])),
      slots: new FormControl("",Validators.compose([Validators.required])),
    });
  }
  onSubmit(locForm){
    // console.log("locForm",locForm);
    this.BS.toAddLocation(locForm);
  }

}
