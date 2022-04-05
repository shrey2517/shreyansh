import { Text, View,SafeAreaView ,FlatList} from 'react-native'
import React, { Component } from 'react'
import axios from 'axios'

export default class api extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }
    callApi=()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
            this.setState({data:response.data})
            console.log(response.data);
        })
    }

  render() {
    return (
        <SafeAreaView>
           <Text onPress={()=>{this.callApi()}}>press here</Text>
        <FlatList
        data={this.state.data}
        renderItem={({item})=>{
            return(
                <View>
                <Text>{item.name}</Text>
            </View>
            )
            
        }}
        />
        </SafeAreaView>
      
    )
  }
}