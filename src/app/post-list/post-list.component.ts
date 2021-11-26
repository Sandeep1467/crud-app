import { Component, OnInit } from '@angular/core';
import { PostClientService } from '../post-client.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  
  constructor(private postClient:PostClientService) { }
  posts:any; 
  ngOnInit(): void {
    
    console.log("0");

    this.postClient.getAll().subscribe(data => {
      this.posts = data;
      console.log("1");
    });  
  }
  get totalRows(): number {
    return this.posts.length;
  }
}
