// @flow

export const PLUS: string = '+';
export const MINUS: string = '-';
export const MULT: string = 'X';
export const DIVIDE: string = '÷';
export const SQRT: string = '√';
export const PERCENT: string = '%';
export const RESULT: string = '=';
export const PLUSMINUS: string= '+/-';
export const CLEAR: string = 'C';
export const ON: string = 'AC';
export const OFF: string = 'OFF';
export const DOT: string = '.';
export const MEMORY_CLR: string = 'MC';
export const MEMORY_RETURN: string = 'MR';
export const MEMORY_MINUS: string = 'M-';
export const MEMORY_PLUS: string = 'M+';
export const firstRow: string[] = [ SQRT, OFF ];
export const secondRow: string[] = [ MEMORY_CLR, MEMORY_RETURN, MEMORY_MINUS, MEMORY_PLUS, DIVIDE ];
export const thirdRow: string[] = [ PERCENT, '7', '8', '9', MULT ];
export const fourthRow: string[] = [PLUSMINUS,'4','5','6', MINUS];
export const fifthRow: string[] = [CLEAR, '1','2','3', PLUS];
export const sixRow: string[] = ['0', DOT, RESULT];
