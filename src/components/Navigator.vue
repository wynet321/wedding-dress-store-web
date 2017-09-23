<template>
  <div class="navigator">
    <el-menu theme="light" class="menu" mode="horizontal">
      <el-submenu index="1">
        <template slot="title">{{ $commonText.Main.menuProduct}}</template>
        <el-menu-item-group title="分组一">
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">{{ $commonText.Main.menuOrder}}</el-menu-item>
      <el-menu-item index="3">{{ $commonText.Main.menuAdmin}}</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'navigator',
    methods: {}
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navigator {
    height: 100%;
    padding: 0;
    margin: 0;
  }

  .menu {
    height: 100%;
  }
</style>
