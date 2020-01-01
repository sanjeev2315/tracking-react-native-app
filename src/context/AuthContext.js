import createDataContext from './createDataContext'
import api from './../api/tracker'
import { AsyncStorage } from 'react-native'
import { navigate } from './../navigationRef'

const authReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_ERROR':
			return {
				...state,
				errorMessage: action.payload
			}
		case 'SIGN_IN':
			return {
				token: action.payload,
				errorMessage: ''
			}
		case 'SIGN_OUT':
			return {
				token: '',
				errorMessage: ''
			}
		case 'CLEAR_ERROR_MESSAGE':
			return {
				...state,
				errorMessage: ''
			}
		default:
			return state
	}
}

const signin = dispatch => async (email, password) => {
	try {
		const response = await api.post('/signin', { email, password })
		await AsyncStorage.setItem('token', response.data.token)
		dispatch({ type: 'SIGN_IN', payload: response.data.token })
		navigate('TrackList')
	} catch (err) {
		dispatch({ type: 'ADD_ERROR', payload: 'Something went wrong with sign in' })
	}
}

const signup = dispatch => async (email, password) => {
	try {
		const response = await api.post('/signup', { email, password })
		await AsyncStorage.setItem('token', response.data.token)
		dispatch({ type: 'SIGN_IN', payload: response.data.token })
		navigate('TrackList')
	} catch (err) {
		dispatch({ type: 'ADD_ERROR', payload: 'Something went wrong with sign up' })
	}
}

const clearErrorMessage = (dispatch) => {
	return () => {
		dispatch({ type: 'CLEAR_ERROR_MESSAGE' })
	}
}

const tryAutoSignin = (dispatch) => {
	return async () => {
		const token = await AsyncStorage.getItem('token')
		if (token) {
			dispatch({ type: 'SIGN_IN', payload: token })
			navigate('TrackList')
		}
		else {
			navigate('Signup')
		}
	}
}

const signout = (dispatch) => {
	return async () => {
		await AsyncStorage.removeItem('token')
		dispatch({ type: 'SIGN_OUT' })
		navigate('Signup')
	}
}
export const { Provider, Context } = createDataContext(authReducer, {
	signin, signout, signup, clearErrorMessage, tryAutoSignin
}, { token: null, errorMessage: '' })