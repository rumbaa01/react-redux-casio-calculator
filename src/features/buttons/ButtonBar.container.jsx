import { connect } from "react-redux";

import ButtonBar from './ButtonBar';

import * as buttonActions from '../redux';

  function mapDispatchToProps(dispatch) {
    return {
      dispatchActions: (type) =>
        dispatch(buttonActions.dispatchActions(type))
    }
  }
  
  export default connect(null, mapDispatchToProps)(ButtonBar);