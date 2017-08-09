import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
    Picker
} from 'react-native';

import logoImg from '../../images/logo.png';

export default class Logo extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Image source={logoImg} style={styles.image} />
				<Text style={styles.text}>REACT NATIVE</Text>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex:1,
        marginTop: 20,
		alignItems: 'center'
	},
	image: {
		width: 80,
		height: 80,
	},
	text: {
		color: 'white',
		fontWeight: 'bold',
		backgroundColor: 'transparent',
		marginTop: 20,
	}
});
