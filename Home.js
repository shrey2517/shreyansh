import { Text, View } from 'react-native'
import React, { Component } from 'react'

const Home = (props) => {
  
    return (
      <View>
        <Text style={{fontSize:40}}> 
        Home Component
          {props.data}
          </Text>
      </View>
    );
  };

export default Home;
