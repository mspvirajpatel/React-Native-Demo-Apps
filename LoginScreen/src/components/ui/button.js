import React, { Component, PropTypes } from 'react';

import {
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native';

export default class Buttons extends Component {

    render() {
        return (
            <TouchableHighlight
                style={styles.button}
                underlayColor={'gray'}
                onPress={this.props.onPress}
            >
                <Text style={styles.buttonText}>{this.props.text}</Text>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderRadius: 5,
        padding: 5,
        borderColor: 'black',
        height: 40,
        marginTop: 10,
        marginVertical:10,
        paddingLeft:10,
        paddingRight:10,
    },
    buttonText: {
        flex: 1,
        alignSelf: 'center',
        fontSize: 20
    }
});