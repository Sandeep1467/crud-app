import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UserClientService {

  constructor(private http: HttpClient) {}
  getAll(){
    return this.http.get(`https://jsonplaceholder.typicode.com/users`);
  }
  getUserOne(id:number){
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  }
  deleteUser(idUser: number){
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${idUser}`);
  }
}
