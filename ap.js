import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  Button,Modal
} from 'react-native';
import React, { useEffect, useState, useRef } from 'react';

export default function ap() {
  const [Name, setname] = useState('');
  //   const [validname, setvalidname] = useState('');
  const [email, setEmail] = useState('');
  const [emailValidError, setEmailValidError] = useState('');
  const [add, setadd] = useState([]);
  const [check, setCheck] = useState(true);
const listViewRef = useRef('');
const [toggle, setToggle] = useState('Add Details');
const [modal, setModal] = useState(false);


let i = 0;

  const validateName = (val) => {
    let regixp = /^[a-zA-Z_]+( [a-zA-Z_]+)*$/;
    return regixp.test(val)
  } 

  const isValidName = val => {
    // let regixp = /^[a-zA-Z]{1,40}$/;
    let regixp = /^[a-zA-Z_]+( [a-zA-Z_]+)*$/;
    // let regixp = /^\S/;
    if (val.length == 0) {
      //   setvalidname('');
      setCheck(true);
    } else if (regixp.test(val) == false || regixp.test(val) == false) {
      //   setvalidname('name is not valid');
      setCheck(true);
    } else {
      //   setvalidname(' ');
      setCheck(false);
    }
  };

  const handleValidEmail = val => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (val.length == 0) {
      setEmailValidError('');
      setCheck(true);
    } else if (reg.test(val) === false) {
      setEmailValidError('Please Enter valid email..');
      setCheck(true);
    } else {
      setEmailValidError('');
      setCheck(false);
    }
  };

  const addDetails = () => {
    //console.log(add);
    setadd([...add, { Name1: Name, email1: email }]);
  };
  const deleteDetails = i => {
    add.splice(i, 1);
    setadd([...add]);
  };
  const editDetails =i=>{
    setname(add[i].Name1);
    setEmail(add[i].email1);
    setToggle('Update Details');
    setCheck(true)
    setModal(!modal)
  }

  
  const onRendder = ({ item }) => {
    return (
      <View style={styles.list}>
        <Text style={styles.name}>{`Name:${item.Name1}`}</Text>
        <Text style={styles.name}>{`Email:${item.email1}`}</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() => {
              let i = add.findIndex(ele => ele == item);
              deleteDetails(i);
            }}>
            <Image
              style={{ height: 20, width: 20, bottom: 25, left: 300 }}
              source={require('./Images/icons8-delete-100.png')}
            />
          
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { 
            let i=add.findIndex(i => i == item);
            editDetails(i)
          }}>
            <Image
              style={{ height: 25, width: 25, marginLeft: 279, marginTop: 3 }}
              source={require('./Images/edit.png')}
            />
          </TouchableOpacity>

        </View>
      </View>
    );
  };


  return (
    <SafeAreaView>
      <View style={styles.heading}>
        <Text style={styles.txt}>{' FORM'}</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.inputName}>
          <Text>{'Name'}</Text>
          <TextInput
            value={Name}
            onChangeText={value => {
              setname(value);
              isValidName(value);
            }}
          />
          <View style={{ marginTop: 15, marginLeft: 1 }}>
            {!validateName(Name) && Name ? <Text style={{ color: 'red' }}>{'name is invalid'}</Text> : null}
          </View>
        </View>

        <View style={styles.inputEmail}>
          <Text>{'Email'}</Text>
          <TextInput
            value={email}
            onChangeText={value => {
              setEmail(value);
              handleValidEmail(value);
            }}
          />
        </View>
        <View style={{ marginBottom: 10 }}>
          {emailValidError ? (
            <Text style={{ marginLeft: 23, color: 'red' }}>
              {emailValidError}
            </Text>
          ) : null}
        </View>
          <View style={styles.Add}>
        <TouchableOpacity onPress={addDetails} disabled={check}>
            <Text style={styles.Add1}>{toggle}</Text>
        </TouchableOpacity>
          </View>
      </View>

      <Button
      title={'Button'}
      onPress={()=>setModal(!modal)}
      />

      <View style={styles.Register}>
        <Modal
        visible={modal}
        >
        <Text style={styles.Register}>{'Student Details'}</Text>
        <TouchableOpacity
        onPress={()=>setModal(!modal)}>
          <Image style={styles.cancelbutton}
          source={require('./Images/cross_noun_002_09265.jpeg')} />
          </TouchableOpacity>
        <FlatList data={add} renderItem={onRendder} />
        </Modal>
      </View>
    </SafeAreaView>
  );
  }

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: '#898ab0',
    margin: 10,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 1,
    backgroundColor: 'yellow',
  },
  heading: {
    alignItems: 'center',
  },
  txt: {
    fontWeight: 'bold',
    fontSize: 30,
    paddingTop: 8,
    marginLeft: 16,
    color: 'red',
  },
  Add1: {
    fontWeight: 'bold',
    fontSize: 15,
    paddingTop: 8,
    textAlign: 'center',
  },
  inputName: {
    height: 60,
    borderWidth: 1,
    padding: 10,
    marginLeft: 17,
    marginRight: 17,
    marginBottom: 17,
    borderColor: 'black',
    borderWidth: 1,
    paddingBottom: 5,
  },
  inputEmail: {
    height: 60,
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
    marginLeft: 17,
    marginRight: 17,
    marginBottom: 5,
    borderColor: 'black',
    borderWidth: 1,
    paddingBottom: 3,
  },
  Add: {
    borderWidth: 3,
    width: 150,
    height: 40,
    alignSelf: 'center',
    borderRadius: 7,
    marginTop: 10,
    borderColor: 'pink',
    backgroundColor: 'aqua',
  },
  Register: {
    alignText: 'center',
    fontSize: 20,
    color: 'red',
    marginTop:60,
    marginLeft:20

  },
  list: {
    borderWidth: 1,
    marginLeft: 12,
    marginRight: 12,
    marginTop: 12,
    paddingLeft: 15,
    paddingBottom: 5,
    paddingTop: 10,

    backgroundColor: 'F6F6F6'

  },
  name: {
    fontSize: 15,
    color: '#2D31FA',
    paddingTop: 4,
   },
   cancelbutton: {

    height:40,
    width:40,
    alignSelf:'flex-end',


   }
});