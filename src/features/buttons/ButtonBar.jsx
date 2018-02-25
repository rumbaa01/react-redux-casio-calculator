import React from 'react';

import * as constants from './constants';
import './ButtonBar.css';

class UpdateBar extends React.Component {

  createButton(title, action, key) {
    return (
      // TODO Update with class adding
      <button className='btn'
              key={key}
              onClick={action}>
        {title}
      </button>
    )
  }
  renderRow(row) {
    const result = [];
    let index = 0;
    for (let [key, value] of row) {
      result.push(this.createButton(key, value, index++));
    }
    return result;
  }
  render() {
    const { 
      getSqrt,
      switchOff,
      switchOn,
      clearMemory,
      getMemory,
      reduceMemory,
      addMemory,
      addOperation,
      getPercentage,
      typeDigit,
      plusMinus,
      showResult,
      clearDisplay

     } = this.props;

    const firstRow = new Map([
      [[constants.SQRT], () => getSqrt()],
      [[constants.OFF], () => switchOff()]
    ]);

    const secondRow = new Map([
      [[constants.MEMORY_CLR], () => clearMemory()],
      [[constants.MEMORY_RETURN], () => getMemory()],
      [[constants.MEMORY_MINUS], () => reduceMemory()],
      [[constants.MEMORY_PLUS], () => addMemory()],
      [[constants.DIVIDE], () => addOperation(constants.DIVIDE)],
    ]);

    const thirdRow = new Map([
      [[constants.PERCENT], () => getPercentage()],
      ['7', () => typeDigit('7')],
      ['8', () => typeDigit('8')],
      ['9', () => typeDigit('9')],
      [[constants.MULT], () => addOperation(constants.MULT)],
    ]);

    const fourthRow = new Map([
      [[constants.PLUSMINUS], () => plusMinus()],
      ['4', () => typeDigit('4')],
      ['5', () => typeDigit('5')],
      ['6', () => typeDigit('6')],
      [[constants.MINUS], () => addOperation(constants.MINUS)],
    ]);

    const fifthRow = new Map([
      ['1', () => typeDigit('1')],
      ['2', () => typeDigit('2')],
      ['3', () => typeDigit('3')],
    ]);

    const sixRow = new Map([
      ['0', () => typeDigit('0')],
      [[constants.DOT], () => typeDigit(constants.DOT)],
      [[constants.RESULT], () => showResult()],
    ]);

    return (
      <div className='btn-bar'>
        <div className='row firstRow'>
          <div className='modelName'>
            SL-300SV
          </div>
          <div>
            {this.renderRow(firstRow)}
          </div>
        </div>
        <div className='row'>
          {this.renderRow(secondRow)}
        </div>
        <div className='row'>
          {this.renderRow(thirdRow)}
        </div>
        <div className='row'>
          {this.renderRow(fourthRow)}
        </div>
        <div className='row'>
          <button className='btn red'
                  onClick={() => clearDisplay()}>
            {constants.CLEAR}
          </button>
          {this.renderRow(fifthRow)}
          <button className='btn big'
                  onClick={() => addOperation(constants.PLUS)}>
            {constants.PLUS}
          </button>
        </div>
        <div className='row'>
          <div className='switchOn'>
            <button className='btn red'
                    onClick={() => switchOn()}>
              {constants.ON}
            </button>
            <div>on</div>
          </div>
          {this.renderRow(sixRow)}
        </div>
      </div>
    )
  }
}

export default UpdateBar;
