import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'; //import the routes
import MusicApp from './components/MusicApp.vue';
import gallery from './components/gallery.vue';
import artist from './components/artist.vue';
import error from './components/error.vue';

Vue.config.productionTip = false

Vue.use(VueRouter);

//we declare our routes follow the next example
//in the rout /AppMusic named home open this AppMusic component
const routes = [
	{ path: '/', redirect: '/MusicApp' },
	{ path: '/MusicApp', name: 'MusicApp', component: MusicApp  },
	{ path: '/gallery', name: 'gallery', component: gallery },
	{ path: '/artist', name: 'artist', component: artist },
	{ path: '*', name: 'error', component: error }
];

//this is the constant that needs to load the code below
const router = new VueRouter({ routes, mode: 'history' });

new Vue({
	router, // don't forget
  	render: h => h(App),
}).$mount('#app')
