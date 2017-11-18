import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import * as action from '../../../../store/actions/action';
import * as constants from '../../../../constants';

export class Platform extends Component {
  handleDropDownChange (event, index, value) {
    return (value === constants.DROPDOWN_OPTIONS['web'] || value === constants.DROPDOWN_OPTIONS['mobile']) ?
      this.props.platformSelected(value) :
      this.props.platformNotSelected(value);
  };

  render() {
    return (
      <div className="platform">
        <DropDownMenu
          value={ this.props.PlatformReducer.dropDownValue }
          autoWidth={ true }
          underlineStyle={ constants.UNDERLINE_STYLE }
          onChange={ this.handleDropDownChange.bind(this) }
        >
           <MenuItem value={constants.DROPDOWN_OPTIONS['unselected']} primaryText="PLATFORM" />
           <MenuItem value={constants.DROPDOWN_OPTIONS['web']} primaryText="Web-App" />
           <MenuItem value={constants.DROPDOWN_OPTIONS['mobile']} primaryText="Mobile" />
        </DropDownMenu>
      </div>
    );
  }
}

function mapStateToProps({ PlatformReducer }){
  return { PlatformReducer };
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(action, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Platform);
