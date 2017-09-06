import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormsModule} from '@angular/forms';
import {RegisterService} from '../../Services/register.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signInForm;
  constructor(private RS:RegisterService) { }

  ngOnInit() {
    this.signInForm = new FormGroup({
      email: new FormControl("",Validators.compose([Validators.required])),
      password: new FormControl("",Validators.compose([Validators.required])),
    });
  }
  onSubmit(form){
    // console.log(form);
    this.RS.signIn(form);

  }

}
