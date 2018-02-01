import React, { Component } from 'react';
import { 
    ActivityIndicator,
    AppRegistry, 
    ListView, 
    Text, 
    View, 
    StyleSheet,
    Image,
    TouchableOpacity
     } from 'react-native';

//import myNavigator from '../config/routes';

import ActionButton from 'react-native-action-button';

 //Making sure all that all the data is deployed to the screen. 
export default class  StartUpScreen extends Component {

    render() {
//need to figure out a way to postition the button
    const {navigate} = this.props.navigation;

      return (
        <View style={{flex:1, backgroundColor: '#f3f3f3'}}>        
             <View style={[panelStyles.containerStyle,
                    {flexDirection: 'row', 
                    height: 300},
                    imageStyles.imagePosition,
                    panelStyles.color]}>
          
                <Image  source={require('./app_logo.png')} 
                  style = {[imageStyles.imageSize]} />
                  <Text style={textStyles.headingfont}>CAS DIAGNOSTIC</Text>
            </View>

            <View style={[{backgroundColor: '#f3f3f3'},
                    {flexDirection: 'row', 
                    height: 300},
                    imageStyles.imagePosition,
                    ]}>
                        
            </View>


        <ActionButton buttonColor={'rgba(231,76,60,1)'}>
     
            <ActionButton.Item buttonColor='grey' title="Connect" onPress={() => this.props.navigation.navigate('ConnectionScreen')}>
                <Image  source={require('./online.png')} style = {[imageStyles.inconImageSize]}/>
            </ActionButton.Item>

        </ActionButton>

        </View>
      );
    }
  }


//Styling for topsheet
const panelStyles = {
 color: {
         backgroundColor: '#009688'
    },

 flex: {
        flexDirection: 'row',
        flex: 1,
        height: 300
   },

containerStyle: {
    borderWidth:0,
    borderRadius: 0,
    borderBottomWidth: 0,
    shadowColor: '#A9A9A9',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 10,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
  },
};

//Styling for images
const imageStyles = {

    imageSize: {
        width: 70,
        height: 70,
    },
    
    inconImageSize: {
        width: 25,
        height: 25,
    },

    imagePosition: {
      
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }




};

//Styling for images
const actionButtonStyle = {
    
    actionButtonIcon: {
        buttonColor: 'rgba(231,76,60,1)',
      },
    popActionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
      },
    
};
    
//Styling for images
const textStyles = {
    
    headingfont: {
        fontSize: 20,
        color: 'white',
      },
    
    footerfont: {
        fontSize: 30,
        color: 'black',
      },

};
// style={[btnStyle, this.props.style]}
