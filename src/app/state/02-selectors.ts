import {  createFeatureSelector, createSelector } from "@ngrx/store";
import { RootState, State, features } from "./00-reducter";


// const selectRoot = (state:State) => state.root;
const selectRoot = createFeatureSelector<RootState>(features.ROOT_FEATURE_KEY);

export const getUser = createSelector(selectRoot, (state:RootState) => state.user)

export const getUsers = createSelector(selectRoot, (state:RootState) => state.users);
export const getIsLoaded = createSelector(selectRoot, (state:RootState) => state.loaded);
export const getError = createSelector(selectRoot, (state:RootState) => state.error);


