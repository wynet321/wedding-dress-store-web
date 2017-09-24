<template>
  <div class="navigator">
    <div class="place"></div>
    <el-menu theme="light" class="menu" mode="horizontal" router>
      <el-submenu index="1">
        <template slot="title">{{ $commonText.Main.menuCustomer }}</template>
        <el-menu-item index="1-1">{{ $commonText.Main.menuCustomerList }}</el-menu-item>
        <el-menu-item index="1-2">{{ $commonText.Main.menuCustomerMaintenance }}</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">{{ $commonText.Main.menuProduct }}</template>
        <el-menu-item index="2-1">{{ $commonText.Main.menuProductList }}</el-menu-item>
        <el-menu-item index="2-2">{{ $commonText.Main.menuProductMaintenance }}</el-menu-item>
      </el-submenu>
      <el-submenu index="3" >
        <template slot="title">{{ $commonText.Main.menuOrder}}</template>
        <el-menu-item index="3-1">{{ $commonText.Main.menuOrderList }}</el-menu-item>
        <el-menu-item index="3-2">{{ $commonText.Main.menuOrderMaintenance }}</el-menu-item>
      </el-submenu>
      <el-submenu index="4" v-if="false">
        <template slot="title">{{ $commonText.Main.menuAdmin}}</template>
        <el-menu-item index="4-1">{{ $commonText.Main.menuMemberManagement }}</el-menu-item>
        <el-menu-item index="4-2">{{ $commonText.Main.menuWorkFlowManagement }}</el-menu-item>
      </el-submenu>
      <el-menu-item v-if="false" index="5" :visible="false">{{ $commonText.Main.menuTenantManagement}}</el-menu-item>
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
  .el-menu {
    background-color: white;
    padding: 30px 0px;
  }

</style>
