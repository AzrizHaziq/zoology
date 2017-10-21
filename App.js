import React, { Component } from 'react'
import { DrawerNavigator } from 'react-navigation'
import Testing from './src/components/testing'
import AnimalList from './src/components/animal-list'

export default class App extends Component {
    render = () => <Zoology/>
}

const Zoology = DrawerNavigator(
    {
        AnimalList : { screen : AnimalList },
        Testing : { screen : Testing }
    },
    {
        drawerWidth : 200,
        drawerPosition : 'left',
        drawerBackgroundColor : 'white'
    }
);