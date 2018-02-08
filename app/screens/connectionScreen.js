import React, { Component } from 'react';
import { 
    ActivityIndicator,
    AppRegistry, 
    ListView, 
    Text, 
    Button,
    View, 
    StyleSheet,
    Image,
    TouchableOpacity,
     } from 'react-native';

//import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';
import ProgressCircle from 'react-native-progress-circle';
import TimerMixin from 'react-timer-mixin';


//import connection library
import wifi from 'react-native-android-wifi';
import { Socket } from 'react-native-tcp';

//defining public variables
var net = require('react-native-tcp')
var HOST = '192.168.0.10';
var PORT = 35000;
var client = new net.Socket();
var mydata = '';
var lock = false;
 //Making sure all that all the data is deployed to the screen. 
export default class  Connection extends Component {
  
    constructor(props) {
        super(props);

        this.state = {
          wifiStatus: '-',
          ecuStatus:'-',
          pandaStatus: '_',
          obd2Data :'-'
        };

        this.connectToWifi = this.connectToWifi.bind(this);
        this.openSocket = this.openSocket.bind(this);

   

        
      }

      

     //establish connection to wifi
    connectToWifi(){
        wifi.findAndConnect("panda-e3a418776fbdf8cb", "jWslKTRRR6", (found) => {
            if (found) {
              console.log("in-range");
            } else {
              console.log("off-range");
            }
          });
    }


     //create a new TCP Socket to retrieve a 
    openSocket(){

            client.connect(PORT, HOST, function() {
            
                console.log('CONNECTED TO: ' + HOST + ':' + PORT);
                client.write('ATZ\r');
            });

            // Add a 'data' event handler for the client socket
            // data is what the server sent to this socket
            client.on('data',function(data) {
             // this.setState({obd2Data:  data.toString()});

              mydata = data.toString();
 
            //  console.log(mydata);


            });  
            
            // Add a 'close' event handler for the client socket
        //    client.on('close', function() {
          //      console.log('Connection closed');
          //  });
        
    }

    sendMsgHere(){
        client.write('010C\r')
    }



    //Sending commands to the vehicle
    loopCommands(value)
    {
      switch(value) {
        case 1 : 
        client.write('ATZ\r');
        console.log('ATZ on')
          break;
        case 2 :
        client.write('ATDP\r');
        console.log('ATDP on')
          break;
        case 3 :
        client.write('ATSPA0\r');
        console.log('ATSPAO on')
          break;
        case 4 :
        client.write('010C\r');
        console.log('RPM on')
          break;
        case 5 :
        client.write('010D\r');
        console.log('SPEED on')
          break;
        default :
          break;
      }
    
    }



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
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                  marginTop: 20
                  }}>

                    <Button color =  'grey' title="Establish Connection" onPress={() => this.connectToWifi()}/>
                    <Button color =  'grey' title="Enable Socket" onPress={() => this.openSocket()}/>  
 
            </View>
      
            </View>

            <ActionButton buttonColor={'rgba(231,76,60,1)'} title = "Continue" onPress={() => this.props.navigation.navigate('MainScreen')}>
       
            </ActionButton>

        </View>
      );
    }
  }

  export  {mydata, client};

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
