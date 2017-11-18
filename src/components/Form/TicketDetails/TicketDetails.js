import React, { Component } from 'react';
import { connect } from 'react-redux';

import InputFields from './details/InputFields';
import Platform from './details/Platform';

export class TicketDetails extends Component {
  render() {
    let inputFields = (this.props.BugButtonReducer.isBugFound || this.props.FeatureButtonReducer.isBulbOn) ? <InputFields /> : null;
    let platform = (this.props.BugButtonReducer.isBugFound || this.props.FeatureButtonReducer.isBulbOn) ? <Platform /> : null;

    return (
      <div className="ticket-details">
        {inputFields}
        {platform}
      </div>
    );
  }
}

function mapStateToProps({ BugButtonReducer, FeatureButtonReducer }){
  return { BugButtonReducer, FeatureButtonReducer };
}

export default connect(mapStateToProps)(TicketDetails);
