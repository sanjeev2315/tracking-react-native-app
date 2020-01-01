//import liraries
import React, { useContext } from 'react';
import { NavigationEvents } from 'react-navigation'
import { Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements'
import { Context as TrackContext } from './../context/TrackContext'

// create a component
const TrackListScreen = ({ navigation }) => {
	const { state, fetchTracks } = useContext(TrackContext)
	console.log(state)
	return (
		<>
			<NavigationEvents onWillFocus={fetchTracks} />
			<FlatList data={state}
				keyExtractor={(item) => item._id}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity onPress={() => {
							navigation.navigate('TrackDetails', { _id: item._id })
						}}>
							<ListItem chevron title={item.name} />
						</TouchableOpacity>
					)
				}}
			/>
		</>

	);
};

TrackListScreen.navigationOptions = () => {
	return {
		title: 'Tracks',
	}
}

// define your styles
const styles = StyleSheet.create({

});

//make this component available to the app
export default TrackListScreen;
