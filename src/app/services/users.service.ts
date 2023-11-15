import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http = inject(HttpClient)

  constructor() { }

  users$ = this.http.get('https://localhost:3000/api/users');
}
