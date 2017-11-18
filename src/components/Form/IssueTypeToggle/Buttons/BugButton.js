import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as action from '../../../../store/actions/action';

// Bug Magnifying Glass Images
import BugFound from '../../../../img/IssueTypeLogos/bug-found.png';
import BugNotFound from '../../../../img/IssueTypeLogos/bug-not-found.png';


class BugButton extends Component {
  BugOnClick() {
    if (this.props.FeatureButtonReducer.isBulbOn) {
      this.props.bugFound();
      this.props.bulbOff();
    } else {
      this.props.bugFound();
    }
  }


  render() {
    return (
      <div className='bug-type' onClick={ this.BugOnClick.bind(this) }>
        <img className='icons' src={ (this.props.BugButtonReducer.isBugFound) ? BugFound : BugNotFound } alt='bug'/>
          <h3 style={ this.props.BugButtonReducer.bugStyle }>BUG</h3>
      </div>
    );
  }
}

function mapStateToProps({ BugButtonReducer, FeatureButtonReducer }){
  return { BugButtonReducer, FeatureButtonReducer };
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(action, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BugButton);
