//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Spacer = ({ children }) => {
	return (
		<View style={styles.spacer}>
			{children}
		</View>
	);
};

// define your styles
const styles = StyleSheet.create({
	spacer: {
		margin: 15
	},
});

//make this component available to the app
export default Spacer;
