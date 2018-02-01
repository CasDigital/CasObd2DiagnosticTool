import React, {Component} from 'react';

import { StyleSheet, 
        AppRegistry, 
        Text, 
        View, 
        Button } from 'react-native';

import { StackNavigator } from 'react-navigation';
import { DrawerNavigator } from "react-navigation";
//import {MainScreenNavigator} from './tabNavigator'


class MyHomeScreen extends Component {
    static navigationOptions = {
      drawerLabel: 'Home',
    
    };
  
    render() {
      return (
        <Button
          onPress={() => this.props.navigation.navigate('Notifications')}
          title="Go to notifications"
        />
      );
    }
  }

  class MyNotificationsScreen extends Component {
    static navigationOptions = {
      drawerLabel: 'Notifications',
    
    };
  
    render() {
      return (
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      );
    }
  }

  //Create the drawernavigator
  const MyApp = StackNavigator({
    Home: {
      screen: MyHomeScreen,
    },
    Notifications: {
      screen: MyNotificationsScreen,
    },
    Main: {
        screen: MainScreenNavigator,
      },

    Connection: {
        screen: MainScreenNavigator,
      },

    Faults: {
        screen: MainScreenNavigator,
      },


  });

export default class App extends Component {
  render() {
    return <MyApp />;
  }
}

const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
  });

