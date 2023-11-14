import { User } from './../models/user';
import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store";
import {HttpErrorResponse} from '@angular/common/http'


// export const initAction = createAction('[ROOT] Init app');
// export const changeUsername = createAction('[ROOT] Change username', props<{username: string}>());
// export const changeIsAdmin = createAction('[ROOT] Change isAdmin', props<{isAdmin: boolean}>());

export const RootActions = createActionGroup({
  source: 'ROOT',
  events: {
    'Init app': emptyProps(),
    'Change username': props<{username: string}>(),
    'Change isAdmin': props<{isAdmin: boolean}>(),
  }
})


export const loadUsers = createAction('[API Users] Load Users');
export const loadUsersSuccess = createAction('[API Users] Load Users success', props<{users:User[]}>());
export const loadUsersError = createAction('[API Users] Load Users error', props<{error:HttpErrorResponse | Error}>());
