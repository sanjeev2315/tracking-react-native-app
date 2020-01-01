//import liraries
import React, { useContext, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationEvents } from 'react-navigation'
import { Context as AuthContext } from './../context/AuthContext'
import AuthForm from './../components/authForm'
import NavLink from './../components/navLink'

// create a component
const SignupScreen = () => {
	const { state, signup, clearErrorMessage } = useContext(AuthContext)
	return (
		<View style={styles.container}>
			{<NavigationEvents
				onWillBlur={clearErrorMessage}
			/>}
			<AuthForm headerText='Sign Up for tracker' errorMessage={state.errorMessage} submitText='Sign up' onSubmit={signup} />
			<NavLink linkText='Already have an account? Please sign in' navigationText='Signin' />

		</View>
	);
};
SignupScreen.navigationOptions = () => {
	return { header: null }
}

// define your styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		marginBottom: 150
	},



});

//make this component available to the app
export default SignupScreen;
