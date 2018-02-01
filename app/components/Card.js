
import React, { Component } from 'react';
import { 
    ActivityIndicator,
    AppRegistry, 
    Text, 
    View, 
    StyleSheet,
    TouchableOpacity,
     } from 'react-native';


//Create a generic card component that can be used across the app
export default class Card extends Component{


    render(){
        
        return(

        <TouchableOpacity 
         style={[panelStyles.containderStyle,
                 panelStyles.cardstyle,
                 panelStyles.color,
                 textStyles.textPosition ]}>  
                <Text style={[textStyles.cardNumber]}>{this.props.faultCount}</Text>
                <Text style={[textStyles.cardText]}>{this.props.systemName}</Text>
        </TouchableOpacity>

        );
    };

}

//Generic card styles
const panelStyles = {
    color: {
            backgroundColor: '#ffffff'
       },
   
   containerStyle: {

       shadowColor: '#A9A9A9',
       shadowOffset: { width: 1, height: 2 },
       shadowOpacity: 0,
       shadowRadius: 1.5,
       elevation: 10,

     },
   
   cardstyle:{
       height: 150,
       width: 150,
       marginTop: 15, 
       marginLeft: 15, 
       marginBottom: 15, 
       marginRight:15
   }
   
   };
   

//Generic text styles
const textStyles = {
    
    headingfont: {
        fontSize: 30,
        color: 'white',
      },

    subheadingfont: {
        fontSize: 20,
        color: 'white',
      },

    
    cardNumber: {
        fontSize: 80,
        color: 'black',
      },
       
    cardText: {
        fontSize: 15,
        color: 'grey',
      },
    

    textPosition: {
        
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
      },

      bottomImagePosition: {
        
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
      },

      bottomPanelPosition: {
        flexDirection: 'column',
        justifyContent: 'bottom',
        alignItems: 'center'
      }

};