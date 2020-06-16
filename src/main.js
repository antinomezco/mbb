import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import vuetify from './plugins/vuetify';
import { rtdbPlugin } from 'vuefire';
import {routes} from './routes';


Vue.config.productionTip = false

Vue.use(rtdbPlugin)
Vue.use(VueRouter) //routing instead of components

export const eventBus = new Vue ({
    methods: {
        bodyChoose(cuerpo) {
            this.$emit('cuerpoCambiar', cuerpo)
        }
    }
})

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  vuetify,
  router,
  theme: {
    dark: true,
  },
  render: h => h(App)
}).$mount('#app')
