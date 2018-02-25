// @flow

import React from 'react';

import './Display.css'
import { Props } from './types';

class Display extends React.PureComponent<Props> {
  render() {
    const {isMemory, isError, isNegative, isSwitchedOn, display} = this.props;
    const error = isError && <span className='error displayItem'>E</span>;
    const negative = isNegative && <span className='minus displayItem'>-</span>;
    const memory = isMemory && <span className='memory displayItem'>M</span>;

    const generalDisplay = isSwitchedOn
      ? (<div>{memory}{negative}{error}{display}</div>)
      : '';
    return (
      <div className='wrapper'>
        <div className='display'>
          {generalDisplay}
        </div>
      </div>
    )
  }
}

export default Display;
