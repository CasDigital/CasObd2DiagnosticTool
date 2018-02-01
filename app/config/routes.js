import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation'
import startUpScreen from '../screens/startUpScreen'
import mainScreen from '../screens/mainScreen'
import connectionScreen from  '../screens/connectionScreen'



//need to create the stack navigator to be added on the drawer navigator. 


//This code is for implementation on apple devices
/* 
export default myNavigator = StackNavigator({
   
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
        drawerLabel: 'ConnectionScreen',
      },
    },
    
    MainScreen: {
        screen: mainScreen,

   
        navigationOptions: {
          drawerLabel: 'MainScreen',
        },
      },


  }); */

//This code is for implementation on Android devices
export default myNavigator = StackNavigator(
    {
    startUpScreen: { screen: startUpScreen},

    ConnectionScreen: {screen: connectionScreen},
    
    MainScreen: {screen: mainScreen}

    },
    {
          headerMode: 'none',
          mode: 'modal',
          navigationOptions: {
           gesturesEnabled: false,
             },
             
    });

//Only one drawer navigation is needed per application
  