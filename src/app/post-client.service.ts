import { IPost } from './post-list/post-list.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostClientService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(`https://jsonplaceholder.typicode.com/posts`);
  }
  getPostOne(id:number){
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
  deletePost(idPost: number){
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${idPost}`);
  }
  addPost(post: IPost){
    return this.http.post(`https://jsonplaceholder.typicode.com/posts`,post);
  }
  update(post: IPost){
    return this.http.put(`https://jsonplaceholder.typicode.com/posts`,post)
  }
}