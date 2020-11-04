<template>
  <div class="box">
    <!-- 头部组件 -->
    <app-header>
      <template>
        <div slot="title">我的余额</div>
        <div style="font-size:0.14rem;" slot="right" @click="item">余额明细</div>
      </template>
    </app-header>
    <div class="top">
      我的余额
      <span>0 学习币</span>
    </div>
    <ul class="ul-box">
      <li
        :id="active==index?'active':''"
        v-for="(item,index) in list"
        :key="item.id"
        @click="pay(item.id,index)"
      >
        <h4>{{item.coin|toFixPrice}}学习币</h4>
        <p>￥ {{item.rmb|toFixPrice}}</p>
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
    <button class="topay" v-if="active==null">立即充值</button>
    <button class="topays" v-else @click="isPay">立即充值</button>
    <!-- 弹层 -->
    <div class="detailBox" v-show="flag">
      <div class="details">
        <p class="tit">
          余额明细
          <i @click="flag=false"></i>
        </p>
        <van-list :finished="finished=true" finished-text="没有更多了" @load="onLoad">
          <van-cell
            v-for="(item,index) in newList"
            :key="index"
            :title="item.shop_name"
            :label="item.remaining_sum"
          >
            <p>{{item.change_price}}</p>
            <p>{{item.created_at|timeB}}</p>
          </van-cell>
        </van-list>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Dialog } from "vant";
Vue.use(Dialog);
import appHeader from "../../components/AppHeader.vue";
import { coinRankAjax, payAjax, itemAjax } from "../../utils/myApi";
export default {
  // 组件名称
  name: "",
  // 组件参数 接收来自父组件的数据
  props: [],
  // 局部注册的组件
  components: { appHeader },
  // 组件状态值
  data() {
    return {
      list: [],
      active: null,
      coin_id: 0,
      type: "ali",
      page: 1,
      flag: false,
      newList: [],
      finished: false
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    async coinRank() {
      let { data } = await coinRankAjax();
      console.log(data);
      this.list = data.list;
    },
    // 选择学习币支付
    pay(id, index) {
      this.coin_id = id;
      this.active = index;
    },
    // 在线支付
    async isPay() {
      let { data } = await payAjax({ coin_id: this.coin_id, type: this.type });
      let a = data.response
      Dialog.alert({
        title: "标题",
        message: sessionStorage.getItem("token")
      })
    },
    // 获取余额
    async item() {
      console.log(this.flag);
      this.flag = true;
      let { data } = await itemAjax({ page: this.page });
      console.log(data);
      this.newList = data.list;
    }
  },
  /**
   * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
   */
  created() {},
  mounted() {
    this.coinRank();
  }
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
    #active {
      background: #fcede2;
      border: 0.26667vw solid #eb6100;
      box-shadow: 0 0.66667vw 0.66667vw 0 rgba(235, 97, 0, 0.75);
      border-radius: 2.13333vw;
    }
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
  .div-position {
    position: fixed;
    // bottom: 0.43rem;
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
  .topay {
    width: 100%;
    height: 13.06667vw;
    margin: 0;
    padding: 0;
    left: 0;
    border: 0;
    position: fixed;
    bottom: 0;
    font-size: 4.26667vw;
    font-family: PingFang SC;
    font-weight: 400;
    color: #fff;
    background-color: #ccc;
  }
  .topays {
    width: 100%;
    height: 13.06667vw;
    margin: 0;
    padding: 0;
    left: 0;
    border: 0;
    position: fixed;
    bottom: 0;
    background-color: #eb6100;
    font-size: 4.26667vw;
    font-family: PingFang SC;
    font-weight: 400;
    color: #fff;
    z-index: 21000;
  }
}
// 弹出层
.detailBox {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  .details {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #fff;
    border-radius: 0.66667vw;
    text-align: center;
    overflow-x: hidden;
    float: left;
    overflow-y: scroll;
    .tit {
      font-size: 4.8vw;
      font-family: PingFang SC;
      font-weight: 400;
      color: #333;
      line-height: 12vw;
      border-bottom: 1px solid #eee;
      position: relative;
      i {
        display: block;
        position: absolute;
        left: 3.33333vw;
        top: 50%;
        margin-top: -2vw;
        width: 2.53333vw;
        height: 4.66667vw;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAwCAYAAAAGlsrkAAADgUlEQVRYR8XY+6ulUxzH8dcYYsglGteI/OASpsYPrkXKdRq5TogIM5Mf5D8RPx23URTygzCuTcYouSU1Ipo0buMSEWJCGPpMa9eeZ9az97P3efbxrdM5nf3s9V7ftb6Xz/dZ5H+yRQvEPQCnIb8/wdaFAAe2GidjL/yMuVmC98BRuAtHNk723VmB98T5uAIHV65z8yzA8fQ6XIAlaDL+nMVRH4JbcHpL0G7H09jQp8cnFU+PR7xu2md4Bu9hRx/grJH7vAYHVY72X7yPx/D1YDfzBe+NFViJ/N20vwr0Afw2/OF8wEfgSpxR8rMJ/REv4hVkA7vYtOATcROOrRxtACkS9+ND/FMLtEnBixHoHS35Gcg23IPvR5XjScAH4kJchn1a7vNVrMdP43pAV/C+uL3kZ+pt0/7G43gNf4yD5vNx4Hx+GO7EcZUFkyo/4OESvV2YO58ZBc59noOrcGjLigmeJ/EpsonO1gbO/5MqlyLH3HwuQbSxlL9fOtOGHqyBU31uxNktC/6O58vPbvnZdRNNcOrs9TgBOeqmfVXq7Ttt+TkN+CzcUPKzuaHc38d4FF92XXxcHqdpX4yrW/IzqfIR7isVqQ/uzqBJUYintSKfQrABLyMNvDcL+F4srayYbpKushnxulcL+G4cXlk10ZvCkECaCfhc3Iz9KvBIlU14Dr/26XI8TtpEmK1qgcfbLXhwXMeZZGPDaROlv7ZFvmTNrXiopNNE5bG2oWa+RoBHmi5D0qxpaQhpe6/PN8prJTN9N40haVaztL2kWBRjpxbYxePhZy4pRaXWJPLcG6WSTRV0o9pitPFyXIujW7xPO3yilNMd0wZX24lECNyKUyoPJMiiJgN/q0/wYK2U09tGSNls4Cm80DXoxkmfYSdy15kYLi8DdtPB5PvbZQPfjfN+EnDWSrFJr47wq5XZKJP07Gjqz0fBJwUP1orwy5R/TMuAllI7VwRgL4J+2IkM3Dn281paarRYxpeMMWk4u9i0Hg8H3UVl8s8Q3rRosg+wriny5wsegCKb0uH2bxlTI5vSYr8ZfKEvcNbLABclkwG9JhS/xbN4M/29T3DgeRWRJpNBoGYJukjjl/oGD2ARjhnYU3hqw8C6WYFz1GeWJlPL922zAsfzwQu2NcigMGxfzBI8AEXLBR6FkxE3Of3IQoCzgcBPLcGX105bFgq8W4T/B/tloBIPNqWNAAAAAElFTkSuQmCC);
        background-position: 50%;
        background-size: 100%;
        background-repeat: no-repeat;
        cursor: pointer;
      }
    }
    .van-cell {
      .van-cell__title {
        width: 2.33rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: left;
        span {
          width: 100%;
        }
      }
    }
  }
}
</style>
