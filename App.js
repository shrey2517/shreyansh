import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity,
  SafeAreaView } from 'react-native'
  import React from 'react'
  
  export default function App() {
    
  
    return (
      <View>
      <View>
       <Image style = {styles.Image}
       source={require('./Images/icLoginBg.png')}
       />
       <Text style={styles.loginText}>Login</Text>
       <Text style={styles.enter}>Enter your details to continue</Text>
       </View>
       <View style = {{alignItems: 'center'}}>
       <View style={styles.Email}>
       <TextInput
        placeholder='Email'/> 
       </View>
       <View style ={{alignItems: 'center'}}></View>
       <View style={styles.Password}>
       <TextInput
        placeholder='Password'/>
        <TouchableOpacity>
        <Image style = {styles.eye}
        source={require('./Images/icVisible.png')}
        />
        </TouchableOpacity>
        </View>
        </View>

       <Text style={styles.Forgot}>Forgot Password?</Text>
       <View style={styles.LOGIN}>
         <Text style={styles.login} >LOGIN</Text>
       </View>
       <View style={{flexDirection:'row'}}>
       <Text style={styles.register}>Not Register Yet? </Text>
       <Text style={{fontWeight:'bold', fontSize:20,marginTop:60}}>register</Text>
       </View>
      </View> 
    )
  }
  
  const styles = StyleSheet.create({
  
    Image:{
    marginLeft:10
    },
    loginText:{
      fontSize:30,
      fontWeight:'600',
      marginLeft:30,
      marginTop:-20
  },
  enter:{
    marginLeft:30,
    marginTop:20
  },
  Email:{
    padding: 10,
    borderWidth:1,
    height:60,
    width:'90%',
    margin: 20,
   borderRadius:5
  },
  
 Password:{
   padding: 10,
    borderWidth:1,
    height:60,
    width:'90%',
    borderRadius:5,
    flexDirection:'row',
    justifyContent:'space-between'
  },

  Forgot:{
    marginLeft:260,
    marginTop:30
  },
  LOGIN:{
    backgroundColor:'#fde7a4',
    paddingLeft:70,
    paddingRight:70,
    padding:20,
    marginLeft:30,
    marginRight:30,
    alignSelf:'center',
    marginTop:60,
    marginBottom:30,
    
  },
  register:{
    marginLeft:70,
    fontSize:20,
    marginTop:60
  },

  login:{
    fontSize:20
  },
  eye:{
    position:'absolute',
    right:10,
    top:20,

  }
  
  })