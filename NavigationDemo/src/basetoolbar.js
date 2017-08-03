import React from 'react';
import {
    StyleSheet,
    Button,
} from 'react-native';


export const baseNavigationToolbar = {
    headerTitleStyle: {
        /* */
        color: '#ffffff'
    },
    headerStyle: {
        /* */
        backgroundColor: '#000000'
    },
    headerTintColor: {
        /* */
    },
    // drawerIcon: ({ tintColor }) => (
    //     <Image
    //         source={require('../../images/logo.png')}
    //         style={[{width : 20},{height : 20},{tintColor: tintColor}]}
    //     />
    // ),

    headerLeft: <Button onPress={() => this.props.navigation.navigate('Profile')} title="Open" color="#ffffff" accessibilityLabel="Tap on Me"/>
};
