import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../Services/admin.service';

@Component({
  selector: 'app-view-all-users',
  templateUrl: './view-all-users.component.html',
  styleUrls: ['./view-all-users.component.css']
})
export class ViewAllUsersComponent implements OnInit {

  allUsersArray=[];
  constructor(public AS:AdminService) { 
    this.AS.toShowAllUsers();
    this.allUsersArray =  this.AS.allUsers;
  }

  ngOnInit() {
  }
  removeUser(i){
    this.AS.toRemoveUser(i);
  }

}
