
import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/router/permission'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import i18n from './i18n/i18n.js'
// import VueLazyload from 'vue-lazyload'
import '@/style/reset.scss'

import '@/style/index.scss'
import '@/style/transition.scss'

import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'

import '@/font/iconfont.js'
// import VueLazyloadOptions from '@/pluginConfig/vueLazyload.js'
Vue.use(ElementUI);
Vue.use(VueVideoPlayer /* {
  options: global default options,
  events: global videojs events
} */)


// eslint-disable-next-line

const baseUrl = process.env.BASE_URL

Vue.prototype.$baseUrl = baseUrl

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),

}).$mount('#app', true)
