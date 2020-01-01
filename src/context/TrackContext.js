import createDataContext from './createDataContext'
import trackerApi from './../api/tracker'

const locationReducer = (state, action) => {
	switch (action.type) {
		case 'fetch_tracks':
			return action.payload
		case 'default':
			return state
	}
}

const fetchTracks = (dispatch) => {
	return async () => {
		const response = await trackerApi.get('/tracks')
		dispatch({ type: 'fetch_tracks', payload: response.data })
	}
}

const createTrack = (dispatch) => {
	return async (name, locations) => {
		await trackerApi.post('/tracks', { name, locations })
	}
}



export const { Provider, Context } = createDataContext(locationReducer, {
	fetchTracks, createTrack
}, [])