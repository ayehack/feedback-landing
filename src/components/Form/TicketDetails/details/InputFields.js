import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TextField from 'material-ui/TextField';

import * as action from '../../../../store/actions/action';
import * as constant from '../../../../constants';

export class InputFields extends Component {
  render() {
    return (
      <div className="input-fields">
        <TextField
          onChange={ (event) => { this.props.titleFieldChanged(event.target.value) } }
          floatingLabelFixed={true}
          floatingLabelText={
            this.props.BugButtonReducer.isBugFound ?
              constant.BUG_NAME_FIELD_TITLE :
              constant.FEATURE_NAME_FIELD_TITLE
          }
          hintText={
            this.props.BugButtonReducer.isBugFound ?
              constant.BUG_TITLE_HINT_TEXT :
              constant.FEATURE_TITLE_HINT_TEXT
          }
          floatingLabelStyle={ constant.FLOATING_LABEL_STYLE }
          hintStyle={ constant.HINT_STYLE }
          underlineStyle = { constant.UNDERLINE_STYLE }
          underlineFocusStyle = { constant.UNDERLINE_FOCUS_STYLE }
          style = { constant.TITLE_FIELD_STYLE }
        />
        <TextField
          floatingLabelText={
            this.props.BugButtonReducer.isBugFound ?
              constant.BUG_DESCRIPTION_FIELD_TITLE :
              constant.FEATURE_DESCRIPTION_FIELD_TITLE
          }
          value={this.props.InputFieldsReducer.descriptionFieldVal}
          onChange={ (event) => { this.props.descriptionFieldChanged(event.target.value) } }
          multiLine={true}
          rows={ constant.MIN_FIELD_SIZE }
          rowsMax={ constant.MAX_FIELD_SIZE }
          floatingLabelStyle={ constant.FLOATING_LABEL_STYLE }
          underlineStyle = { constant.UNDERLINE_STYLE }
          underlineFocusStyle = { constant.UNDERLINE_FOCUS_STYLE }
          style = { constant.DESCRIPTION_FIELD_STYLE }
        />
      </div>
    );
  }
}

function mapStateToProps({ BugButtonReducer, FeatureButtonReducer, InputFieldsReducer }){
  return { BugButtonReducer, FeatureButtonReducer, InputFieldsReducer };
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(action, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(InputFields);
