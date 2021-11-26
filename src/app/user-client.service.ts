import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserClientService {

  constructor(private http: HttpClient) {}
  getAll(): Observable<User[]>{
    return this.http.get<User[]>(`https://jsonplaceholder.typicode.com/users`);
  }
}
export interface User{
  name: string;
  phone: string;
  email: string;
}
