export default {
  install (Vue, options) {
    Vue.prototype.fetchI18nText = function () {
      this.$http.get('http://localhost:8081/static/i18n/' + this.$locale + '.json').then((response) => {
        Vue.prototype.$i18nText = response.data
      })
    }
  }
}
