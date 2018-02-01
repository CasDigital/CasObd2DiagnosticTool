import React, { Component } from 'react';
import { 
    ActivityIndicator,
    AppRegistry, 
    ListView, 
    Text, 
    View, 
    StyleSheet,
    Image,
    TouchableOpacity,
     } from 'react-native';

//import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';
import ProgressCircle from 'react-native-progress-circle';

 //Making sure all that all the data is deployed to the screen. 
export default class  topSheet extends Component {
    /*static navigationOptions = {
        drawerLabel: 'Connection Screen',
      
      };
*/
    render() {
//need to figure out a way to postition the button
      return (
        <View style={{flex:1, backgroundColor: '#f3f3f3'}}>        
             <View style={[panelStyles.containerStyle,
                    {flexDirection: 'row', 
                    height: 300},
                    imageStyles.imagePosition,
                    panelStyles.color]}>

                    <ProgressCircle
                        percent={100}
                        radius={40}
                        borderWidth={8}
                        color="#fff"
                        shadowColor="#009688"
                        bgColor="#009688">
                        <Text style={{color: '#fff', fontSize: 20 }}>{'100%'}</Text>
                    </ProgressCircle>

                    <Text style={textStyles.headingfont}>CONNECTING</Text>
            </View>

            <View style={[{backgroundColor: '#f3f3f3'},
                    {flexDirection: 'row', 
                    height: 200},
                    imageStyles.imagePosition,
                    ]}>
            <View style={{
                  flex: 0.6,
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                  }}>
                    <Text style={[textStyles.footerfont, {textAlign:'left'}]}>WiFi Connection</Text>
                    <Text style={[textStyles.footerfont, {textAlign:'left'}]}>Panda Connection</Text>
                    <Text style={[textStyles.footerfont, {textAlign:'left'}]}>ECU Connection</Text>
            </View>
      
            </View>

            <ActionButton buttonColor={'rgba(231,76,60,1)'} title = "Continue" onPress={() => this.props.navigation.navigate('MainScreen')}>
     
             
            </ActionButton>

        </View>
      );
    }
  }

// <Icon name="md-create" style={actionButtonStyle.popActionButtonIcon}  />


//Ensure that all the styling for this is managed from the main application. 
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

//Make sure that all the main instaces are terminated on the inittial stages of the application. 
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
        fontSize: 20,
        color: 'black',
      },

    imagePosition: {
        
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
      },

      bottomImagePosition: {
        
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
      }

};
// style={[btnStyle, this.props.style]}
