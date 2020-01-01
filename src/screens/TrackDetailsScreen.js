//import liraries
import React, { useContext } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Context as TrackContext } from './../context/TrackContext'
import MapView, { Polyline } from 'react-native-maps'


// create a component
const TrackDetailsScreen = ({ navigation }) => {
	const { state } = useContext(TrackContext)
	const _id = navigation.getParam('_id')
	const track = state.find((item) => item._id === _id)
	const initialCords = track.locations[0].coords
	return (
		<>
			<Text style={{ fontSize: 48 }}>{track.name}</Text>
			<MapView style={styles.map} initialRegion={{
				longitudeDelta: 0.01,
				latitudeDelta: 0.01,
				...initialCords
			}}>
				<Polyline coordinates={track.locations.map(loc => loc.coords)} />
			</MapView>
		</>

	);
};

// define your styles
const styles = StyleSheet.create({
	map: { height: 300 }
});

//make this component available to the app
export default TrackDetailsScreen;
