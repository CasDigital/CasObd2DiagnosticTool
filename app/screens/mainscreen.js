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
import { Socket } from 'react-native-tcp';
import Connection from '../screens/connectionScreen';
import {mydata} from '../screens/connectionScreen';
import {client} from '../screens/connectionScreen';
var i = 1;
//Overview screen displays counts of all the system faults
export default class  mainscreen extends Component {


    constructor(props) {
        super(props);

      //configuring the engine parameters for display
        this.state = {
          rpm: '0',
          coolantTemp:'O',
          engineIntake: '0',
          engineLoad: '0',
          i: 1,
          
          wifiStatus: 'notConnected',
          obdStatus: 'disconnected',
       //   obd2Data :{}]
       

        };

        this.sendMsg = this.sendMsg.bind(this);
        this.setLiveData = this.setLiveData.bind(this);
        //this.sendMsg = this.sendMsg.bind(this);
        this.extractDataFromSignal = this.extractDataFromSignal.bind(this);


      }

      componentDidMount(){

          setInterval(() => {this.sendMsg()}, 1000);
      }
               
      componentWillUnmount() {
         clearInterval(this.interval);
      }
      
    //Send initiation strinng to the ECU
    sendMsg(){

       // setTimeout(() => client.write('010C\r'), 1000);
        client.write('010C\r');
        console.log('i wrote something');
        this.setState({rpm: this.extractDataFromSignal(mydata)});        
     }

     //capture the 
     extractDataFromSignal(PID){
          var A = '';
          var B = '';
          var Ahex
          var answer = 0;

          console.log(PID.toString());

          if(PID.charAt(0)=='4'&&PID.charAt(1)=='1')
          {
            if(PID.charAt(3)=='0'&&PID.charAt(4)=='C')

              A =  parseInt('0x'+ PID.charAt(6) + PID.charAt(7), 16)
             
              B =  parseInt('0x'+ PID.charAt(9) + PID.charAt(10), 16)
              console.log(A);
              console.log(B);
             
            //console.log(A + B);
             answer = ((256*A)+B)/4
     
             return answer;
          }
      return answer;
     }


    sendMsg2(){
      
      setTimeout(() => client.write('ATI\r'), 3000);
    //  console.log(mydata)
      this.setState({rpm: mydata});
   }

    setLiveData()
    {
      //Seting live vehicle parameters
        this.setState({rpm: mydata});

        this.setState({coolantTemp: i++});
  
        this.setState({engineIntake: i++});
  
        this.setState({engineLoad: i++});

    }
   
    render() {

       // refresh signals every second
    //  setTimeout(() => { this.setState({rpm: mydata})}, 3000);
      //setTimeout(() => { client.write('010C\r'), console.log(mydata)}, 3000)
      return (

        <View style={{flex:1, backgroundColor: '#f3f3f3'}}>        
          <View style={[panelStyles.containerStyle,
                {flexDirection: 'row', 
                height: 100},
                imageStyles.imagePosition,
                panelStyles.color]}>

                <Text style={textStyles.headingfont}>ENGINE OVERVIEW SCREEN</Text>
               </View>

           <View>

              <ScrollView>

                  <View style={{flexWrap: 'wrap', height: 500, flexDirection: 'row',backgroundColor: '#f3f3f3'}}> 
                  
                          <Card faultCount = {this.state.rpm} systemName =  {this.state.rpm}/>
                          <Card faultCount = {this.state.coolantTemp} systemName =   {this.state.rpm}/>
                          <Card faultCount = {this.state.engineIntake} systemName = 'Intake (Psi)'/>
                          <Card faultCount = {this.state.engineLoad} systemName = 'Engine Load (%)'/>
                          <Button color =  'grey' title="Message1" onPress={() => this.sendMsg()}/>
                          <Button color =  'grey' title="Message2" onPress={() => this.sendMsg2()}/>



                  </View>
              </ScrollView>
      
            </View>
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
        fontSize: 20,
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
