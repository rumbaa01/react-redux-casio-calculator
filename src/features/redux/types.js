
export type Action<T> = {
  type: string;
  payload: T;
}
export type ActionWithoutPayload = {
  type: string
}

export type InitDisplay = {
  isInitialDisplay: boolean,
  display: string,
  operation: string,
  cache: string,
  isError: boolean,
  isNegative: boolean
  };

export type ClearedMemory = {
  memory: number,
  isMemory: boolean
};

export type UpdatedDisplay = {
  cache: string;
  operation: string;
  isInitialDisplay: boolean;
  display: string;
  isError?: boolean;
  isNegative?: boolean;
}

export type AppState = {
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