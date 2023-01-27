import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/about",
		name: "About",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/About.vue"),
	},
	{
		path: "/account",
		name: "Account",
		component: () => import("../views/Account.vue"),
		meta: {
			requiresAuth: true
		}
	},
	{
		path: "/account/login",
		name: "Login",
		component: () => import("../views/Login.vue")
	},
	{
		path: "/player",
		name: "Player",
		component: () => import("../views/Player.vue"),
		meta: {
			requiresAuth: true
		}
	},
	{
		path: "/gamemaster",
		name: "Gamemaster",
		component: () => import("../views/Gamemaster.vue"),
		meta: {
			requiresAuth: true
		}
	},
	{
		path: "/tv",
		name: "Tv",
		component: () => import("../views/Tv.vue"),
	},
	{
		path: "/admin",
		name: "Admin",
		component: () => import("../views/Admin.vue"),
	},
	{
		path: "/admin/items",
		name: "Items",
		component: () => import("../views/Items.vue"),
	},
	{
		path: "/admin/characters",
		name: "Characters",
		component: () => import("../views/Characters.vue"),
	}
];

const router = new VueRouter({
	routes,
});

router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requiresAuth)) {
		// this route requires auth, check if logged in
		// if not, redirect to login page.

		if (!localStorage.getItem('jwt')) {
			next({ name: 'Login', query: { redirect: to.path } })
		} else {
			next() // go to wherever I'm going
		}
	} else {
		next() // does not require auth, make sure to always call next()!
	}
})

export default router;
