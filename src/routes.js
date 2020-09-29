import Restaurant from './components/Restaurant.vue'
import Business from './components/Business.vue'
import About from './components/About.vue'

export const routes = [
    { path: '/', alias: '/about', component: About },
    { path: '/business', component: Business },
    { path: '/restaurant', component: Restaurant },
    { path: '*', redirect: '/' }
]