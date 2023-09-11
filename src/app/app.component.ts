import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import { changeUsername, initAction } from './state/01-actions';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-test-ngrx';
  user$:Observable<{username:string, isAdmin:boolean}> = this.store.select((state: any) => state.root.user)

  constructor(private store:Store) {}

  ngOnInit(): void {
      this.store.dispatch(initAction());

      //this.store.select((state: any) => state.root.user)
      // .subscribe((response) => {
      //   console.log('response: ', response)
      // })
  }

  changeUsername():void {
    this.store.dispatch(changeUsername({username: 'Vincent'}));
  }

}
