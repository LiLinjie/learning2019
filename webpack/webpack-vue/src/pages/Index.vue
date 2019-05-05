<template>
  <div class="container">
    <img :src="bg" alt="">
    <img :src="icon" alt="">
    <img src="/static/images/icon.png" alt="">
  </div>
</template>

<script>
import icon from '@/assets/images/icon.png';
import bg from '@/assets/images/bg.png';

export default {
  name: 'index',
  data () {
    return {
      icon,
      msg: '',
      bg,
    };
  },
  created () {
    this.getMsg();
  },
  methods: {
    getMsg () {
      setTimeout(() => {
        this.msg = 'Hello World';
      }, 17);
    },
  },
};
</script>

<style scoped lang="less">
  @fontColor: #333;
  div {
    color: @fontColor;
    display: flex;
  }
</style>
