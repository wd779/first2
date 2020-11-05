<template>
  <div class="order-detail">
    <header>
      <div class="top">
        <span class="back" @click="$router.go(-1)">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAPCAYAAADd/14OAAAA/ElEQVQoU33RsUvWYRTF8c8hQmgIE4e2IFDQIfCPcHGIlBpqcWtPcFHBFgWdHGxykURxUtfWZkfHtkZBCBzcrjzxe+P9ha/P9sD33nPuOfHIq6pJnOBZRnFVNYdzvML+g2BVfcIBnuJLkm89sKqeYAcruMaHJD+b6j+wqiZwinlcYinJ74G1v2BVven8vMYRPie5G/afqnqPQ4xhNcneQwc28AYvsJ1kfVQKDVzAMZ5jE1tJ6v+BgcdpXGAGZ1hOctvzOPhUVdvYDnmLKywm+dW7eghuCl+xgT/4mORHL8dhmap6h++tY6wl2X2s69nO91SLbyTYFTHebX55D93jTsSH0JDDAAAAAElFTkSuQmCC"
            alt
          />
        </span>
        <h3>订单详情</h3>
      </div>
      <div class="bottom">交易完成</div>
    </header>
    <div class="content">
      <p class="title">{{list.shop_name}}</p>
      <div class="info">
        <p>
          <span>订单编号：</span>
          <span>{{list.order_number}}</span>
        </p>
        <p>
          <span>下单时间：</span>
          <span>{{list.created_at*1000|timeC}}</span>
        </p>
        <p>
          <span>支付方式：</span>
          <span>虚拟币支付</span>
        </p>
      </div>
      <div class="price">
        <p>
          <span>商品原价：</span>
          <span>
            <img
              class="price-ico"
              src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png"
              alt
            />
            {{list.original_price}}
          </span>
        </p>
        <p>
          <span>优惠券：</span>
          <span>
            -
            <img
              src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png"
              class="price-ico"
              alt
            />
            {{list.coupon_discount}}
          </span>
        </p>
        <p class="real-price">
          <span>实付金额：</span>
          <span class="flag-price">
            <img
              src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png"
              class="price-ico"
              alt
            />
            {{list.order_price}}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { detailAjax } from "../../utils/myApi";
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
      order_id: "",
      list: []
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    async detail() {
      let { data } = await detailAjax({ order_id: this.order_id });
      console.log(data);
      this.list = data;
    }
  },
  /**
   * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
   */
  created() {
    this.order_id = this.$route.query.order_id;
  },
  mounted() {
    this.detail();
  }
};
</script> 

<style scoped lang="scss">
.order-detail {
  min-height: 100vh;
  background: #f0f2f5;
  box-sizing: border-box;
  p {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2.66667vw;
  }
  header {
    height: 29.86667vw;
    background: linear-gradient(180deg, #63b7fe, #4e7de3);
    .top {
      height: 11.73333vw;
      position: relative;
      .back {
        display: block;
        width: 12vw;
        height: 100%;
        float: left;
        position: relative;
        img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      h3 {
        font-size: 4.8vw;
        color: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-weight: normal;
      }
    }
    .bottom {
      text-align: center;
      font-size: 3.73333vw;
      color: #fff;
      margin-top: 8vw;
    }
  }
  .content {
    margin: 3.46667vw 2.66667vw;
    padding: 4vw;
    border-radius: 2vw;
    background-color: #fff;
    .title {
      font-size: 3.73333vw;
      line-height: 5.6vw;
      color: #262626;
    }
    .info {
      font-size: 3.2vw;
      color: #8c8c8c;
      border-top: 1px solid #f5f5f5;
      margin-top: 4vw;
      padding-top: 4vw;
    }
    .price {
      font-size: 3.2vw;
      color: #8c8c8c;
      border-top: 1px solid #f5f5f5;
      margin-top: 4vw;
      padding-top: 4vw;
      .price-ico {
        width: 2.66667vw;
      }
    }
  }
}
</style>
