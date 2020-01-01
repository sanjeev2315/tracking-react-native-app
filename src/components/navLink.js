import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Spacer from './../components/spacer.js'
import {withNavigation} from 'react-navigation'

const NavLink = ({navigation, linkText, navigationText }) => {	
	return (
		<>
			<Spacer>
				<TouchableOpacity onPress={() => navigation.navigate(navigationText)}>
					<Text style={styles.link} >
						{linkText}
					</Text>
				</TouchableOpacity>
			</Spacer>
		</>
	)
	}
	const styles = StyleSheet.create({
		link: {
			fontSize: 18,
			color: 'blue',
			margin: 5
		}
	})
	export default withNavigation(NavLink)