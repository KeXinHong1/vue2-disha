import UserApi from '@/api/user'
import { setItem, getItem } from '@/utils/storage'
export default {
	namespaced: true,
	state: {
		token: getItem('token') || '',
		userinfo: getItem('userinfo') || '',
	},
	getters: {},
	mutations: {
		setToken(state, token) {
			state.token = token
			setItem('token', token)
		},
		setinfo(state, userinfo) {
			state.userinfo = userinfo
			setItem('userinfo', userinfo)
		},
	},
	actions: {
		async getlogin({ commit }, loginform) {
			const token = await UserApi.login(loginform)
			console.log('login=>', token.data.token)
			commit('setToken', token.data.token)
			return token.data.token
		},
		async gitinfo({ commit }) {
			const userinfo = await UserApi.getinfo()
			console.log('userinfo=>', userinfo.data)
			commit('setinfo', userinfo.data)
			return userinfo.data
		},
	},
	modules: {},
}
