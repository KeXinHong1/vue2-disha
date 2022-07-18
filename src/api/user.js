import request from '@/utils/request'

/**
 * 登录接口
 * @param data
 * @returns {AxiosPromise}
 */
const login = (data) => {
	return request({
		url: '/login',
		method: 'POST',
    data
	})
}

/**
 * getinfo
 */
 const getinfo = () => {
	return request({
		url: '/getinfo',
		method: 'POST',
	})
}
export default {
	login,
	getinfo
}
