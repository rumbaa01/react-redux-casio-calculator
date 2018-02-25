// @flow

import * as actionKeys from './actionKeys';
import * as buttonConstants from '../buttons';
import type { Action, ActionWithoutPayload} from './types';

export function dispatchActions(type: string): ActionWithoutPayload | Action<string> {
  switch(type) {
    case buttonConstants.CLEAR:
    return {
      type: actionKeys.CLEAR_DISPLAY
    }
  
    case buttonConstants.ON:
    return {
      type: actionKeys.SWITCH_ON
    }

    case buttonConstants.OFF:
    return {
      type: actionKeys.SWITCH_OFF
    }

    case buttonConstants.MEMORY_PLUS:
    return {
      type: actionKeys.ADD_MEMORY
    }

    case buttonConstants.MEMORY_MINUS:
    return {
      type: actionKeys.REDUCE_MEMORY
    }

    case buttonConstants.MEMORY_RETURN:
    return {
      type: actionKeys.GET_MEMORY
    }

    case buttonConstants.MEMORY_CLR:
    return {
      type: actionKeys.CLEAR_MEMORY
    }

    case buttonConstants.RESULT:
    return {
      type: actionKeys.SHOW_RESULT
    }

    case buttonConstants.SQRT:
    return {
      type: actionKeys.GET_SQRT
    }

    case buttonConstants.PERCENT:
    return {
      type: actionKeys.GET_PERCENTAGE
    }

    case buttonConstants.PLUSMINUS:
    return {
      type: actionKeys.PLUS_MINUS
    }

    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '0':
    case '.':
    return {
      type: actionKeys.TYPE_DIGIT,
      payload: type
    }
    case buttonConstants.DIVIDE:
    case buttonConstants.MULT:
    case buttonConstants.PLUS:
    case buttonConstants.MINUS:
    return {
      type: actionKeys.ADD_OPERATION,
      payload: type
    }
  } 
};