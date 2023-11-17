import { HttpErrorResponse } from '@angular/common/http';
import { props } from '@ngrx/store';

import {Action, ActionReducer, createReducer, MetaReducer, on} from '@ngrx/store';
// import { changeUsername, initAction } from './01-actions';
import { loadUsers, loadUsersError, loadUsersSuccess, RootActions } from './01-actions';
import { User } from '../models/user';


export const enum features {
  ROOT_FEATURE_KEY = 'root'
}

export interface State {
  readonly [features.ROOT_FEATURE_KEY]: RootState
}

export interface RootState {
  appName: string;
  user: User;
  users: User[];
  loaded?:boolean;
  error:HttpErrorResponse | Error | string | null;
}

const initialState:RootState = {
  appName: 'NgRx',
  user: {
    userName: '',
    isAdmin: false
  },
  users:[],
  error: null
}

function log(reducer: ActionReducer<State>):ActionReducer<State> {
  return (state, action) => {
    const currentState = reducer(state, action);

    console.groupCollapsed(action.type)
    console.log('Action: ', action)
    console.log('Etat précédent: ', state);
    console.log('Etat suivant: ', currentState);
    console.groupEnd();

    return currentState;
  };
}

export const rootReducer = createReducer<RootState, Action>(initialState,
  on(RootActions.initApp, (state:RootState):RootState => {
    return {
      ...state,
      user: {
        ...state.user,
        isAdmin: true

      }
    }
  }),
    on(RootActions.changeUsername, (state:RootState, props):RootState => {
      //console.log(event)

      return {
        ...state,
        user: {
          ...state.user,
          userName: props.username
        }
      }
    }),
    on(loadUsers, (state:RootState) => {return {...state, loaded: false}}),
    on(loadUsersSuccess, (state:RootState, props) => {return {...state, users: props.users, loaded: true}}),
    on(loadUsersError, (state:RootState, props) => {return {...state, users: [], loaded: true, error: props.error}}),
  );

export const metaReducers : MetaReducer[] = [log];
