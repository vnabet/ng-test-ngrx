
import {Action, ActionReducer, createReducer, MetaReducer, on} from '@ngrx/store';
// import { changeUsername, initAction } from './01-actions';
import { RootActions } from './01-actions';
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
}

const initialState:RootState = {
  appName: 'NgRx',
  user: {
    userName: '',
    isAdmin: false
  }
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
    }));

export const metaReducers : MetaReducer[] = [log];
