import * as constants from '../../constants.js';

// IssueTypeToggle
export function bugFound() {
  return {
    type: constants.BUG_FOUND,
    payload: {
      bugStyle: constants.SELECTED_FONT_STYLE,
      descriptionFieldVal: constants.BUG_DESCRIPTION_HELP_TEXT
    }
  };
}

export function bugNotFound() {
  return {
    type: constants.BUG_NOT_FOUND,
    payload: {
      bugStyle: constants.UNSELECTED_FONT_STYLE
    }
  };
}

export function bulbOn() {
  return {
    type: constants.BULB_ON,
    payload: {
      featureStyle: constants.SELECTED_FONT_STYLE,
      descriptionFieldVal: constants.FEATURE_DESCRIPTION_HELP_TEXT
    }
  };
}

export function bulbOff() {
  return {
    type: constants.BULB_OFF,
    payload: {
      featureStyle: constants.UNSELECTED_FONT_STYLE
    }
  };
}

// TicketDetails
export function titleFieldChanged(userInput) {
  return {
    type: constants.TITLE_FIELD_CHANGE,
    payload: {
      titleFieldVal: userInput
    }
  };
}

export function descriptionFieldChanged(userInput) {
  return {
    type: constants.DESCRIPTION_FIELD_CHANGE,
    payload: {
      descriptionFieldVal: userInput
    }
  };
}

export function platformSelected(userSelection) {
  return {
    type: constants.PLATFORM_SELECTED,
    payload: {
      dropDownValue: userSelection
    }
  }
}

export function platformNotSelected(userSelection) {
  return {
    type: constants.PLATFORM_NOT_SELECTED,
    payload: {
      dropDownValue: userSelection
    }
  }
}
