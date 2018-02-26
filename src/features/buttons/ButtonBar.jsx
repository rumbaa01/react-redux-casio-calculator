import React from 'react';

import * as constants from './constants';
import './ButtonBar.css';

class UpdateBar extends React.Component {

  createButton = (title, key) => {
    const { dispatchActions} = this.props;
    const buttonClassRed = (title === constants.ON ||  title === constants.CLEAR) && 'red';
    const buttonClassBig = title === constants.PLUS && 'big';
    return (
      <button className={`btn ${buttonClassRed} ${buttonClassBig}`}
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
          {this.renderRow(constants.fifthRow)}
        </div>
        <div className='row'>
          <div className='switchOn'>
            {this.createButton(constants.ON, constants.ON)}
            <div>on</div>
          </div>
          {this.renderRow(constants.sixRow)}
        </div>
      </div>
    )
  }
}
export default UpdateBar;
