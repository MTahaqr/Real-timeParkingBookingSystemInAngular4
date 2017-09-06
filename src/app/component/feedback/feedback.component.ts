import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormsModule} from '@angular/forms';
import {BookService} from '../../Services/book.service';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbacksArray=[];
  constructor(private BS:BookService) { 
    this.BS.toShowFeedback();
    this.feedbacksArray=this.BS.feedbacks;
    console.log("this.feedbacksArray",this.feedbacksArray)
  }
  feebackForm;
  ngOnInit() {
   this.feebackForm = new FormGroup({
      feedback: new FormControl("",Validators.compose([Validators.required])),
      from: new FormControl("User",Validators.compose([Validators.required])),
    });
  }
  onSubmit(form){
    // console.log("locForm",locForm);
    this.BS.toPushFeedback(form);
  }

}
