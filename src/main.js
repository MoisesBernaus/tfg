import { createApp } from 'vue'
import App from './App.vue'
import './plugins/bootstrap-vue'
import Vue from 'vue'

new Vue({
    render: h => h(App),
  }).$mount('#app')