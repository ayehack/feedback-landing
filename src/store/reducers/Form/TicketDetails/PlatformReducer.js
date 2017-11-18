import * as constants from '../../../../constants.js';

const INITIAL_STATE = { selected: false, dropDownValue: 1 };

export default function isPlatformSelected(state = INITIAL_STATE, action) {
  switch(action.type) {
    case constants.PLATFORM_SELECTED: {
      return {
        ...state,
        selected: true,
        dropDownValue: action.payload.dropDownValue
      }
    }
    case constants.PLATFORM_NOT_SELECTED: {
      return {
        ...state,
        selected: false,
        dropDownValue: action.payload.dropDownValue
      }
    }
    default:
      return state;
  }
}
