export default {
  commonText: '',
  tenantText: '',
  fetchI18nText: function (locale) {
    this.commonText = require('./assets/i18n/' + locale + '.json')
    this.tenantText = require('./assets/aimu/i18n/' + locale + '.json')
  }
}
