<template>
  <div class="main">
    <el-row class="compHeader">
      <el-col :span="2" style="text-align: left; padding-left: 10px;">
        <a href="http://www.iambrclasse.com.cn">
          <img src="../assets/aimu/logo.gif" :alt="$tenantText.Main.imageLogoAlt" :title="$tenantText.Main.imageLogoAlt"
               style="height: 80px;">
        </a>
      </el-col>
      <el-col :span="21" class="compNavigator">
        <compNavigator/>
      </el-col>
      <el-col :span="1" class="exit"><a href="">{{ $commonText.Main.linkLogout }}</a></el-col>
    </el-row>
    <el-row style="height: 15px; padding-top: 1px;">
      <hr>
    </el-row>
    <el-row class="compContent">
      <compContent/>
    </el-row>
    <el-row class="compFooter">
      <compFooter/>
    </el-row>
    <el-dialog :visible.sync="dialogVisible" :modal="true" :close-on-click-modal="true" :close-on-press-escape="true"
               size="tiny">
      <compLogin/>
    </el-dialog>
  </div>
</template>

<script>
  import ElCol from 'element-ui/packages/col/src/col'
  import compLogin from './Login.vue'
  import compNavigator from './Navigator.vue'
  import compContent from './Content.vue'
  import compHeader from './Header.vue'
  import compFooter from './Footer.vue'

  export default {
    components: {
      compNavigator: compNavigator,
      ElCol,
      compLogin: compLogin,
      compHeader: compHeader,
      compFooter: compFooter,
      compContent: compContent
    },
    name: 'main',
    data () {
      return {
        dialogVisible: true
      }
    },
    methods: {}
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main {
    width: 1000px;
    height: 100%;
  }

  .compHeader {
    height: 80px;
  }

  .compNavigator {
    height: 100%;
  }
  .exit{
    height: 100%;
    padding-top: 60px;
  }

  .compContent {
    height: 500px;
  }

  .compFooter {
    height: 120px;
  }

</style>
