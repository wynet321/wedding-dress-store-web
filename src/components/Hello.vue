<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-input v-model="id"/>
    <br>
    <el-button v-on:click="okClick" type="primary">OK</el-button>
    <br> {{ message }}
  </div>
</template>

<script>
  export default {
    name: 'hello',
    props: {
      message: 'aaa',
      id: ''
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
