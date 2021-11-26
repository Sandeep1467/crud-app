import { Component, OnInit } from '@angular/core';
import { User, UserClientService } from '../user-client.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor( private userClient:UserClientService ) { }
  users: User[]= [];

  ngOnInit(): void {
    this.userClient.getAll().subscribe(data => {
      this.users = data;
      console.log("1");
    });
  }
  get totalRows(): number {
    return this.users.length;
  }
}
