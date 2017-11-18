import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as constants from '../../constants.js';

// Child Components
import IssueTypeToggle from './IssueTypeToggle/IssueTypeToggle';
import TicketDetails from './TicketDetails/TicketDetails'
import SubmitButton from './SubmitButton';

export class Form extends Component {
  render() {
    let formHeight = (this.props.BugButtonReducer.isBugFound || this.props.FeatureButtonReducer.isBulbOn) ?
      constants.OPENED_FORM_HEIGHT :
      constants.CLOSED_FORM_HEIGHT;

    return (
      <div className='form-container' style={formHeight}>
        <IssueTypeToggle />
          <TicketDetails />
        <SubmitButton />
      </div>
    );
  }
}

function mapStateToProps({ BugButtonReducer, FeatureButtonReducer }){
  return { BugButtonReducer, FeatureButtonReducer };
}

export default connect(mapStateToProps)(Form);
