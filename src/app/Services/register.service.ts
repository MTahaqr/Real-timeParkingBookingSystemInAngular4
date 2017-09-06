import { Injectable } from '@angular/core';
// import {AngularFireAuth} from 'angularfire2/auth'
import {AngularFireDatabase} from 'angularfire2/database';
import {Router} from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Injectable()
export class RegisterService {
     user: Observable<firebase.User>;
     adminMenu;

  constructor(private afAuth:AngularFireAuth,private db:AngularFireDatabase ,private routers:Router) { }
  signUp(form){
    this.afAuth.auth.createUserWithEmailAndPassword(form.email,form.password)
    .then((currentUser)=>{
      localStorage.setItem("currentUser.uid",currentUser.uid)
      form.uid=currentUser.uid;
      console.log("form.uid",form.uid);
      // form.uid=currentUser.uid;
      const userObservable = this.db.object('Users/AccountDetails/'+currentUser.uid);
      userObservable.set(form)
       this.adminMenu=false;
       this.routers.navigate(['/UserDashBoard'])
    })
  }
  signIn(form){
    this.afAuth.auth.signInWithEmailAndPassword(form.email,form.password)
    .then((Success)=>{
      localStorage.setItem("currentUser.uid",Success.uid)
      const userObservable = this.db.object('Users/AccountDetails/'+Success.uid , { preserveSnapshot: true });  
      userObservable.subscribe(snapshot=>{
        if(snapshot.val().userType=='user')
        {
          this.adminMenu=false;
          this.routers.navigate(['/UserDashBoard'])
          this.user = this.afAuth.authState;
           console.log("this.user",this.user);
        }
        else if((snapshot.val().userType=='admin'))
        {
          this.adminMenu=true;
          console.log("snapshot.val().user",snapshot.val().userType)
          this.routers.navigate(['/AdminDashBoard'])    
                       
        }
      })
    })
    .catch(function(error){
      alert(error);
    })
  }
  LogOut(){
    this.afAuth.auth.signOut()
    
    .then((successFull)=>{
      this.routers.navigate(['/SignIn']);
       this.user = this.afAuth.authState;
      
    })
    .catch(function(error){
      alert(error);
    })
  }

}
