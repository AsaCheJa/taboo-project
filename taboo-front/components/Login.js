import { 
    StyleSheet, Image, View, TextInput, TouchableOpacity, Text
} from 'react-native';
import React from 'react';
import{NavigationContainer} from '@react-navigation/native';
import{createNativeStackNavigator} from '@react-navigation/native-stack';

function Login(props) {
  console.log(props);
  return(
    <View style={styles.container}>
        <Image style={{width: 100, height: 100}}
              source={require('../assets/LOGO.png')}/>
        <Text style={styles.logo}>PERIOD CARE THAT{"\n"}CARES.</Text>
        <View style={styles.inputView}>
          <TextInput style={styles.inputText}
                    placeholder="Email"
                    placeholderTextColor="black"
                    onChangeText={text => this.setState({email:text})}/>
        </View>
        <View style={styles.inputView}>
          <TextInput secureTextEntry
                    style={styles.inputText}
                    placeholder="Password"
                    placeholderTextColor="black"
                    onChangeText={text => this.setState({password:text})}/>
        </View>
        <TouchableOpacity>
            <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        
        <TouchableOpacity  style={styles.loginBtn}>
        <Text style={styles.loginText}>LOG IN</Text>
        </TouchableOpacity>
        
        <View style={styles.row}>
          <Text>New to Taboo?   </Text>
        <TouchableOpacity onPress={()=>{props.navigation.navigate('Register')}}>
            <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
        </View>
       
      </View>
    );
}

const Stack = createNativeStackNavigator();

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
      borderRadius:25,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:20
    }, 
    inputText:{
      height:50,
      color:"black"
    },
    forgot:{
      color:"black",
      fontSize:12,
      textAlign: "right",
      marginLeft: 300
    },
    loginBtn:{
      width:"70%",
      backgroundColor:"#ed216a",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      marginBottom:10
    },
    signUpText:{
      color:"white",
      margin: 10,
      
    },
    
    row:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    }
});

export default Login;
