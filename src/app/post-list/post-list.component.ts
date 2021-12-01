import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostClientService } from '../post-client.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  
  constructor(private postClient:PostClientService, private router:Router) { }
  posts:any; 

  ngOnInit(): void {

    this.postClient.getAll().subscribe(data => {
      this.posts = data;
      console.log(this.posts);
    })
  }
  get totalRows(): number {
    return this.posts.length;
  }
  delete(id:number){
    this.postClient.deletePost(id).subscribe(data => {
      alert("Row Deleted");
    });
  }
}
export interface IPost {
  id: number;
  userId: number;
  title: string;
  body: string;
}
