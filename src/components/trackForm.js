import React, { useContext } from 'react'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from './spacer'
import { Context as LocationContext } from './../context/LocationContext'
import { StyleSheet } from 'react-native';
import useSaveTrack from './../hooks/useSaveTrack'

const TrackForm = () => {
	const { state: { name, recording, locations }, startRecording, stopRecording, changeName } = useContext(LocationContext)
	const [saveTrack] = useSaveTrack()
	return (
		<>
			<Spacer>
				<Input value={name} onChangeText={changeName} placeholder="Enter track name" />
			</Spacer>
			<Spacer>
				{recording ? <Button style={styles.stop} title="Stop Recording" onPress={stopRecording} /> :
					<Button title="Start Recording" onPress={startRecording} />
				}
			</Spacer>
			<Spacer>
				{!recording && locations.length > 0 ? <Button title="Save" onPress={saveTrack} /> : null}
			</Spacer>
		</>
	)

}
const styles = StyleSheet.create({
	stop: {
		backgroundColor: 'red',
		color: 'red'
	}
});
export default TrackForm