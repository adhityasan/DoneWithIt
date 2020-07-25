import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
	return (
		<View style={styles.container}>
			<Text>Open up App.js to start working on your app!</Text>
			<StatusBar />
		</View>
	);
}

const $white = '#fff';
const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: $white,
		flex: 1,
		justifyContent: 'center',
	},
});
