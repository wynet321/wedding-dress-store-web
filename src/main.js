// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App},
  render: h => h(App)
})

Vue.prototype.$locale = 'en_US'

// new Vue({
//   el: '#app1',
//   router,
//   data: {
//     message: 'aaa',
//     id: ''
//   },
//   render: h => h(App),
//   methods: {
//     okClick: function () {
//       this.$http.get('http://localhost:8080/store/api/' + this.id).then((response) => {
//         this.message = response.data
//       })
//     }
//   }
// })
