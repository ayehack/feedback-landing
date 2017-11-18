import { createStore, combineReducers } from 'redux';

// IssueTypeToggle Reducers
import BugButtonReducer from './Form/IssueTypeToggle/BugButtonReducer';
import FeatureButtonReducer from './Form/IssueTypeToggle/FeatureButtonReducer';

// TicketDetails Reducers
import InputFieldsReducer from './Form/TicketDetails/InputFieldsReducer';
import PlatformReducer from './Form/TicketDetails/PlatformReducer';

export default combineReducers({
  BugButtonReducer,
  FeatureButtonReducer,
  InputFieldsReducer,
  PlatformReducer
});
