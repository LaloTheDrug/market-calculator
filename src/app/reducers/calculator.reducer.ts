import { Action, createReducer, on} from '@ngrx/store';
import * as CalculatorActions from '../Action/calculator.action';

export interface CalculatorState {
  currentNumber: string;
  firstOperand: number | null;
  operator: string | null;
  waitForSecondNumber: boolean;
}

export const initialState: CalculatorState = {
  currentNumber: '0',
  firstOperand: null,
  operator: null,
  waitForSecondNumber: false,
};

const _calculatorReducer = createReducer(
  initialState,

  on(CalculatorActions.addNumber, (state, {number}) => ({
    ...state,
    currentNumber: state.waitForSecondNumber ? number : (state.currentNumber === '0' ? number : state.currentNumber + number),
    waitForSecondNumber: false,
  })),
  on(CalculatorActions.sum, (state) => ({
    ...state,
    operator: '+',
    firstOperand: parseFloat(state.currentNumber),
    waitForSecondNumber: true,
  })),
  on(CalculatorActions.minus, (state) => ({
    ...state,
    operator: '-',
    firstOperand: parseFloat(state.currentNumber),
    waitForSecondNumber: true,
  })),
  on(CalculatorActions.multiply, (state) => ({
    ...state,
    operator: '*',
    firstOperand: parseFloat(state.currentNumber),
    waitForSecondNumber: true,
  })),
  on(CalculatorActions.divide, (state) => ({
    ...state,
    operator: '/',
    firstOperand: parseFloat(state.currentNumber),
    waitForSecondNumber: true,
  })),
  on(CalculatorActions.percent, (state) => ({
    ...state,
    currentNumber: (parseFloat(state.currentNumber) / 100).toString(),
  })),
  on(CalculatorActions.calculate, (state) => {
    if (state.firstOperand !== null && state.operator) {
      const secondOperand = parseFloat(state.currentNumber);
      let result: number;
      switch (state.operator) {
        case '+':
          result = state.firstOperand + secondOperand;
          break;
        case '-':
          result = state.firstOperand - secondOperand;
          break;
        case '*':
          result = state.firstOperand * secondOperand;
          break;
        case '/':
          result = state.firstOperand / secondOperand;
          break;
        default:
          return state;
      }

      return {
        ...state,
        currentNumber: result.toString(),
        firstOperand: null,
        operator: null,
        waitForSecondNumber: false,
      };
    }
    return state;
  }),

  on(CalculatorActions.clear, () => initialState),

  on(CalculatorActions.clearOne, (state) => ({
    ...state,
    currentNumber: state.currentNumber.length === 1 ? '0' : state.currentNumber.slice(0, -1) || '0',
  }))
);
export function calculatorReducer(state: CalculatorState | undefined, action: Action<string>) {
  return _calculatorReducer(state, action);
}
