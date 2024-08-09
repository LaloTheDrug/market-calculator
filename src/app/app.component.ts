import { Component } from '@angular/core';
import {AsyncPipe} from "@angular/common";
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { State } from '../app/reducers';
import * as CalculatorActions from '../app/Action/calculator.action';
import { selectCurrentNumber } from '../app/selectors/calculator.selector';
import {operate} from "rxjs/internal/util/lift";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngrx';
  //
  // count$ !: Observable<number>
  // constructor(private store: Store<{ count: number }>) {
  //   this.count$ = store.select('count');
  // }
  // increment() {
  //   this.store.dispatch(increment())
  // }
  // decrement() {
  //   this.store.dispatch(decrement())
  // }
  // reset() {
  //   this.store.dispatch(reset())
  // }

  currentNumber$: Observable<string>;

  constructor(private store: Store<State>) {
    this.currentNumber$ = store.select(selectCurrentNumber)
  }

  addNumber(number: string) {
    this.store.dispatch(CalculatorActions.addNumber({ number }));
  }

  clear() {
    this.store.dispatch(CalculatorActions.clear());
  }

  // clear one number
  clearOne() {
    this.store.dispatch(CalculatorActions.clearOne());
  }

  add() {
    this.store.dispatch(CalculatorActions.sum());
  }

  subtract() {
    this.store.dispatch(CalculatorActions.minus());
  }

  multiply() {
    this.store.dispatch(CalculatorActions.multiply());
  }

  divide() {
    this.store.dispatch(CalculatorActions.divide());
  }

  percent() {
    this.store.dispatch(CalculatorActions.percent());
  }

  calculate() {
    this.store.dispatch(CalculatorActions.calculate());
  }

  protected readonly operate = operate;
}
