import { Text, View, Button} from 'react-native'
import React, { Component } from 'react'

export default class state extends Component {
    constructor()
    {
        super();
        this.state={
            data:"Some App data"
        }
    }
  render() {
    return (
      <View>
        <Text style = {{ fontSize:90, marginTop:20}}>
          {this.state.data}</Text>
        <Button title="Update state"
        onPress = {()=> {this.setState({data:"New App Data"})}} />
      </View>
    )
  }
}
