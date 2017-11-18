import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import RaisedButton from 'material-ui/RaisedButton';
import swal from 'sweetalert';

import * as constants from '../../constants';
import {prodpadApiKey} from '../../token.json';

export class SubmitButton extends Component {
  determineApi = () => { this.props.BugButtonReducer.isBugFound ? this.createNewBug() : this.createNewFeature() }

  createNewBug() {
    const newBug =
    {
      "fields": {
        "project": {
          "key": (this.props.PlatformReducer.dropDownValue === 2) ? constants.WEB_PRODUCT_NAME : constants.MOBILE_PRODUCT_NAME
        },
        "summary": this.props.InputFieldsReducer.titleFieldVal,
        "description": this.props.InputFieldsReducer.descriptionFieldVal,
        "issuetype": {
          "name": "Bug"
        }
      }
    }
    axios.post('//localhost:8080/issue/', newBug)
    .then(response => {
        console.log(response.data.message);
    }, error => {
        console.log(error.message);
    });
  }

  createNewFeature() {
    let newFeature = {
      "contact_id": constants.PRODPAD_CONTACT_ID,
      "feedback": this.props.InputFieldsReducer.titleFieldVal + " - " + this.props.InputFieldsReducer.descriptionFieldVal,
      "products": [
        {
          "name": (this.props.PlatformReducer.dropDownValue === 2) ? constants.WEB_PRODUCT_NAME : constants.MOBILE_PRODUCT_NAME
        }
      ]
    }
    axios.post(`https://api.prodpad.com/v1/feedbacks?apikey=${prodpadApiKey}`, newFeature)
    .then(response => {
      if (response.status === 201) {
        console.log("Submission Successful!");
      } else {
        console.log("Submission Failed ):");
      }
    });
  }

  submitFeedback() {
    if (this.props.InputFieldsReducer.titleFieldVal && this.props.InputFieldsReducer.descriptionFieldVal) {
      if (this.props.PlatformReducer.selected) {
        swal("Are you sure you're ready to submit?", {
          buttons: {
            cancel: {
              value: "cancel",
              closeModal: true,
              visible: true
            },
            Submit: true
          },
        })
        .then((value) => {
          switch(value) {
            case "cancel":
              console.log("Submission Cancelled.");
              break;

            default:
              this.determineApi();
              swal("Success!", "Thank you for your feedback.", "success");
              console.log('Submission Successful!');
              setTimeout(() => {window.location.reload()}, 2000);
          }
        });
      } else {
        swal("Hold on!", "Please select a platform before submitting your feedback.", "error");
      }
    } else {
      swal("Oops!", "Please fill out the form fields.", "error");
    }
  }

  render() {
    let isEnabled = !(this.props.BugButtonReducer.isBugFound || this.props.FeatureButtonReducer.isBulbOn);
    let buttonText = (this.props.BugButtonReducer.isBugFound || this.props.FeatureButtonReducer.isBulbOn) ?
      constants.ENABLED_BUTTON_TEXT :
      constants.DISABLED_BUTTON_TEXT;

    return (
      <div className="button-container">
        <RaisedButton
          onClick={this.submitFeedback.bind(this)}
          label={buttonText}
          disabled={isEnabled}
          labelColor={constants.BUTTON_TEXT_COLOR}
          backgroundColor={constants.BUTTON_COLOR}
        />
      </div>
    );
  }
}

function mapStateToProps({ BugButtonReducer, FeatureButtonReducer, PlatformReducer, InputFieldsReducer }){
  return { BugButtonReducer, FeatureButtonReducer, PlatformReducer, InputFieldsReducer };
}

export default connect(mapStateToProps)(SubmitButton);
