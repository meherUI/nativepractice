import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SearchScreen from './src/screens/SearchScreen'


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SearchScreen">
        <Stack.Screen name="Business Searcher">
          {props => <SearchScreen {...props} extraData={'someData'} />}
        </Stack.Screen>        
      </Stack.Navigator>
    </NavigationContainer>
  );
}