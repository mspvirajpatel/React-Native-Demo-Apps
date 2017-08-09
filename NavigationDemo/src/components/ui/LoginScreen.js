import React, { Component, PropTypes } from 'react';
import Wallpaper from './Wallpaper';
import ButtonSubmit from '../Page/ButtonSubmit';
import Logo from './Logo';
import {
    StyleSheet,
    View,
    Button,
    Image,
    KeyboardAvoidingView,
} from 'react-native';

import {baseNavigationToolbar} from "../../basetoolbar";

import UserInput from '../Page/UserInput';

export default class LoginScreen extends Component {

    static navigationOptions = baseNavigationToolbar;

    render() {
		return (
			<Wallpaper>
				<Logo />
				<UserInput placeholder='Username'
						   autoCapitalize={'none'}
						   returnKeyType={'done'}
						   autoCorrect={false} />
				<Button onPress={() => this.props.navigation.navigate('Profile')} title="Push" color="#000000" accessibilityLabel="Tap on Me"/>

				{/*<ButtonSubmit/>*/}
			</Wallpaper>
		);
	}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    btnEye: {
        position: 'absolute',
        top: 55,
        right: 28,
    },
    iconEye: {
        width: 25,
        height: 25,
        tintColor: 'rgba(0,0,0,0.2)',
    },
});
