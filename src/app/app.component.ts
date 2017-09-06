import { Component } from '@angular/core';
import {RegisterService} from './Services/register.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showBtn;  
  user: Observable<firebase.User>;
  menuforAdmin=false;
  menuforUser=false;
  
  // constructor(private RS:RegisterService){
  //   this.showBtn= this.RS.showBtn;
  //   console.log("this.showBtn",this.showBtn);
  // }
  constructor(public afAuth: AngularFireAuth, private RS:RegisterService) {
    this.user = afAuth.authState;
    console.log("this.user",this.user);
    this.menuforAdmin=this.RS.adminMenu;
    // if(this.RS.adminMenu==false)
    // {
    //   this.menuforUser=true;
    // }
    // // else{
    //   this.menuforUser=false;
    //       this.menuforAdmin=true;
    // }
    console.log("this.menuforUser ",this.menuforUser);
    console.log(" this.menuforAdmin", this.menuforAdmin);
    }
  logout(){
    this.RS.LogOut();
  }
  menuForAccountType(){
    if(this.RS.adminMenu==false)
    {
      this.menuforUser=true;
      this.menuforAdmin=false;
    }
    else{
      this.menuforUser=false;
          this.menuforAdmin=true;
    }
  }
}
