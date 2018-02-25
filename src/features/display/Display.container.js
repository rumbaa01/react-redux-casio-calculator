// @flow

import { connect } from "react-redux";

import Display from './Display';
import type { Props } from './types';

function mapStateToProps({ isError, isNegative, isMemory, display, isSwitchedOn}): Props {
    return {
      isError,
      isNegative,
      isMemory,
      display,
      isSwitchedOn
    }
  }
  
  export default connect(mapStateToProps)(Display)