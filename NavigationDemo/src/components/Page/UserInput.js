import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
import {
	StyleSheet,
	View,
	TextInput,
	Image,
    Text
} from 'react-native';
import BaseStyles from '../../BaseStyles';

export default class UserInput extends Component {
	render() {
        //keyboardWillShow, keyboardDidShow, keyboardWillHide, keyboardDidHide
//keyboardWillChangeFrame, keyboardDidChangeFrame
//add the listener
//         var listener = DeviceEventEmitter.addListener('keyboardWillShow', (e) =>{
//             console.log('Event is fired!');
//         });
		return (
			<View style={styles.inputWrapper}>
				<Image source={this.props.source}
					style={styles.inlineImg} />
				<TextInput style={styles.input}
					placeholder={this.props.placeholder}
					secureTextEntry={this.props.secureTextEntry}
					autoCorrect={this.props.autoCorrect}
					autoCapitalize={this.props.autoCapitalize}
					returnKeyType={this.props.returnKeyType}
					placeholderTextColor='white'
					underlineColorAndroid='transparent' />
				<View style={this.props.parentColor}>
					<Text style={[BaseStyles.text, styles.text]}> this is a long text </Text>
				</View>
			</View>
		);
	}
}

UserInput.propTypes = {
	source: PropTypes.number.isRequired,
	placeholder: PropTypes.string.isRequired,
	secureTextEntry: PropTypes.bool,
	autoCorrect: PropTypes.bool,
	autoCapitalize: PropTypes.string,
	returnKeyType: PropTypes.string,
};

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
	input: {
		backgroundColor: 'rgba(255, 255, 255, 0.4)',
		width: DEVICE_WIDTH - 40,
		height: 40,
		marginHorizontal: 20,
		paddingLeft: 45,
		borderRadius: 20,
		color: '#ffffff',
	},
	inputWrapper: {
		flex: 1,
	},
	inlineImg: {
		position: 'absolute',
		zIndex: 99,
		width: 22,
		height: 22,
		left: 35,
		top: 9,
	},
});
