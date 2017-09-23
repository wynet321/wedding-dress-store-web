// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import common from './common.js'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(ElementUI)
Vue.use(common)

Vue.prototype.$i18n = common
// common.fetchI18nText('en_US')
common.fetchI18nText('zh_CN')
Vue.prototype.$commonText = common.commonText
Vue.prototype.$tenantText = common.tenantText

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App},
  render: h => h(App)
})
