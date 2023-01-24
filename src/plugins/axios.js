import axios from 'axios'

const axiosInstance = axios.create({
	baseURL: process.env.VUE_APP_DND_API_ENDPOINT
})

export default {
	install(Vue) {
		Vue.prototype.$axios = axiosInstance
	}
}