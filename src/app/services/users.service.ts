import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, delay } from 'rxjs';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  //private readonly URL = 'api/trtr'
  private readonly URL = 'https://localhost:3000/api/users'

  private http = inject(HttpClient)

  constructor() { }

  users$:Observable<User[]> = this.http.get<User[]>(this.URL).pipe(delay(3000))
}
