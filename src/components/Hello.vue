<template>
  <div class="hello">
    <h1>
      <a href="http://www.baidu.com">
        <img src="assert/logo.gif" :alt="this.$i18nText.logo_alt" :title="this.$i18nText.logo_alt">
      </a>
    </h1>
    <el-input v-model="id"/>
    <br>
    <el-button v-on:click="okClick" type="primary">OK</el-button>
    <el-button v-on:click="changeLocale()" type="primary">Change</el-button>
    <br>{{ message }}
    <br>{{ text.logo_alt }}
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    data () {
      return {
        message: 'aaa',
        id: '',
        text: ''
      }
    },
    methods: {
      okClick () {
        this.$http.get('http://localhost:8080/store/api/' + this.id).then((response) => {
          this.message = response.data
        })
      },
      changeLocale () {
        this.$locale = 'zh_CN'
        this.fetchI18nText()
        alert(this.$i18nText.logo_alt)
        this.text = this.$i18nText
      }
    },
    beforeCreate: function () {
      if (this.$locale === undefined) {
        Vue.prototype.$locale = 'en_US'
      }
      this.fetchI18nText()
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  el-input {
    maxlength: 10;
  }
</style>
