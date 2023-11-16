import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http = inject(HttpClient)

  constructor() { }

  users$:Observable<User[]> = this.http.get<User[]>('https://localhost:3000/api/users');
}
