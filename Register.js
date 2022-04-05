import {
    View, Text, StyleSheet, Image, TextInput, TouchableOpacity,
    SafeAreaView
} from 'react-native'
import React,{useState} from 'react'

export default function Register() {
    const[pass,setpass]=useState(true)
     const[newpass,newsetpass]=useState(true)
     const [email, setEmail] = useState('');
     const [emailValidError, setEmailValidError] = useState('');
     const [password,updatepass]=useState('');
     const [matchpassword,newupdate]=useState('')
     const [cirlce,  setcirle]=useState(true);

    const validpass=()=>{
        if(password===matchpassword)
        {
          return(true);
        }
        else{
          return(false)
        }
      }
 const handleValidEmail = val => {
   let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w\w+)+$/;
   
   if (val.length === 0) {
     setEmailValidError('email address must be enter');
   } else if (reg.test(val) === false) {
     setEmailValidError('enter valid email address');
   } else if (reg.test(val) === true) {
     setEmailValidError('');
   }
   };


    return (
        <View>
         <View>
        <Image style={styles.image} 
        source={require('./Images/icLoginBg.png')}
       />
        <Text style={styles.loginText}>Register</Text>
        <Text style={styles.enter}>Enter your details to continue</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
        <View style={styles.Name}>
             <Text>Name</Text> 
        <TextInput placeholder='Name' />
         </View>
        <View style={{ alignItems: 'center' }}></View>
        <View style={styles.Email}>
            {/* <Text>Email</Text> */}
        <TextInput  
         placeholder='Email'
         onChangeText={(text)=>console.log(text)}
         />
         
        </View>

        <View style={{ alignItems: 'center' }}>
        <View style={styles.Password}>
            <View>
        <TextInput placeholder='Password' 
        
        
        />
         </View>

        <TouchableOpacity>
        <Image style={styles.eye}
         source={require('./Images/icVisible.png')}  />
       </TouchableOpacity>
                </View>
            </View>


            <View style={{ alignItems: 'center' }}>
        <View style={styles.ConfirmPassword}>
            <View>
        <TextInput placeholder='Confirm Password' />
         </View>

        <TouchableOpacity>
        <Image
            style={styles.eye}
            source={require('./Images/icVisible.png')}  />
       </TouchableOpacity>
                </View>
            </View>
            <View style={{flexDirection:'row', alignItems: 'center', marginTop: '5%'}}>
              
            <Image source={require('./Images/icCheck.png')} />
            <Text style = {{marginLeft: '1%'}}>Agree to terms of Service & Privacy Policy</Text>
         
            </View>
            <View style={styles.LOGIN}>
                <Text style={styles.login}>{'REGISTER'}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text>Already have an account? </Text>
                <Text>Login</Text>
            </View>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({

    image: {
        marginLeft: 10
    },
    loginText: {
        fontSize: 30,
        fontWeight: '600',
        marginLeft: 20,
    },
    enter: {
        marginLeft: 30,
        marginTop: 20
    },
    Name: {
        padding: 20,
        borderWidth: 1,
        height: 60,
        width: '90%',
        margin: 20,
        borderRadius: 5,
        paddingBottom:20
    },

    Email: {
        padding: 20,
        borderWidth: 1,
        height: 60,
        width: '90%',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    Password: {
        padding: 20,
        borderWidth: 1,
        height: 60,
        width: 350,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:20
        
    },

   ConfirmPassword: {
        padding: 20,
        borderWidth: 1,
        height: 60,
        width: 350,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:20
        
    },
    // tick:{
    //     marginTop:28
    // },
    


    Forgot: {
        marginLeft: 20,
        marginTop: 30,
        marginRight:10
    },

    LOGIN: {
        backgroundColor: '#fde7a4',
        width: '90%',
        padding: 20,
        marginLeft: 30,
        marginRight: 30,
        alignSelf: 'center',
        marginTop: 60,
        marginBottom: 30,
        alignItems: 'center'
    },
    register: {
        marginLeft: 5,
        fontSize: 20,
        marginTop: 20
    },

    login: {
        fontSize: 20,
    },
    eye: {
        position:'absolute',
        top: 5,
        marginHorizontal: 5,
        //marginBottom: 110
        right: 2

    }

})