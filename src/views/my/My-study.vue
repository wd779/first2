<template>
  <div>
    <!-- 头部组件 -->
    <app-header>
      <template>
        <!-- <div slot="left"></div> -->
        <div slot="title">我的学习</div>
        <div slot="right">
          <van-icon name="coupon-o" />
        </div>
      </template>
    </app-header>
    <!-- 滚动标签栏 -->
    <van-tabs>
      <van-tab v-for="index in 8" :title="'标签 ' + index" :key="index">内容 {{ index }}</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import appHeader from "../../components/AppHeader.vue";
export default {
  // 组件名称
  name: "",
  // 组件参数 接收来自父组件的数据
  props: [],
  // 局部注册的组件
  components: {
    appHeader
  },
  // 组件状态值
  data() {
    return {};
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
  mounted() {}
};
</script> 

<style scoped lang="scss">
</style>
