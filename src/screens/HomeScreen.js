
import React from 'react'
import {View, Text,Button} from 'react-native';

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screener</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Components')}
        />
         <Button
          title="Go to List Screen"
          onPress={() => navigation.navigate('ListScreen')}
        />
      </View>
    );
  }

  export default HomeScreen;