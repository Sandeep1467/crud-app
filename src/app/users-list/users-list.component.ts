import { Component, OnInit } from '@angular/core';
import { UserClientService } from '../user-client.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
users: any;
  constructor( private userClient:UserClientService ) { }

  ngOnInit(): void {
    this.userClient.getAll().subscribe(data => {
      this.users = data;
    });
  }
  get totalRows(): number {
    return this.users.length;
  }
  delete(id:number){
    this.userClient.deleteUser(id).subscribe(data => {
      alert("Row Deleted");
    });
  }
}
