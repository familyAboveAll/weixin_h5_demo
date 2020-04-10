import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  Search,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Lazyload,
  Skeleton
} from 'vant';
import 'lib-flexible'

Vue.config.productionTip = false

Vue.use(Search)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload)
Vue.use(Skeleton)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
