import {createAction, props} from "@ngrx/store";

export const addNumber = createAction('[Calculator] Add Number', props<{ number: string }>());
export const clear = createAction('[Calculator] Clear');
export const clearOne = createAction('[Calculator] Clear One');
export const sum = createAction('[Calculator] Add');
export const minus = createAction('[Calculator] Subtract');
export const multiply = createAction('[Calculator] Multiply');
export const divide = createAction('[Calculator] Divide');
export const percent = createAction('[Calculator] Percent');
export const calculate = createAction('[Calculator] Calculate');
