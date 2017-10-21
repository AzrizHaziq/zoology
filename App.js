import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AnimalList from './src/components/animal-list'

export default class App extends Component {
    render() {
        return (
            <View style={ styles.container }>
                <AnimalList />
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
