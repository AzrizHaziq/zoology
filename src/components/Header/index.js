import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default class Header extends Component {

    render() {
        return (
            <View style={ styles.container }>
                <TouchableOpacity onPress={ () => this.props.navigation.navigate('DrawerOpen') }>
                    <Text>This is Header</Text>
                </TouchableOpacity>
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
