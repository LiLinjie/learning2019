import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// 异步加载模块
const Index = async (resolve) => {
  const module = await import('@/pages/Index')
    .catch(e => console.error(`模块加载错误: ${e}`));
  resolve(module);
};

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
  ],
});
