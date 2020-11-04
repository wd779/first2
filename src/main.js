import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant.js'
import '../src/assets/rem' // rem适配
Vue.config.productionTip = false
import common from "./common/filters/index";

Object.keys(common).forEach(key => {
  Vue.filter(key, common[key]);
});

// 全局路由守卫
router.beforeEach((to, from, next) => {
  if (to.name == 'Login') {
    if (sessionStorage.getItem('token')) {
      next('/home')
    }
    next()
  }
  next()
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
