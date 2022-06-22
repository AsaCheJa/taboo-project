import { 
    StyleSheet , 
    ImageBackground, 
    View, TextInput, TouchableOpacity
} from 'react-native';
import React from 'react';
import{NavigationContainer} from '@react-navigation/native';
import{createNativeStackNavigator} from '@react-navigation/native-stack';

function WelcomeScreen(props) {
<<<<<<< Updated upstream
  return (
 
   <View style={styles.container}>
          <Text style={styles.logo}>Taboo</Text>
          <view style={styles.inputView}>
            <TextInput style={styles.inputText}
                       placeholder="Email"
                       placeholderTextColor="white"
                       onChangeText={text => this.setState({email:text})}/>
          </view>
          <View style={styles.inputView}>
            <TextInput secureTextEntry
                       style={styles.inputText}
                       placeholder="Password"
                       placeholderTextColor="white"
                       onChangeText={text => this.setState({password:text})}/>
           </View>
           <TouchableOpacity>
             <Text style={styles.forgot}>Forgot Password?</Text>
           </TouchableOpacity>
   
           <TouchableOpacity style={styles.loginBtn}>
             <Text style={styles.loginText}>LOG IN</Text>
           </TouchableOpacity>
   
           <TouchableOpacity>
           <Text style={styles.loginText}>Sign Up</Text>
           </TouchableOpacity>
   
         </View>
         
  );
}

// export default class Apps extends React.Component {
   
//   state ={
//      email:"",
//      password:""
//    }
//    render(){
//      return(
//      <View style={styles.container}>
//        <Text style={styles.logo}>Taboo</Text>
//        <view style={styles.inputView}>
//          <TextInput style={styles.inputText}
//                     placeholder="Email"
//                     placeholderTextColor="white"
//                     onChangeText={text => this.setState({email:text})}/>
//        </view>
//        <View style={styles.inputView}>
//          <TextInput secureTextEntry
//                     style={styles.inputText}
//                     placeholder="Password"
//                     placeholderTextColor="white"
//                     onChangeText={text => this.setState({password:text})}/>
//         </View>
//         <TouchableOpacity>
//           <Text style={styles.forgot}>Forgot Password?</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.loginBtn}>
//           <Text style={styles.loginText}>LOG IN</Text>
//         </TouchableOpacity>

//         <TouchableOpacity>
//         <Text style={styles.loginText}>Sign Up</Text>
//         </TouchableOpacity>

//       </View>
//      );
//    }
// }
=======
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
        <TouchableOpacity onPress={()=>{props.navigation.navigate('SignUpScreen')}}>
            <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
        </View>
       
      </View>
    );
}

const Stack = createNativeStackNavigator();
>>>>>>> Stashed changes

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",    
    },
    loginButton: {
        width: ' 100%',
        height: 70,
        backColor: ' #fc5c65',
    },

    container: {
      flex: 1,
      backgroundColor: '#f4bbca',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo:{
      fontWeight:"bold",
      fontSize:50,
      color:"white",
      marginBottom:40
    },
    inputView:{
      width:"80%",
      backgroundColor:"white",
      borderRadius:25,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:20
    }, inputText:{
      height:50,
      color:"black"
    },
    forgot:{
      color:"black",
      fontSize:11
    },
    loginBtn:{
      width:"80%",
      backgroundColor:"#ed216a",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      marginBottom:10
    },
    loginText:{
      color:"white"
    }
})

export default WelcomeScreen;
