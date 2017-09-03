// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
// import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
/* new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
}) */
Vue.use(VueAxios, axios)
new Vue({
  el: '#app1',
  data: {
    message: 'aaa',
    id: ''
  },
  methods: {
    okClick: function () {
      this.$http.get('http://localhost:8080/store/api/' + this.id).then((response) => {
        this.message = response.data
      })
    }
  }
})
