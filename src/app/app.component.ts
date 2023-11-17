import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Store, select} from '@ngrx/store';
// import { changeIsAdmin, changeUsername, initAction } from './state/01-actions';
import { RootActions, loadUsers} from './state/01-actions';
import {Observable} from 'rxjs';
import { State } from './state/00-reducter';
import { User } from './models/user';
import {getError, getIsLoaded, getUser, getUsers} from './state/02-selectors';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-test-ngrx';
  // user$:Observable<{username:string, isAdmin:boolean}> = this.store.select((state: any) => state.root.user)
  // user$:Observable<User> = this.store.pipe(
  //   select((state) => state.root.user)
  // )

  user$:Observable<User> =  this.store.select<User>(getUser);
  users$:Observable<User[]> = this.store.select<User[]>(getUsers);
  isLoaded$:Observable<boolean|undefined> = this.store.select<boolean|undefined>(getIsLoaded);
  error$:Observable<HttpErrorResponse | Error | string | null> = this.store.select<HttpErrorResponse | Error | string | null>(getError)

  constructor(private store:Store<State>, private usersService:UsersService) {}

  ngOnInit(): void {
      this.store.dispatch(RootActions.initApp());
      // this.store.dispatch(initAction());

      //this.store.select((state: any) => state.root.user)
      // .subscribe((response) => {
      //   console.log('response: ', response)
      // })

      this.usersService.users$.subscribe((users)=> console.log(users))

  }

  changeUsername():void {
    this.store.dispatch(RootActions.changeUsername({username: 'Vincent'}));
    // this.store.dispatch(changeUsername({username: 'Vincent'}));
    // this.store.dispatch(changeIsAdmin({isAdmin: false}));
  }

  loadUsers() {
    this.store.dispatch(loadUsers())
  }

}
