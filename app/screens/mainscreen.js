import React, { Component } from 'react';
import { 
    ActivityIndicator,
    AppRegistry, 
    Button,
    ListView, 
    Text, 
    View, 
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    ToolbarAndroid,
     } from 'react-native';


import Card from '../components/Card';
import wifi from 'react-native-android-wifi';
import { Socket } from 'react-native-tcp';

//defining public variables
var net = require('react-native-tcp')
var HOST = '192.168.0.10';
var PORT = 35000;
var client = new net.Socket();
var myDisplay = '';

//Overview screen displays counts of all the system faults
export default class  mainscreen extends Component {
  /*static navigationOptions = {
    drawerLabel: 'Main Screen',
  
  }; */

    constructor(props) {
        super(props);

        this.state = {
          rpm: '0rpm',
          speed:'Okm/h',
          wifiStatus: '_',
          wifiSelectedDeviceAddress:'',
          obdStatus: 'disconnected',
          obd2Data :{}
        };

      }

  
    connectToWifi(){
        console.log("I am in");
        wifi.findAndConnect("panda-c5b2b17b574deef8", "QgMiWkvPsj", (found) => {
            if (found) {
              console.log("wifi is in range");
            } else {
              console.log("wifi is not in range");
            }
          });
    }

    connectReview(){
        wifi.connectionStatus((isConnected) => {
            if (isConnected) {
                console.log("is connected");
              } else {
                console.log("is not connected");
            }
          });
    }

    openSocket(){

            client.connect(PORT, HOST, function() {
            
                console.log('CONNECTED TO: ' + HOST + ':' + PORT);
                client.write('010F\r');
            });

            // Add a 'data' event handler for the client socket
            // data is what the server sent to this socket
            client.on('data',function(data) {
                myDisplay = data.toString();
                console.log(myDisplay);
                
            });  
            
            // Add a 'close' event handler for the client socket
            client.on('close', function() {
              console.log('Connection closed');
            });

           
    }

    sendMsg(){
      client.write('ATZ\r');
    }

    //Sending commands to the vehicle
    loopCommands(value)
    {
      switch(value) {
        case 1 : 
        client.write('ATZ\r');
          break;
        case 2 :
        client.write('ATDP\r');
          break;
        case 3 :
        client.write('ATSPA0\r');
          break;
        case 4 :
        client.write('010C\r');
          break;
        case 5 :
        client.write('010D\r');
          break;
        default :
          break;
      }
    }

   
    render() {


      return (


        <View>

        <View style={{flexWrap: 'wrap', flexDirection: 'row',backgroundColor: '#f3f3f3'}}>

          <Button title="revCon" onPress={() => this.connectReview()}/>     
          <Button title="Conn" onPress={() => this.connectToWifi()}/>
          <Button title="Socket" onPress={() => this.openSocket()}/>  
          <Button title="SendMsg" onPress={() => this.sendMsg()}/>  
          <Button title="IncCom1" onPress={() => this.loopCommands(1)}/>  
          <Button title="IncCom2" onPress={() => this.loopCommands(2)}/>  
          <Button title="IncCom3" onPress={() => this.loopCommands(3)}/>  
          <Button title="IncCom4" onPress={() => this.loopCommands(5)}/>  
          <Button title="IncCom5" onPress={() => this.loopCommands(5)}/> 

        </View>

        <ScrollView>

            <View style={{flexWrap: 'wrap', flexDirection: 'row',backgroundColor: '#f3f3f3'}}> 
            
                    <Card faultCount = '300' systemName = 'Engine Rpm'/>
                    <Card faultCount = '50' systemName =   {this.state.rpm}/>
                    <Card faultCount = '70' systemName = 'Fuel Level'/>


            </View>
        </ScrollView>
    
        </View>
      );
    }
  }
  //<Button title="SendMsg" onPress={() => this.setState({rpm: ':' + myDisplay})}/> 
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

cardstyle:{
    height: 150,
    width: 150,
    marginTop: 15, 
    marginLeft: 15, 
    marginBottom: 15, 
    marginRight:15
}


};

//Styling for images
const imageStyles = {

    imageSize: {
        width: 15,
        height: 15,
    },
    
    inconImageSize: {
        width: 15,
        height: 15,
    },

    imagePosition: {
      
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }

};

//Styling for that can be used be the styling for the all the images on the tool.
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
    
//Styling for that can be used for the text that is on the tool. 
const textStyles = {
    
    headingfont: {
        fontSize: 30,
        color: 'white',
      },

      subheadingfont: {
        fontSize: 20,
        color: 'white',
      },

    
    footerfont: {
        fontSize: 80,
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
      },

      bottomPanelPosition: {
        flexDirection: 'column',
        justifyContent: 'bottom',
        alignItems: 'center'
      }

};
