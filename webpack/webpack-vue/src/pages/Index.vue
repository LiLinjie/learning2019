<template>
  <div class="container">
    <!--<img :src="bg" alt="">-->
    <img :src="icon" alt="">
    <img src="/static/images/icon.png" alt="">
    <p>做过移动端需求的前端肯定是避免不了处理 1px 细线问题，这个问题的原因就是 UI 对页面美观度的要求越来越高（不要和我说这是 retina 屏的问题）。

      据小生所知好像没有什么兼容性特别好的方案，这里我只是提供两种种相对较好的方案。</p>
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
  }
  p {
    width: 100px;
    .line-camp();
  }
</style>
