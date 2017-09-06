import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormsModule} from '@angular/forms';
import {RegisterService} from '../../Services/register.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm;
  constructor(private RS:RegisterService) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      name: new FormControl("",Validators.compose([Validators.required])),
      email: new FormControl("",Validators.compose([Validators.required])),
      password: new FormControl("",Validators.compose([Validators.required])),
      userType:new FormControl("user",Validators.compose([Validators.required])),
      uid:new FormControl("nothing",Validators.compose([Validators.required])),
      
    });
  }
  onSubmit(form){
    console.log(form);
    this.RS.signUp(form);

  }

}
