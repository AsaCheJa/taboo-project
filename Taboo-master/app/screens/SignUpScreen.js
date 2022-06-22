import { 
    StyleSheet, Image, TextInput, View, Text, TouchableOpacity
} from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import React from 'react';
//import {  } from 'react-native-gesture-handler';

function SignUpScreen(props) {
    //console.log(route);
 return (
  <View style={styles.container}>
        <Image style={{width: 100, height: 100}}
           source={require('../assets/LOGO.png')}/>
        <Text style={styles.logo}>Sign Up</Text>
        
        
        <FloatingLabelInput
                label={'First Name'}
                value={firstname}
                onChangeText={(value) => {setFirstName(value)}}/>
        

        
        <View style={styles.inputView}>          
            <TextInput style={styles.inputText}
                      label={'Last Name'}
                      placeholder=""
                      placeholderTextColor="black"
                      onChangeText={text => this.setState({text})}/>
        </View>

        <View style={styles.inputView}>              
            <TextInput style={styles.inputText}
                      label="Email Address"
                      placeholder="user@gmail.com"
                      placeholderTextColor="black"
                      onChangeText={text => this.setState({email:text})}/> 
        </View>

        <View style={styles.inputView}>
            <TextInput style={styles.inputText}
                      label="Date of Birth"
                      placeholder="dd/mm/yyyy"
                      placeholderTextColor="black"
                      onChangeText={text => this.setState({text})}/> 
        </View>  
        <TouchableOpacity onPress={() => {this.props.navigation.Home()}}>
                <Text style={styles.button}>Sign Up</Text>
        </TouchableOpacity>     
                    
                   
       
    </View>

 );
 }
const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#f4bbca',
        alignItems: 'center',
        justifyContent: 'center',
      },
      logo:{
        fontWeight:"bold",
        fontSize:24,
        color:"white",
        marginTop:30,
        marginBottom:40,
        textAlign:"center"
      },
      inputView:{
        width:"70%",
        backgroundColor:"white",
        borderRadius:50,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
      }, 

      label:{
        frontSize: 20,
        marginTop: 20,
        color: "black"
      },
      inputText:{
        height:50,
        color:"black"
      },
      button:{
          frontSize: 20,
          marginTop: 20,
          color: "blue"
      },
      FloatingLabelInput:{
        width:"70%",
        backgroundColor:"white",
        borderRadius:50,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20

      }

});

export default SignUpScreen;