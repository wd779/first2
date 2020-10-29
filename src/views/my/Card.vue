<template>
  <div>
    <!-- 头部组件 -->
    <app-header>
      <template>
        <div slot="title">我的学习卡</div>
        <div style="font-size:0.14rem;" slot="right">学习卡兑换</div>
      </template>
    </app-header>
    <!-- 内容 -->
    <div class="pack-card">
      <div class="empty">
        <img src="https://wap.365msmk.com/img/empty.0d284c2e.png" alt />
        <p>暂无兑换记录</p>
      </div>
    </div>
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
  components: { appHeader },
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
.pack-card {
  width: 100%;
  box-sizing: border-box;
  padding: 0.8rem;
}
.empty {
  flex-direction: column;
  text-align: center;
}
img {
  width: 40vw;
  height: 40vw;
}
p {
  font-size: 4vw;
  color: #8c8c8c;
  margin-top: 5.33333vw;
}
</style>
