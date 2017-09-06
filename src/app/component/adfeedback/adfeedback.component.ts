import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../Services/admin.service';
import {FormGroup,FormControl,Validators,FormsModule} from '@angular/forms';



@Component({
  selector: 'app-adfeedback',
  templateUrl: './adfeedback.component.html',
  styleUrls: ['./adfeedback.component.css']
})
export class ADFeedbackComponent implements OnInit {

  feebackForm;
  allUsersArray=[];
  feedbacksArray=[];
  uid;
  constructor(public AS:AdminService) {
   this.AS.toShowAllUsers();
    this.allUsersArray =  this.AS.allUsers;
    this.feedbacksArray = this.AS.feedbacks;   
   }
  ngOnInit() {
     this.feebackForm = new FormGroup({
      feedback: new FormControl("",Validators.compose([Validators.required])),
      from: new FormControl("Admin",Validators.compose([Validators.required])),
    });
  }
  viewFB(key){
    // console.log("uid",key);
    this.uid=key;
    this.AS.toShowAllFeedbacks(key); 
    
  }
   onSubmit(form){
    // console.log("locForm",locForm);
    this.AS.toGetFeedback(form,this.uid);
  }

}
