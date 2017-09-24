<template>
  <div class="login">
    <h1>
      {{ $commonText.Login.titleLogin }}
    </h1>
    <el-form ref="form" :model="form" @submit.prevent="onSubmit">
      <el-form-item>
        <el-input v-model="form.name" :maxlength="20" :placeholder="$commonText.Login.placeHolderUserName" :autofocus="true">
          <template slot="prepend"><img src="../assets/login_username.png"></template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.password" type="password" :maxlength="12" :placeholder="$commonText.Login.placeHolderPassword">
          <template slot="prepend"><img src="../assets/login_password.png"></template>
        </el-input>
      </el-form-item>
      <el-form-item style="text-align: left; padding: 0 26px;">
        <el-checkbox id="remember" name="remember" class="checkbox">{{ $commonText.Login.checkBoxRemember }}</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button v-on:click="okClick" type="primary">{{ $commonText.Login.buttonLogin }}</el-button>
        <!--<el-button v-on:click="cancelClick" type="primary">{{ $commonText.buttonCancel }}</el-button>-->
      </el-form-item>
      <el-form-item style="text-align: right;padding: 0 26px;">
        <a href="" >{{ $commonText.Login.linkForgetPassword }}</a>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import ElCheckbox from '../../node_modules/element-ui/packages/checkbox/src/checkbox.vue'

  export default {
    components: {ElCheckbox},
    data: function () {
      return {
        form: {
          name: '',
          password: ''
        }
      }
    },
    methods: {
      okClick () {
        this.$http.get('http://localhost:8080/store/api/' + this.id).then((response) => {
          this.message = response.data
        })
      },
      cancelClick () {
        return
      },
      changeLocale () {
        if (this.id === '1') {
          this.$i18n.fetchI18nText('en_US')
        } else {
          this.$i18n.fetchI18nText('zh_CN')
        }
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div {
    margin: 1%;
  }
  img {
    height: 30px;
  }
  .el-form {
    width: 100%;
    margin: 0;
    text-align: center;
  }
  .el-input {
    width: 90%;
  }
  .el-button {
    width: 90%;
  }
</style>
