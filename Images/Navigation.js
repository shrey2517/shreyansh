// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen=({navigation})=> {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
        onPress={()=>{
            navigation.naviagte('Profile',{name:'shreyansh'})
        }}
        />
      </View>
    );
  }

const ProfileScreen=({navigation,route})=>{
    return (
        <View>
            <Text>This is {route.params.name} profile</Text>
        </View>
    )
}
  

export default App;