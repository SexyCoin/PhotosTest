// In App.js in a new project

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './screens/profile'
import Lenta from './screens/lenta'
import CardPhoto from './screens/cardPhoto'
const Stack = createNativeStackNavigator();



function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Lenta" component={Lenta} />
          <Stack.Screen name="CardPhoto" component={CardPhoto} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  
}

export default App;