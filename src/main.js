import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

export const eventBus = new Vue ({
    methods: {
        bodyChoose(cuerpo) {
            this.$emit('cuerpoCambiar', cuerpo)
        }
    }
})

new Vue({
  vuetify,
  theme: {
    dark: true,
  },
  render: h => h(App)
}).$mount('#app')
