import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation'
import startUpScreen from '../screens/startUpScreen'
import mainScreen from '../screens/mainScreen'
import connectionScreen from  '../screens/connectionScreen'
import mainscreen from '../screens/mainScreen';



//need to create the stack navigator to be added on the drawer navigator. 


//Ensure that all the navigation routes are structured to be reconfigurable 
export default myNavigator = DrawerNavigator({
   
    startUpScreen: {
      screen: startUpScreen,

      navigationOptions: {
      
        initialRoute: true,        
        drawerLabel: 'StartUpScreen',
        Icon: "home"
  
      },

    },

    ConnectionScreen: {
      screen: connectionScreen,

      navigationOptions: {
        drawerLabel: 'Connection Screen',
      },
    },
    
    MainScreen: {
        screen: mainscreen,

        navigationOptions: {
          drawerLabel: 'Main Screen',
        },
      },

  });

//Only one drawer navigation is needed per application
  