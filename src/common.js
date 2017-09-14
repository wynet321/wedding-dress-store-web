export default {
  i18nText: '',
  fetchI18nText: function (locale) {
    this.i18nText = require('./assets/i18n/' + locale + '.json')
  }
}
