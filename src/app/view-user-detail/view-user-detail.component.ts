import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserClientService } from '../user-client.service';

@Component({
  selector: 'app-view-user-detail',
  templateUrl: './view-user-detail.component.html',
  styleUrls: ['./view-user-detail.component.css']
})
export class ViewUserDetailComponent implements OnInit {
  id!: number;
  userDetails: any;

  constructor(private route: ActivatedRoute, private userClient: UserClientService) { }
  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.id = param['id'];
      console.log(this.id);
      this.userClient.getUserOne(this.id).subscribe(res=>{
        this.userDetails = res;
        console.log(res);
      })
    });
  }
}
