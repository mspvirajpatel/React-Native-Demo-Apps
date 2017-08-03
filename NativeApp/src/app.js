import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

import Main from './components/ui/Main';

export default class App extends React.Component {
    render() {
        console.log('app.js render');
        return (
            <View style={styles.container}>
                <Main />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#999999',
    }
});
