import { 
    StyleSheet, Image,
    ImageBackground, 
    View, TextInput, TouchableOpacity
} from 'react-native';
import React from 'react';

function WelcomeScreen(props) {
  state ={
         email:"",
         password:""
       }
  return (
   <View>
    <Image style={styles.logo} source={require("../assets/LOGO.png")}/>
   
    <View style={styles.container}>
            <Text style={styles.title}>SOCIALLY CONSCIOUS PERIOD CARE</Text>
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
            <Image style={{
                      width: 64,
                      height: 64
            }}
            source={require('../assets/taboo-advantage.PNG')}/>
    
          </View>
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
    title:{
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
      fontSize:14
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
