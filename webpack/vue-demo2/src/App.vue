<template>
  <div>{{str}}</div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        str: 'Hello world！'
      }
    }
  }
</script>

<style scoped>
  div {
    color: red;
    display: flex;
    transform: translate(50px);
  }
</style>
