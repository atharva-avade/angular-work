import { Component, OnInit } from '@angular/core';
import { UserService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
 users: string[];

  constructor(private userservice:UserService){}

  ngOnInit(){
    this.users=this.userservice.activeUsers;
  }
  onSetToInactive(id: number) {
    this.userservice.setToInactive(id)

  }
}


