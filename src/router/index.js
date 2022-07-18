import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/login',
		name: 'login',
		component: () => import(/* webpackChunkName: "about" */ '../views/login/index.vue'),
	},
	{
		path: '/',
		name: 'index',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '@/layout/index.vue'),
		children: [
			{
				path: '/',
				name: 'kzt',
				component: () => import(/* webpackChunkName: "about" */ '../views/kzt/kzt.vue'),
			},
			{
				path: '/goods/list',
				name: 'goodslist',
				component: () => import(/* webpackChunkName: "about" */ '../views/goods/list.vue'),
			},
			{
				path: '*',
				name: '404',
				component: () => import(/* webpackChunkName: "about" */ '../views/404/404.vue'),
			},
		],
	},
]

const router = new VueRouter({
	routes,
})

router.beforeEach((to, from, next) => {
	if (to.name === 'login' && window.localStorage.getItem('token')) {
		return next({ name: 'homelayout' })
	}
	if ((to.name !== 'login' && !window.localStorage.getItem('token')) || window.localStorage.getItem('token') === 'undefined') {
		return next({ name: 'login' })
	}
	next()
})

export default router
