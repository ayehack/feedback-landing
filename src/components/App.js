import React, { Component } from 'react';

import Form from './Form/Form';

import SkipioLogo from '../img/logo-skipio.png';
import DeskDoorway from '../img/BackgroundImages/DeskDoorway.jpg';
import MillFront from '../img/BackgroundImages/MillFront.jpg';
import MillFrontDoor from '../img/BackgroundImages/MillFrontDoor.jpg';
import MillOutTheWindow from '../img/BackgroundImages/MillOutTheWindow.jpg';
import MillStaircase from '../img/BackgroundImages/MillStaircase.jpg';
import MillSunset1 from '../img/BackgroundImages/MillSunset1.jpg';
import BlurredBrick from '../img/BackgroundImages/BlurredBrick.jpg';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const backgroundImages = [
  DeskDoorway,
  MillFront,
  MillFrontDoor,
  MillOutTheWindow,
  MillStaircase,
  MillSunset1,
  BlurredBrick
];

export default class App extends Component {
  render() {
    const randomPictureIndex = Math.floor(Math.random() * ((6 - 0 + 1)) + 0);

    const background = {
      'backgroundImage': 'url(' + backgroundImages[randomPictureIndex] + ')'
    }

    return (
      <MuiThemeProvider>
        <div className='main-container' style={background}>
          <div className='logo-container'>
            <img className='skipio-logo' src={SkipioLogo} style={ { 'minWidth': '300px' } }/>
          </div>
          <Form />
        </div>
      </MuiThemeProvider>
    );
  }
}
