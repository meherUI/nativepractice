import React from 'react'
import { Button, View, Text, StyleSheet } from 'react-native';

const ComponentsScreen = ({ navigation }) => {
    return (
        <View>
            <Text styles={styles.textStyle}>This is Components Screen</Text>
            <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
        </View>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 10
    }
})

export default ComponentsScreen