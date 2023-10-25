import { Component, OnInit } from '@angular/core';
import {Store, select} from '@ngrx/store';
import { changeIsAdmin, changeUsername, initAction } from './state/01-actions';
import {Observable} from 'rxjs';
import { State } from './state/00-reducter';
import { User } from './models/user';
import {getUser} from './state/02-selectors';

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

  constructor(private store:Store<State>) {}

  ngOnInit(): void {
      this.store.dispatch(initAction());

      //this.store.select((state: any) => state.root.user)
      // .subscribe((response) => {
      //   console.log('response: ', response)
      // })
  }

  changeUsername():void {
    this.store.dispatch(changeUsername({username: 'Vincent'}));
    // this.store.dispatch(changeIsAdmin({isAdmin: false}));
  }

}
