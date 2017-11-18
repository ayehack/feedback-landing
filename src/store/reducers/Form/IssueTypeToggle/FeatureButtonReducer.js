import * as constants from '../../../../constants.js';

const INITIAL_STATE = {
  isBulbOn: false,
  featureStyle: constants.UNSELECTED_FONT_STYLE
};

export default function isBulbOn(state = INITIAL_STATE, action) {
  switch(action.type){
    case constants.BULB_ON: {
      return {
        ...state,
        isBulbOn: true,
        featureStyle: action.payload.featureStyle
      }
    }
    case constants.BULB_OFF: {
      return {
        ...state,
        isBulbOn: false,
        featureStyle: action.payload.featureStyle
      }
    }
    default:
    return state;
  }
}
