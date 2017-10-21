import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Testing extends Component {

    static navigationOptions = {
        title : 'Testing'
    };

    render() {
        return (
            <View style={ styles.container }>
                <Text>asdasdasdasdasdasdasd</Text>
                <Text>asdasdasdasdasdasdasd</Text>
                <Text>asdasdasdasdasdasdasd</Text>
                <Text>asdasdasdasdasdasdasd</Text>
                <Text>asdasdasdasdasdasdasd</Text>
                <Text>asdasdasdasdasdasdasd</Text>
                <Text>asdasdasdasdasdasdasd</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#fff',
        alignItems : 'center',
        justifyContent : 'center',
    },
});