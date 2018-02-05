import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import initialScreen from './app/config/routes';


const reactNavigationSample = props => {
    return <App navigation={props.navigation} />;
  };
  
reactNavigationSample.navigationOptions = {
    title: "Startup Screen"
  };


AppRegistry.registerComponent('CasObd2', () => initialScreen);
