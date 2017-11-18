import React, { Component } from 'react';

import FeatureButton from './Buttons/FeatureButton';
import BugButton from './Buttons/BugButton';

export default class IssueTypeToggle extends Component {
  render() {
    return (
      <div className='type-toggle'>
        <BugButton />
        <FeatureButton />
      </div>
    );
  }
}
