import axios from 'axios'
import jwtDecode from 'jwt-decode'

const axiosInstance = axios.create({
	baseURL: process.env.VUE_APP_DND_API_ENDPOINT
})

axiosInstance.interceptors.request.use(async (config) => {
	if (!localStorage.getItem('jwt')) return config;

	const expired = await checkTokenExpiration();

	if (expired) {
		const newToken = await refreshToken();
		config.headers.Authorization = `Bearer ${newToken}`;
	} else {
		config.headers.Authorization = `Bearer ${localStorage.getItem('jwt')}`;
	}
	return config;
})

async function checkTokenExpiration() {
	const jwt = localStorage.getItem('jwt');

	if (!jwt) return false;

	const decoded = jwtDecode(jwt);

	return decoded.exp < Date.now() / 1000;
}

async function refreshToken() {
	console.log('Refreshing access token');

	const response = await axios
		.post(process.env.VUE_APP_DND_API_ENDPOINT + '/users/refresh-token', {
			refreshToken: localStorage.getItem('refresh_token')
		});

	if (response.status != 200) {
		console.error("Failed to refresh token");
		console.error(response);
	}

	localStorage.setItem('jwt', response.data.token);
	return response.data.token;
}


export default {
	install(Vue) {
		Vue.prototype.$axios = axiosInstance
	}
}