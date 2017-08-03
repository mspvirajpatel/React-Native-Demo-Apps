import React, { Component, PropTypes } from 'react';
import Wallpaper from './Wallpaper';
import ButtonSubmit from '../Page/ButtonSubmit';
import Logo from './Logo';
import {
    StyleSheet,
    View,
    Button,
    Image,
} from 'react-native';

import {baseNavigationToolbar} from "../../basetoolbar";


export default class LoginScreen extends Component {

    static navigationOptions = baseNavigationToolbar;

    render() {
		return (
			<Wallpaper>
				<Logo />
				<Button onPress={() => this.props.navigation.navigate('Profile')} title="Push" color="#000000" accessibilityLabel="Tap on Me"/>

				{/*<ButtonSubmit/>*/}
			</Wallpaper>
		);
	}
}
