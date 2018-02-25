import { connect } from "react-redux";

import ButtonBar from './ButtonBar';

import * as buttonActions from '../redux';

  function mapDispatchToProps(dispatch) {
    return {
      clearDisplay: () => dispatch(buttonActions.clearDisplay()),
      switchOn: () => dispatch(buttonActions.switchOn()),
      switchOff: () => dispatch(buttonActions.switchOff()),
      addMemory: () => dispatch(buttonActions.addMemory()),
      reduceMemory: () => dispatch(buttonActions.reduceMemory()),
      getMemory: () => dispatch(buttonActions.getMemory()),
      clearMemory: () => dispatch(buttonActions.clearMemory()),
      showResult: () => dispatch(buttonActions.showResult()),
      getSqrt: () => dispatch(buttonActions.getSqrt()),
      getPercentage: () => dispatch(buttonActions.getPercentage()),
      plusMinus: () => dispatch(buttonActions.plusMinus()),
      typeDigit: (digit) => dispatch(buttonActions.typeDigit(digit)),
      addOperation: (operation) => dispatch(buttonActions.addOperation(operation))
    }
  }
  
  export default connect(null, mapDispatchToProps)(ButtonBar);