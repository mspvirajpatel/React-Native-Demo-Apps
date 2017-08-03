import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button
} from 'react-native';

import {
    StackNavigator,
    TabNavigator,
    DrawerNavigator
} from 'react-navigation';

import LoginScreen from './components/ui/LoginScreen'
import SecondScreen from './components/ui/SecondScreen'

export const ModalStack = StackNavigator({
    LoginScreen: {
        screen: LoginScreen,
        navigationOptions: {
            title: "Sign In",
        }
    },
    Profile: {
        screen: SecondScreen,
        navigationOptions: {
            title: "Home"
        }
    },
});

export const ModalStack1 = StackNavigator({
    LoginScreen: {
        screen: LoginScreen,
        navigationOptions: {
            title: "Home"
        }
    },
});


export const ModalStack2 = StackNavigator({
    LoginScreen: {
        screen: LoginScreen,
        navigationOptions: {
            title: "Profile"
        }
    },
});


export const MyApp = DrawerNavigator({
    Login: {
        screen: ModalStack,
    },
    Home: {
        screen: ModalStack1,
    },
    Profile: {
        screen: ModalStack2,
    },
});


export default class App extends React.Component {
    render() {
        console.log('app.js render');
        return (
            <MyApp />
        );
    }
}

