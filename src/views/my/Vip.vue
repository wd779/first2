<template>
  <div>
    <!-- 头部组件 -->
    <app-header>
      <template>
        <div slot="title">开通会员</div>
        <div slot="right"></div>
      </template>
    </app-header>
    <!-- 会员 -->
    <div class="top">
      <div class="box">
        <img :src="arr.avatar" />
        <div class="info">
          <div class="name">{{ arr.nickname}}</div>
          <p class="note">开通会员免费学习</p>
        </div>
      </div>
    </div>
    <!-- 购买会员 -->
    <div class="bottom">
      <p>
        <span class="tag1">购买会员</span>
        <span class="tag2">购买会员后可免费观看会员课程</span>
      </p>
      <div class="vip-items">
        <div
          class="vip-item"
          :id="active == index?'active':''"
          @click="activeFn(index,item.id)"
          v-for="(item,index) in list"
          :key="item.id"
        >
          <p class="name">{{item.name}}</p>
          <p class="price">
            <img
              src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png"
              class="price-ico"
            />
            <span>{{item.price|toFixPrice}}</span>
          </p>
        </div>
      </div>
    </div>
    <div class="btn" @click="pay">立即支付</div>
  </div>
</template>

<script>
import { vipAjax, AjaxInfo, downOrderAjax } from "../../utils/myApi";
import appHeader from "../../components/AppHeader.vue";
import Vant from "vant";
import { Dialog } from "vant";
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
      arr: [],
      active: 0,
      shop_id: 0
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    async vip() {
      let { data } = await vipAjax();
      console.log(data);
      this.list = data;
    },
    async info() {
      let { data } = await AjaxInfo();
      this.arr = data;
      console.log(data);
    },
    activeFn(index, id) {
      this.active = index;
      this.shop_id = id;
      console.log(id);
    },
    pay() {
      Dialog.confirm({
        title: "提示",
        message: "你确定购买此会员吗?"
      }).then(() => {
        this.pays();
      });
    },
    async pays() {
      let data = await downOrderAjax({ shop_id: this.shop_id, type: 14 });
      console.log(data);
      Dialog.confirm({
        title: "提示",
        message: data.data.msg,
        confirmButtonText: "去充值"
      }).then(() => {
        this.$router.push("/my-currency");
      });
    }
  },
  /**
   * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
   */
  created() {},
  mounted() {
    this.vip();
    this.info();
  }
};
</script> 

<style scoped lang="scss">
.top {
  position: relative;
}
.box {
  border-top: 1px solid #f5f5f5;
  height: 19.46667vw;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 0 4vw;
  position: relative;
}
img {
  width: 11.46667vw;
  //   height: 11.46667vw;
  border-radius: 50%;
}
.info {
  margin-left: 2.66667vw;
  line-height: 5.6vw;
}
.name {
  font-size: 3.73333vw;
  font-weight: 500;
  color: #595959;
}
.note {
  font-size: 3.2vw;
  color: #8c8c8c;
}
.bottom {
  padding: 8vw 4vw;
}
.vip-items {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: space-between;
  padding-top: 5.33333vw;
  #active {
    border: 0.26667vw solid #e6c37f;
    background-color: #f9f0d9;
  }
}
.vip-item {
  width: 26.66667vw;
  height: 29.33333vw;
  border-radius: 2.13333vw;
  border: 0.26667vw solid #d9d9d9;
  background-color: #fff;
  margin-bottom: 2.66667vw;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.tag1 {
  font-size: 4vw;
  font-weight: 500;
  color: #595959;
}
.tag2 {
  margin-left: 2.66667vw;
  font-size: 3.2vw;
  color: #8c8c8c;
}
.name {
  font-size: 3.46667vw;
  font-weight: 600;
  color: #595959;
  margin-bottom: 2.66667vw;
  line-height: 4vw;
}
.price {
  font-size: 7.46667vw;
  color: #d5a322;
}
.price-ico {
  width: 3.73333vw;
  margin-right: 0.4vw;
}
.btn {
  width: 92vw;
  height: 11.73333vw;
  background: linear-gradient(90deg, #eac687, #c8ae84);
  border-radius: 5.86667vw;
  font-size: 4.53333vw;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: #fff;
  line-height: 11.73333vw;
  text-align: center;
  position: fixed;
  left: 50%;
  bottom: 8vw;
  transform: translateX(-50%);
  z-index: 999;
}
</style>
