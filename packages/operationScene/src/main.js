import Vue from 'vue'
import App from './App.vue'
import { TestButton } from '@test/components'

// 全局注册组件
Vue.component('TestButton', TestButton)

new Vue({
  render: h => h(App)
}).$mount('#app')