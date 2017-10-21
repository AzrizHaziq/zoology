import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'
import AnimalList from './src/components/animal-list'

export default class App extends Component {

    static navigationOptions = {
        title : 'Welcome to Zoology'
    };

    render = () => <Zoology/>
}

const Zoology = StackNavigator({
    AnimalList : { screen : AnimalList }
});