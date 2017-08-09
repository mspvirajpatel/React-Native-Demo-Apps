import React, {Component} from 'react'
import {View, Text, TextInput,StyleSheet} from 'react-native'

export default class TextField extends Component {
    error() {
        if (this.props.error) {
            return <Text>{this.props.error}</Text>
        }
        return null
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input} text="dasfcho"/>
                {this.error()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        flex: 1,
       backgroundColor: 'rgba(255, 255, 255, 0.4)',
        color: '#ffffff',
    },
    container: {
        flex: 1,
    }
});