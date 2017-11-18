import * as constants from '../../../../constants.js';

const INITIAL_STATE = {
  titleFieldVal: "",
  descriptionFieldVal: ""
};

export default function inputFieldsChange(state = INITIAL_STATE, action) {
  switch(action.type) {
    case constants.TITLE_FIELD_CHANGE: {
      return {
        ...state,
        titleFieldVal: action.payload.titleFieldVal
      }
    }
    case constants.DESCRIPTION_FIELD_CHANGE: {
      return {
        ...state,
        descriptionFieldVal: action.payload.descriptionFieldVal
      }
    }
    case constants.BUG_FOUND: {
      return {
        ...state,
        descriptionFieldVal: action.payload.descriptionFieldVal
      }
    }
    case constants.BULB_ON: {
      return {
        ...state,
        descriptionFieldVal: action.payload.descriptionFieldVal
      }
    }
    default:
      return state;
  }
}
