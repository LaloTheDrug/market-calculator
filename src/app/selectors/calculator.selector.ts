import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CalculatorState } from '../reducers/calculator.reducer';

export const selectCalculatorState = createFeatureSelector<CalculatorState>('calculator');

export const selectCurrentNumber = createSelector(
  selectCalculatorState,
  (state: CalculatorState) => state.currentNumber
);
