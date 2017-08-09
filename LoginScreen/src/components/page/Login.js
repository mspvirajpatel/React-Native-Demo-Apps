import React, { Component, PropTypes } from 'react';

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    KeyboardAvoidingView
} from 'react-native';

import Buttons from "../ui/button";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    onSignupPress =() =>  {
        this.props.navigator.push({name: 'Main'});
    };

    onPress=() =>   {
        this.setState({
            password: ''
        });
    };

    render() {
        return (
            <KeyboardAvoidingView behavior='padding'
                                  style={styles.maincontainer}>

                <View>
                    <Text>Sign In</Text>

                    <Text style={styles.label}>Username:</Text>
                    <TextInput style={styles.input}
                               value={this.state.username}
                               onChangeText = {(text) => this.setState({username: text})}
                    />

                    <Text style={styles.label} >Password:</Text>
                    <TextInput
                        secureTextEntry={true}
                        style={styles.input}
                        value={this.state.password}
                        onChangeText={(text) => this.setState({password: text})}
                    />

                    <Buttons text={'Sign In'} onPress={this.onPress} />
                    <Buttons text ={'Create Account'} onPress={this.onSignupPress} />
                </View>
            </KeyboardAvoidingView>


        );
    }
}

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        // backgroundColor : 'red',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        padding: 4,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        margin: 5,
        width: 250,
        alignSelf: 'center'
    },
    label: {
        fontSize: 18
    }
});