import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
    render() {
        return (
            <SafeAreaView>

                <View>
                    <Text style={style.text}>Curso: Desenvolvimento de sistemas</Text>
                    <Text style={style.text1}>Nome: Gabriel Amaro De Souza</Text>
                </View>

            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        backgroundColor: 'blue'
    },
    text1: {
        backgroundColor: 'yellow'
    }
});
