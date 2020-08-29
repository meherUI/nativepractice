import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SearchScreen from './src/screens/SearchScreen'
import ResultShowScreen from './src/screens/ResultShowScreen'


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SearchScreen">
        <Stack.Screen name="Business Searcher">
          {props => <SearchScreen {...props} extraData={'someData'} />}
        </Stack.Screen>        
        <Stack.Screen name="ResultScreen ">
          {props => <ResultShowScreen {...props} extraData={'someData'} />}
        </Stack.Screen>        
      </Stack.Navigator>
    </NavigationContainer>
  );
}