/*
 * @Author: 刘东旭
 * @Date: 2021-01-14 12:40:43
 * @LastEditors: 刘东旭
 * @LastEditTime: 2021-01-14 13:12:58
 * @Description: 
 */
import {createRouter, createWebHistory} from 'vue-router';

import ToRefs from './components/ToRefs.vue'
// import Computed from './components/Computed.vue';
import Readonly from './components/Readonly.vue';
import WatchEffect from './components/WatchEffect.vue';
import Watch from './components/Watch.vue';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{path: '/', component: ToRefs},
		{path: '/computed', component: ()=>import('./components/Computed.vue')},
		{path: '/readonly', component: Readonly},
		{path: '/watchEffect', component: WatchEffect},
		{path: '/watch', component: Watch},
	],
});



export default router;