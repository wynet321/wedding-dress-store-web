<template>
  <div class="content">
    <el-row>
      <el-col :span="14" style="text-align: right;">
        <el-input placeholder="客户姓名、订单编号或商品编号" autofocus style="width: 50%;"></el-input>
      </el-col>
      <el-col :span="10" style="text-align: left; padding-left: 5px;">
        <el-button type="primary">搜索</el-button>
      </el-col>
    </el-row>
    <el-row style="padding-top: 10px;">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="120">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="120">
        </el-table-column>
        <el-table-column
          prop="contact"
          label="联系方式"
          width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          width="280"></el-table-column>
        <el-table-column
          prop="status"
          label="状态">
        </el-table-column>
      </el-table>
    </el-row>

  </div>
</template>

<script>
  import ElButton from '../../node_modules/element-ui/packages/button/src/button.vue'
  import ElRow from 'element-ui/packages/row/src/row'
  import ElCol from 'element-ui/packages/col/src/col'

  export default {
    components: {
      ElCol,
      ElRow,
      ElButton
    },
    name: 'compContent',
    data () {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          contact: '1361234567',
          address: '上海市普陀区金沙江路 1518 弄',
          status: '今日取纱'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          contact: '1361234567',
          address: '上海市普陀区金沙江路 1517 弄',
          status: '今日取纱'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          contact: '1361234567',
          address: '上海市普陀区金沙江路 1519 弄',
          status: '今日取纱'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          contact: '1361234567',
          address: '上海市普陀区金沙江路 1516 弄',
          status: '今日取纱'
        }]
      }
    },
    methods: {
      okClick () {
        this.$http.get('http://localhost:8080/store/api/' + this.id).then((response) => {
          this.message = response.data
        })
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content {
    width: 100%;
    height: 100%;
  }

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
</style>
