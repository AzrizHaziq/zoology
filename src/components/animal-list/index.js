import Animal from './../animal'
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class AnimalList extends Component {
    render() {
        return (
            <View style={ styles.container }>
                { animals.map(animal =>
                    <Animal key={ animal.id } { ...animal } />
                ) }
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

const animals = [
    {
        id : 1,
        name : 'Lion',
        scientificName : 'kucing besar',
        averageLifeSpan : 23,
        img : '',
        description : 'lorem loremlorem'
    },
    {
        id : 2,
        name : 'Beruang',
        scientificName : 'besar',
        averageLifeSpan : 53,
        img : '',
        description : 'lorem loremloremloremloremloremloremloremlorem'
    },
    {
        id : 3,
        name : 'Tiger',
        scientificName : 'kucing besar',
        averageLifeSpan : 23,
        img : '',
        description : 'loremloremloremlorem loremlorem'
    },
    {
        id : 4,
        name : 'Tikus',
        scientificName : 'kucing besar',
        averageLifeSpan : 23,
        img : '',
        description : 'lorfsdfasdf sdf asdfadf asdfa sdfem ldfasdfasdfasdfasdoremlorem'
    },
    {
        id : 5,
        name : 'Kuda',
        scientificName : 'kucing besar',
        averageLifeSpan : 23,
        img : '',
        description : 'lorem las dfasdf asdfa sdfasd fasdfaoremlorem'
    }
]