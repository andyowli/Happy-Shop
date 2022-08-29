import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store/store"
import './assets/js/rem'
import echarts from "./assets/js/echarts"
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '/node_modules/swiper/swiper-bundle.css'
// vue-awesome-swiper版本在4以上,需要单独引入
import Swiper2, { Navigation, Pagination, EffectFade, Autoplay } from 'swiper'
Swiper2.use([Navigation, Pagination, EffectFade, Autoplay])
import { Lazyload } from 'vant'

Vue.use(Lazyload)
Vue.use(VueAwesomeSwiper)

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
