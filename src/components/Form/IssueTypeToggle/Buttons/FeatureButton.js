import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as action from '../../../../store/actions/action';

// Feature Bulb Images
import BulbOn from '../../../../img/IssueTypeLogos/bulb-on.png';
import BulbOff from '../../../../img/IssueTypeLogos/bulb-off.png';


class FeatureButton extends Component {
  FeatureOnClick() {
    if (this.props.BugButtonReducer.isBugFound) {
      this.props.bulbOn();
      this.props.bugNotFound();
    } else {
      this.props.bulbOn();
    }
  }


  render() {
    return (
      <div className='feature-type' onClick={ this.FeatureOnClick.bind(this) }>
        <img className='icons' src={ (this.props.FeatureButtonReducer.isBulbOn) ? BulbOn : BulbOff } alt='bulb'/>
          <h3 style={ this.props.FeatureButtonReducer.featureStyle }>FEATURE</h3>
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

export default connect(mapStateToProps, mapDispatchToProps)(FeatureButton);
