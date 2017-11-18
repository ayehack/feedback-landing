import * as constants from '../../../../constants.js';

const INITIAL_STATE = {
  isBugFound: false,
  bugStyle: constants.UNSELECTED_FONT_STYLE
}

export default function isBugFound(state = INITIAL_STATE, action) {
  switch(action.type) {
    case constants.BUG_FOUND:{
      return {
        ...state,
        isBugFound: true,
        bugStyle: action.payload.bugStyle
      }
    }
    case constants.BUG_NOT_FOUND:{
      return {
        ...state,
        isBugFound: false,
        bugStyle: action.payload.bugStyle
      }
    }
    default:
      return state;
  }
}
