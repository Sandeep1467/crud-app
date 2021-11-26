import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostClientService } from '../post-client.service';

@Component({
  selector: 'app-view-post-detail',
  templateUrl: './view-post-detail.component.html',
  styleUrls: ['./view-post-detail.component.css']
})
export class ViewPostDetailComponent implements OnInit {
  id!: number;
  postDetails: any;
  constructor(private route: ActivatedRoute, private postClient: PostClientService) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.id = param['id'];
      console.log(this.id);
      this.postClient.getPostOne(this.id).subscribe(res=>{
        this.postDetails = res;
        console.log(res);
      })
    });
  }

}
