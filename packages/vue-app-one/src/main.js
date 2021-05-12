import Vue from 'vue'
import App from './App.vue'
import all from 'test-lib-ts-one'




// 通过 `i18n` 选项创建 Vue 实例
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
})
.$mount('#app')
