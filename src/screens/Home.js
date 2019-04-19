import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	headline: {
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 20,
		margin: 10,
		width: 200,
	  },
});
export default class Home extends Component {
	render() {
		return (
			<View  style={styles.width}>
				<Text style={styles.headline}>Firebase Database Add and List view</Text>
				<Button
					title="Add an Item"
					onPress={() => this.props.navigation.navigate('AddItem')}
				/>
				<Button
					title="List of Items"
					color="green"
					onPress={() => this.props.navigation.navigate('List')}
				/>
			</View>
		);
	}
}

