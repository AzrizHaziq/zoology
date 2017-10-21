import React from 'react'
import { Button } from 'react-native'
import Testing from '../testing'
import AnimalList from '../animal-list'
import { DrawerNavigator, StackNavigator } from 'react-navigation'

const MainNavigator = StackNavigator({
    AnimalList : {
        screen : AnimalList,
        navigationOptions : ({ navigation }) => ({
            title : 'Animal List',
            headerLeft : <HeaderLeft navigation={ navigation }/>
        }),
    }
})

const TestingNavigator = StackNavigator({
    Testing : {
        screen : Testing,
        navigationOptions : ({ navigation }) => ({
            title : 'Testing',
            headerLeft : <HeaderLeft navigation={ navigation }/>
        }),
    }
})

export default DrawerNavigator(
    {
        AnimalList : { screen : MainNavigator },
        Testing : { screen : TestingNavigator }
    },
    {
        drawerWidth : 200,
        drawerPosition : 'left',
        drawerBackgroundColor : 'white'
    }
);

const HeaderLeft = ({ navigation }) =>
    <Button title='back' onPress={ () => navigation.navigate('DrawerOpen') }/>

    
