import React, { Component } from 'react'
import { DrawerNavigator, StackNavigator } from 'react-navigation'
import Testing from './src/components/testing'
import AnimalList from './src/components/animal-list'

export default class App extends Component {
    render = () => <Zoology/>
}

const MainNavigator = StackNavigator({
    AnimalList : { screen : AnimalList }
})

const TestingNavigator = StackNavigator({
    Testing : { screen : Testing }
})

const Zoology = DrawerNavigator(
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