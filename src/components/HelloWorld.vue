<template>
  <div class="hello">
    {{a}}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      a:'xxx',
      msg: 'Welcome to Your Vue.js App',
    }
  },
  methods:{
    alerts(res){
      this.a = res
      // alert('我调用了')
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
</style>
