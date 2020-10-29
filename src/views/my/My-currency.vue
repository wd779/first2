<template>
  <div class="box">
    <!-- 头部组件 -->
    <app-header>
      <template>
        <div slot="title">我的余额</div>
        <div style="font-size:0.14rem;" slot="right">余额明细</div>
      </template>
    </app-header>
    <div class="top">
      我的余额
      <span>0 学习币</span>
    </div>
    <ul class="ul-box">
      <li>
        <h4>10000.00学习币</h4>
        <p>￥ 10000.00</p>
      </li>
      <li>
        <h4>10000.00学习币</h4>
        <p>￥ 10000.00</p>
      </li>
    </ul>
    <div class="div-position">
      <p class="p-title">
        充值说明
        <span></span>
      </p>
      <div class="div-foot">
        1、学习币是网校中专有的一种虚拟货币，大家可以用学习币购买网校内的任何虚拟商品，比如课程、辅导答疑。
        2、充值后没有使用期限,但无法提现,退款和转赠他人。
        3、如遇到无法充值、充值失败等问题,请联系客服。
      </div>
    </div>
    <van-button color="#eb6100" block>立即充值</van-button>
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
.box {
  width: 100%;
  .top {
    width: 100%;
    height: 0.6rem;
    padding: 0 0.15rem;
    box-sizing: border-box;
    color: #333;
    background-color: #fff;
    line-height: 0.6rem;
    span {
      color: #dc692a;
    }
  }
  .ul-box {
    width: 100%;
    padding: 0.15rem 0.12rem 0;
    box-sizing: border-box;
    li {
      width: 100%;
      height: 0.56rem;
      background-color: #fff;
      border-radius: 0.15rem;
      margin-bottom: 0.15rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 0.18rem;
      box-sizing: border-box;
      h4 {
        font-size: 3.73333vw;
        font-family: PingFang SC;
        font-weight: 400;
        color: #333;
      }
      p {
        font-size: 3.46667vw;
        font-family: PingFang SC;
        font-weight: 500;
        color: #e90000;
      }
    }
  }
  .div-position{
    position: fixed;
    bottom: 0.43rem;
  }
  .p-title {
    width: 100%;
    height: 0.45rem;
    line-height: 0.45rem;
    font-size: 4vw;
    font-family: PingFang SC;
    font-weight: 700;
    background-color: #fff;
    position: relative;
    padding: 0 0.2rem;
    box-sizing: border-box;
    span {
      position: absolute;
      left: 0;
      top: calc(50% - 1.06667vw);
      width: 0.4vw;
      height: 2.13333vw;
      background: #dc692a;
      border-radius: 0.26667vw;
    }
  }
  .div-foot {
    background-color: #fff;
    position: relative;
    padding-left: 5.33333vw;
    font-size: 3.2vw;
    font-family: PingFang SC;
    font-weight: 300;
    color: #666;
    line-height: 4.8vw;
  }
  .van-button {
    position: fixed;
    bottom: 0;
    left: 0;
  }
}
</style>
