//import liraries
import React, { useContext } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements'
import Spacer from './../components/spacer'
import { Context as AuthContext } from './../context/AuthContext'
import { SafeAreaView } from 'react-navigation'
import { FontAwesome } from '@expo/vector-icons'

// create a component
const AccountScreen = () => {
	const { signout } = useContext(AuthContext)
	return (
		<SafeAreaView forceInset={{ top: 'always' }}>
			<Text style={{ fontSize: 30 }}>AccountScreen</Text>
			<Spacer>
				<Button title="Sign Out" onPress={signout}></Button>
			</Spacer>
		</SafeAreaView>
	);
};
AccountScreen.navigationOptions = () => {
	return {
		title: 'Account',
		tabBarIcon: <FontAwesome name="gear" size={20} />
	}
}

// define your styles
const styles = StyleSheet.create({

});

//make this component available to the app
export default AccountScreen;
