import heroList from './components/hero-list.component'
import heroDetail from './components/hero-detail.component'
import dashboard from './components/dashboard.component'
import notFound from './components/not-found.component'
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const routes = [
    {path: '/', redirect: '/dashboard'},
    {path: '/dashboard', component: dashboard},
    {path: '/heroes', component: heroList},
    {path: '/detail/:id', component: heroDetail, name: 'detail'},
    {path: '*', component: notFound}
];

export const router = new VueRouter({
    mode: 'history',
    routes: routes
});
		
