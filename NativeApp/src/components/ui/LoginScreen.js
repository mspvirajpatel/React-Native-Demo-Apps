import React, { Component, PropTypes } from 'react';
import Wallpaper from './Wallpaper';
import ButtonSubmit from '../Page/ButtonSubmit';
import SignupSection from './SignupSection';
import Logo from './Logo';
import Form from './Form';

export default class LoginScreen extends Component {
	render() {
		return (
			<Wallpaper>
				<Logo />
				<Form />
				<SignupSection/>
				<ButtonSubmit/>
			</Wallpaper>
		);
	}
}
