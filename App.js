// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentScreen';
import ListScreen from './src/screens/ListScreen';



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {props => <HomeScreen {...props} extraData={'someData'} />}
        </Stack.Screen>
        <Stack.Screen name="Components" component={ComponentsScreen} />
        <Stack.Screen name="ListScreen" component={ListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
// import {createStackNavigator, createAppContainer} from '@react-navigation/stack';
// import HomeScreen from './src/screens/HomeScreen'
// import ComponentScreen from './src/screens/ComponentScreen'

// const navigator = createStackNavigator(
//   {
//     Home : HomeScreen,
//     Components : ComponentScreen
//   },
//   {
//     initialRoteName: 'Components',
//     defaultNavigationOptions:{
//       title:'App'
//     }
//   }
// )

// export default createAppContainer(navigator)
