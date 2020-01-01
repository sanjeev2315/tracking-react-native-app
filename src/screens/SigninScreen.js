//import liraries
import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationEvents } from 'react-navigation'
import { Context as AuthContext } from './../context/AuthContext'
import AuthForm from './../components/authForm'
import NavLink from './../components/navLink'
// create a component
const SigninScreen = () => {
	const { state, signin, clearErrorMessage } = useContext(AuthContext)
	return (
		<View style={styles.container}>
			{<NavigationEvents
				onWillBlur={clearErrorMessage}
			/>}
			<AuthForm headerText='Sign In for tracker' errorMessage={state.errorMessage} submitText='Sign in' onSubmit={signin} />
			<NavLink linkText='Dont have an account? Please sign up' navigationText='Signup' />

		</View>
	);
};
SigninScreen.navigationOptions = () => {
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
export default SigninScreen;
