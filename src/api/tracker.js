import axios from 'axios'
import { AsyncStorage } from 'react-native'

const api = axios.create({
	baseURL: 'http://f558e1b4.ngrok.io'
})
api.interceptors.request.use(
	async (config) => {
		const token = await AsyncStorage.getItem('token')
		if (token) {
			config.headers.Authorization = `Bearer ${token}`
		}
		return config
	},
	(err) => {
		return Promise.reject(err)
	}
)

export default api
