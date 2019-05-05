<template>
  <div class="container">
    Index
  </div>
</template>

<script>
  import icon from '@/assets/images/icon.png'

  export default {
    name: 'index',
    data () {
      return {
        icon,
        msg: ''
      }
    },
    created() {
      this.getMsg()
    },
    methods: {
      getMsg () {
        setTimeout(() => {
          this.msg = 'Hello World'
        }, 17)
      }
    }
  }
</script>

<style scoped lang="less">
  @fontColor: #333;
  div {
    color: @fontColor;
    display: flex;
  }
</style>
