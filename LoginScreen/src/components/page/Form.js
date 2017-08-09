import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
import {
	StyleSheet,
	KeyboardAvoidingView,
	View,
	ActivityIndicator,
	TouchableOpacity,
	Image
} from 'react-native';

import UserInput from '../ui/UserInput';

import validate from '../ui/validate'
import usernameImg from '../../images/username.png';
import passwordImg from '../../images/password.png';
import eyeImg  from '../../images/eye_black.png';
import Buttons from "../ui/button";

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPass: true,
            press: false,
            email: '',
            emailError: '',
            password: '',
            passwordError: ''
        };
        this.showPass = this.showPass.bind(this);
    }

    register = () => {
        const emailError = validate('email', this.state.email)
        const passwordError = validate('password', this.state.password)


        this.setState({
            emailError: emailError,
            passwordError: passwordError
        });

        if (!emailError && !passwordError) {
            alert('Details are valid!')
        }
    }

	showPass() {
  this.state.press === false ? this.setState({ showPass: false, press: true }) :this.setState({ showPass: true, press: false });
  }

	render() {
		return (
			<KeyboardAvoidingView behavior='padding'
				style={styles.container}>

                <View style={styles.new}>

                    <UserInput source={usernameImg}
                               placeholder='Username'
                               autoCapitalize={'none'}
                               returnKeyType={'done'}
                               autoCorrect={false}
                               onChangeText={value => this.setState({email: value.trim()})}
                               onBlur={() => {
                                   this.setState({
                                       emailError: validate('email', this.state.email)
                                   })
                               }}
                               error={this.state.emailError}/>
                    <UserInput source={passwordImg}
                               secureTextEntry={this.state.showPass}
                               placeholder='Password'
                               returnKeyType={'done'}
                               autoCapitalize={'none'}
                               autoCorrect={false}
                               onChangeText={value => this.setState({password: value.trim()})}
                               onBlur={() => {
                                   this.setState({
                                       passwordError: validate('password', this.state.password)
                                   })
                               }}
                               error={this.state.passwordError}
                    />
                    <Buttons text={'Sign In'} onPress={this.register} />

                    {/*<Button style={styles.buttonV}*/}
                        {/*title='Register'*/}
                        {/*onPress={() => this.register()}/>*/}

                </View>
			</KeyboardAvoidingView>
		);
	}
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
       // backgroundColor : 'red',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    new :{
       // backgroundColor : 'blue',
        marginHorizontal:5,
        marginVertical:15,
    },
    buttonV: {
        backgroundColor: 'white',
        height: 40,
        borderRadius: 20,
        zIndex: 100,
        width: 125,
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


