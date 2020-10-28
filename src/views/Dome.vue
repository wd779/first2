<template>
  <div>
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/Appointment">课程</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/">约课记录</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/practice">练习</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  // 组件名称
  name: "",
  // 组件参数 接收来自父组件的数据
  props: [],
  // 局部注册的组件
  components: {},
  // 组件状态值
  data() {
    return {
      active: 0
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {},
  /**
   * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
   */
  created() {},
  mounted() {},
  //  路由组件首位
  beforeRouteEnter: (to, from, next) => {
    if (!sessionStorage.getItem("token")) {
      next("/login");
    }
    next();
  }
};
</script> 

<style scoped lang="scss">
</style>
