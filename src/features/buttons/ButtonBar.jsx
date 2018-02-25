import React from 'react';

import * as constants from './constants';
import './ButtonBar.css';

class UpdateBar extends React.Component {

  createButton = (title, key) => {
    const { dispatchActions} = this.props;
    return (
      // TODO Update with class adding
      <button className='btn'
              key={key}
              onClick={() => dispatchActions(title)}>
        {title}
      </button>
    )
  }
  renderRow = (row) =>  {
    return row.map(this.createButton);
  }
  render() {
    const { dispatchActions } = this.props;
    return (
      <div className='btn-bar'>
        <div className='row firstRow'>
          <div className='modelName'>
            SL-300SV
          </div>
          <div>
            {this.renderRow(constants.firstRow)}
          </div>
        </div>
        <div className='row'>
          {this.renderRow(constants.secondRow)}
        </div>
        <div className='row'>
          {this.renderRow(constants.thirdRow)}
        </div>
        <div className='row'>
          {this.renderRow(constants.fourthRow)}
        </div>
        <div className='row'>
          <button className='btn red'
                  onClick={() => dispatchActions(constants.CLEAR)}>
            {constants.CLEAR}
          </button>
          {this.renderRow(constants.fifthRow)}
          <button className='btn big'
                  onClick={() => dispatchActions(constants.PLUS)}>
            {constants.PLUS}
          </button>
        </div>
        <div className='row'>
          <div className='switchOn'>
            <button className='btn red'
                    onClick={() => dispatchActions(constants.ON)}>
              {constants.ON}
            </button>
            <div>on</div>
          </div>
          {this.renderRow(constants.sixRow)}
        </div>
      </div>
    )
  }
}
export default UpdateBar;
