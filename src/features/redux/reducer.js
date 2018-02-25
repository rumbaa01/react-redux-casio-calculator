// @flow

import { calcOperation, handleNegative, createReducer, updateDispaly} from './utils';
import * as actionKeys from './actionKeys';
import { DOT, SQRT} from '../buttons';
import { MAX_DIGITS } from './constants';
import type { 
  Action,
  ActionWithoutPayload, 
  UpdatedDisplay, 
  ClearedMemory, 
  InitDisplay
  } from './types';

type AppState = {
  display: string,
  operation: string,
  isError: boolean,
  isSwitchedOn: boolean,
  isNegative: boolean,
  isMemory: boolean,
  cache: string,
  memory: number,
  isInitialDisplay: boolean
};
export const initialState: AppState= {
  display: '0',
  operation: '',
  isError: false,
  isSwitchedOn: true,
  isNegative: false,
  isMemory: false,
  cache: '',
  memory: 0,
  isInitialDisplay: true,
};

const initDisplay: InitDisplay = {
  isInitialDisplay: true,
  display: '0',
  operation: '',
  cache: '',
  isError: false,
  isNegative: false
};

const clearedMemory: ClearedMemory = {
  memory: 0,
  isMemory: false
};

export default createReducer(initialState, {
  [actionKeys.CLEAR_DISPLAY] (state: AppState, action: ActionWithoutPayload): AppState {
    return {
      ...state,
      ...initDisplay
    };
  },
  [actionKeys.SWITCH_ON] (state: AppState, action: ActionWithoutPayload): AppState {
    return {
      ...state,
      ...initDisplay,
      ...clearedMemory,
      isSwitchedOn: true
    };
  },
  [actionKeys.SWITCH_OFF] (state: AppState, action: ActionWithoutPayload): AppState {
    return {
      ...state,
      isSwitchedOn: false
    };
  },
  [actionKeys.ADD_MEMORY] (state: AppState, action: ActionWithoutPayload): AppState {
    let _isMemory: boolean = state.isMemory;
    if (!_isMemory) {
      _isMemory = true;
    } 
    let _memory = state.memory + Number(handleNegative(state.display, state.isNegative));
    return {
      ...state,
      isMemory: _isMemory,
      memory: _memory
    };
  },
  [actionKeys.REDUCE_MEMORY] (state: AppState, action: ActionWithoutPayload): AppState {
    let _isMemory: boolean = state.isMemory;
    if (!_isMemory) {
      _isMemory = true;
    } 
    const _memory = state.memory - Number(handleNegative(state.display, state.isNegative));
    return {
      ...state,
      isMemory: _isMemory,
      memory: _memory
    };
  },
  [actionKeys.GET_MEMORY] (state: AppState, action: ActionWithoutPayload): AppState {
    if (!state.isMemory) {
      return { ...state} ;
    } 
    const { memory } = state;
    const updatedDispaly: UpdatedDisplay = updateDispaly(Number(memory));
    return {
      ...state,
      ...updatedDispaly
    }
  },
  [actionKeys.CLEAR_MEMORY] (state: AppState, action: ActionWithoutPayload): AppState {
    return {
      ...state,
      isMemory: false,
      memory: 0
    };
  },
  [actionKeys.TYPE_DIGIT] (state: AppState, action: Action<string>): AppState {
    const digit: string = action.payload;
    const isOverRange: boolean = state.display.length === MAX_DIGITS;
    const isDuplicateZero: boolean = digit === '0' && state.display === '0';
    const isDuplicateDot: boolean = digit === DOT && state.display.includes(DOT);
    if (
      !state.isSwitchedOn || (isOverRange && !state.isInitialDisplay) ||
      isDuplicateDot || isDuplicateZero
    ) {
      return {...state};
    }
    if (state.isInitialDisplay) {
      return {...state, 
        isError: false,
        isNegative: false,
        isInitialDisplay: false,
        display: digit === DOT ? '0.' : digit
      };
    }
    const display: string = state.display + digit;
    return {
      ...state,
      display
    };
  },
  [actionKeys.ADD_OPERATION] (state: AppState, action: Action<string>): AppState {
    if (!state.isSwitchedOn) {
      return {...state};
    }
    const cache: string = handleNegative(state.display, state.isNegative);
    return {
      ...state,
      operation: action.payload,
      isInitialDisplay: true,
      cache
    };
  },
  [actionKeys.SHOW_RESULT] (state: AppState, action: ActionWithoutPayload): AppState {
    const second: number = Number(handleNegative(state.display, state.isNegative));
    const result: string = calcOperation(Number(state.cache), second, state.operation);
    const updatedDispaly: UpdatedDisplay = updateDispaly(Number(result));
    return {
      ...state,
      ...updatedDispaly
    };
  },
  [actionKeys.GET_SQRT] (state: AppState, action: ActionWithoutPayload): AppState {
    const second: number = Number(handleNegative(state.display, state.isNegative));
    const result: string = calcOperation(Number(state.cache), second, SQRT);
    const updatedDispaly: UpdatedDisplay = updateDispaly(Number(result));
    return {
      ...state,
      ...updatedDispaly
    };
  },
  [actionKeys.GET_PERCENTAGE] (state: AppState, action: ActionWithoutPayload): AppState {
    if (!state.cache) {
      return {...state};
    }
    const first: number = Number(state.cache);
    const second: number = Number(handleNegative(state.display, state.isNegative));
    const percent = first * (second / 100);
    // const result: string = calcOperation(first, percent, state.operation);
    let updatedDispaly: UpdatedDisplay = updateDispaly(Number(percent));
    return {
      ...state,
      ...updatedDispaly
    };
  },
  [actionKeys.PLUS_MINUS] (state: AppState, action: ActionWithoutPayload): AppState {
    return {
      ...state,
      isNegative: !state.isNegative
    };
  },
});