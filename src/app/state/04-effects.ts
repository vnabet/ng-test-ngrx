import { User } from './../models/user';
import { Injectable, inject } from '@angular/core'
import { UsersService } from '../services/users.service'

import {createEffect, Actions, ofType} from '@ngrx/effects'

import * as UsersActions from './01-actions'
import { map, mergeMap, tap, catchError,of } from 'rxjs';

// @Injectable()
export class AppEffects {

  userService = inject(UsersService);
  actions$ = inject(Actions);


  users$ = createEffect(() => {
    return this.actions$.pipe(
      tap((action) => console.log('DDD', action)),
      ofType(UsersActions.loadUsers),
      mergeMap(action => this.userService.users$
      /*.pipe(
        map((users: User[]) => UsersActions.loadUsersSuccess({users}))
      )*/),
      map((users: User[]) => UsersActions.loadUsersSuccess({users})),
      catchError((error) => of(UsersActions.loadUsersError({error})))

    )
  })


}
