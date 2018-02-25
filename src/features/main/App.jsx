// @flow
import React, { PureComponent } from 'react';
import { Display } from '../display';
import { ButtonBar } from '../buttons';
import './App.css';

export default class App extends PureComponent<void, void> {
  render(){
    return (
      <div className='calculator'>
        <div className='header'>
          <div className='title'>Casio</div>
          <div className='solarWrapper'>
            <div className='solar'/>
            <div className='solarText'>two way power</div>
          </div>
        </div>
        <Display/>
        <ButtonBar/>
      </div>
  )
  }
}
