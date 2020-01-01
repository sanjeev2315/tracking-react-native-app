//import liraries
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements'
import Spacer from './../components/spacer.js'

// create a component
const AuthForm = ({ headerText, errorMessage, submitText, onSubmit }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	return (
		<>
			<Spacer>
				<Text h3 >{headerText}</Text>
			</Spacer>
			<Spacer />
			<Input label="Email" autoCapitalization="None" autoCorrect={false} value={email} onChangeText={setEmail} />
			<Spacer />
			<Input secureTextEntry label="Password" autoCapitalization="None" autoCorrect={false} value={password} onChangeText={setPassword} />
			<Spacer />
			{
				errorMessage ?
					<Text style={styles.errorMessage}>{errorMessage}</Text> : null
			}
			<Spacer>
				<Button title={submitText} onPress={() => { onSubmit(email, password) }} />
			</Spacer>
		</>
	);
};

// define your styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#2c3e50',
	},
	errorMessage: {
		fontSize: 18,
		fontWeight: 'bold',
		color: 'red',
		marginLeft: 15,
		marginTop: 5
	}
});

//make this component available to the app
export default AuthForm;
