import { Text, View } from 'react-native'
import React, { Component } from 'react'

export default class Child extends Component {
    constructor(props){
        super(props);
     
    }
  render() {
    
    return (
      <View>
        <Text>child</Text>
      </View>
    )
  }
}