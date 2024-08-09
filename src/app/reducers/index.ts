import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import {calculatorReducer} from "./calculator.reducer";
export interface State {

}

export const reducers: ActionReducerMap<State> = {
  count: counterReducer,
  calculator: calculatorReducer
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
