// @flow

import { DIVIDE, MINUS, MULT, PLUS, SQRT } from '../buttons';
import { UpdatedDisplay, ActionWithoutPayload, Action, AppState} from './types'; 
import { MAX_DIGITS } from './constants';

type MixedAction = Action<string> | ActionWithoutPayload;

export function createReducer(initialState: AppState, handlers: Object) {
  return function reducer(state: AppState = initialState, action: MixedAction): AppState {
    return handlers.hasOwnProperty(action.type)
      ? handlers[action.type](state, action)
      : state;
  };
}

export function isNumeric(n: number | string): boolean {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

export function calcOperation(first: number, second: number, operation: string): string {
  if (!isNumeric(first) || !isNumeric(second)) {
    return '0';
  }
  let result: number | string = '0';
  if (operation === PLUS) {
    result = first + second;
  }
  if (operation === MINUS) {
    result = first - second;
  }
  if (operation === MULT) {
    result = first * second;
  }
  if (operation === DIVIDE) {
    result = first / second;
  }
  if (operation === SQRT) {
    result = Math.sqrt(second);
  }
  return result.toString();
}

export function handleNegative(value: string, isNegative: boolean): string {
  return isNegative ? `-${value}` : value
}

export function updateDispaly(value: number): UpdatedDisplay {
    let result = value.toString();
    let updatedDisplay: UpdatedDisplay = {
      cache: '',
      operation: '',
      isInitialDisplay: true,
      display: result
    }
      if (!isNumeric(value)) {
        updatedDisplay.isError = true;
        updatedDisplay.display = '0';
      }
      if (value >= 0) {
        updatedDisplay.isNegative = false;
      }
      if (value < 0) {
        updatedDisplay.isNegative = true;
        updatedDisplay.display = Math.abs(value).toString();
      }
      if (result.length > MAX_DIGITS) {
        // updatedDisplay.isError = true;
        // TODO: Update with dot
        updatedDisplay.display = result.slice(0, 8)
      }
    return updatedDisplay;
  }