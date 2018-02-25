// @flow
import * as actionKeys from './actionKeys';
import type { Action, ActionWithoutPayload} from './types';

export function clearDisplay(): ActionWithoutPayload {
  return {
    type: actionKeys.CLEAR_DISPLAY
  }
}

export function switchOn(): ActionWithoutPayload {
  return {
    type: actionKeys.SWITCH_ON
  }
}

export function switchOff(): ActionWithoutPayload {
  return {
    type: actionKeys.SWITCH_OFF
  }
}

export function addMemory(): ActionWithoutPayload {
  return {
    type: actionKeys.ADD_MEMORY
  }
}

export function reduceMemory(): ActionWithoutPayload {
  return {
    type: actionKeys.REDUCE_MEMORY
  }
}

export function getMemory(): ActionWithoutPayload {
  return {
    type: actionKeys.GET_MEMORY
  }
}

export function clearMemory(): ActionWithoutPayload {
  return {
    type: actionKeys.CLEAR_MEMORY
  }
}

export function showResult(): ActionWithoutPayload {
  return {
    type: actionKeys.SHOW_RESULT
  }
}

export function getSqrt(): ActionWithoutPayload {
  return {
    type: actionKeys.GET_SQRT
  }
}

export function getPercentage(): ActionWithoutPayload {
  return {
    type: actionKeys.GET_PERCENTAGE
  }
}

export function plusMinus(): ActionWithoutPayload {
  return {
    type: actionKeys.PLUS_MINUS
  }
}

export function typeDigit(digit: string): Action<string> {
  return {
    type: actionKeys.TYPE_DIGIT,
    payload: digit
  }
}

export function addOperation(operation: string): Action<string> {
  return {
    type: actionKeys.ADD_OPERATION,
    payload: operation
  }
}