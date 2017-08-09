import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Image,
	TouchableOpacity,
	Animated,
	Easing,
    ScrollView,
    Text,
    FlatList

} from 'react-native';

import arrowImg from '../../images/left-arrow.png';

const SIZE = 40;

export default class SecondScreen extends Component {
	constructor() {
		super();

		this.state = {
			isLoading: false,
		};

		this._onPress = this._onPress.bind(this);
		this.growAnimated = new Animated.Value(0);
	}

	_onPress() {

		this.props.navigation.goBack()

		// if (this.state.isLoading) return;
        //
		// this.setState({ isLoading: true });
        //
		// Animated.timing(
		// 	this.growAnimated,
		// 	{
		// 		toValue: 1,
		// 		duration: 300,
		// 		easing: Easing.linear,
		// 	}
		// ).start();
        //
		// setTimeout(() => {
		// 	//Actions.pop();
		// }, 500);
	}

	render() {
		const changeScale = this.growAnimated.interpolate({
			inputRange: [0, 1],
			outputRange: [1, SIZE],
		});

		return (
			<View style={styles.container}>
				{/*<ScrollView>*/}
					{/*<Text style={{fontSize:96}}>Scroll me plz</Text>*/}
					{/*<Image style={styles.image} source={require('../../images/logo.png')} />*/}
					{/*<Image style={styles.image} source={require('../../images/logo.png')} />*/}
					{/*<Image style={styles.image} source={require('../../images/logo.png')} />*/}
					{/*<Image style={styles.image} source={require('../../images/logo.png')} />*/}
					{/*<Image style={styles.image} source={require('../../images/logo.png')} />*/}
					{/*<Text style={{fontSize:96}}>If you like</Text>*/}
					{/*<Image style={styles.image} source={require('../../images/logo.png')} />*/}
					{/*<Image style={styles.image} source={require('../../images/logo.png')} />*/}
					{/*<Image style={styles.image} source={require('../../images/logo.png')} />*/}
					{/*<Image style={styles.image} source={require('../../images/logo.png')} />*/}
					{/*<Image style={styles.image} source={require('../../images/logo.png')} />*/}
					{/*<Text style={{fontSize:96}}>Scrolling down</Text>*/}
					{/*<Image style={styles.image} source={require('../../images/logo.png')} />*/}
					{/*<Image style={styles.image} source={require('../../images/logo.png')} />*/}
					{/*<Image style={styles.image} source={require('../../images/logo.png')} />*/}
					{/*<Image style={styles.image} source={require('../../images/logo.png')} />*/}
					{/*<Image style={styles.image} source={require('../../images/logo.png')} />*/}
					{/*<Text style={{fontSize:96}}>What's the best</Text>*/}
					{/*<Image style={styles.image} source={require('../../images/logo.png')} />*/}
					{/*<Image style={styles.image} source={require('../../images/logo.png')} />*/}
					{/*<Image style={styles.image} source={require('../../images/logo.png')} />*/}
					{/*<Image style={styles.image} source={require('../../images/logo.png')} />*/}
					{/*<Image style={styles.image} source={require('../../images/logo.png')} />*/}

				{/*</ScrollView>*/}
				<FlatList
					data={[
                        {key: 'Devin'},
                        {key: 'Jackson'},
                        {key: 'James'},
                        {key: 'Joel'},
                        {key: 'John'},
                        {key: 'Jillian'},
                        {key: 'Jimmy'},
                        {key: 'Julie'},
                    ]}
					renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
				/>

				<TouchableOpacity onPress={this._onPress}
					style={styles.button}
					activeOpacity={1}>
					<Image style={styles.image} source={arrowImg} />
				</TouchableOpacity>
				<Animated.View style={[ styles.circle, {transform: [{scale: changeScale}]} ]} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 20,
		alignItems: 'flex-end',
		justifyContent: 'flex-end',
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		width: SIZE,
		height: SIZE,
		borderRadius: 100,
		zIndex: 99,
		backgroundColor: '#F035E0',
	},
	circle: {
		height: SIZE,
		width: SIZE,
		marginTop: -SIZE,
		borderRadius: 100,
		backgroundColor: '#F035E0',
	},
	image: {
		width: 24,
		height: 24,
	},
	item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});