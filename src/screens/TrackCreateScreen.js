//import liraries
//import '../_mockLocation'
import React, { useCallback, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, withNavigationFocus } from 'react-navigation'
import { Text } from 'react-native-elements'
import Map from './../components/map'
import { Context as LocationContext } from './../context/LocationContext'
import useLocation from './../hooks/useLocation'
import TrackForm from './../components/trackForm'
import { FontAwesome } from '@expo/vector-icons'

// create a component
const TrackCreateScreen = ({ isFocused }) => {
	const { state: { recording }, addLocation } = useContext(LocationContext)

	const callback = useCallback((location) => {
		addLocation(location, recording)
	}, [recording])

	const [err] = useLocation(isFocused | recording, callback)

	return (
		<SafeAreaView forceInset={{ top: 'always' }}>
			<Text h2 >Create a Track</Text>
			<Map />
			{err ? <Text>Please Enable Location Services</Text> : null}

			<TrackForm />
		</SafeAreaView>
	);
};

TrackCreateScreen.navigationOptions = () => {
	return {
		title: 'Add track',
		tabBarIcon: <FontAwesome name="plus" size={20} />
	}
}

// define your styles
const styles = StyleSheet.create({

});

//make this component available to the app
export default withNavigationFocus(TrackCreateScreen);
