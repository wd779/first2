<template>
  <div>
    <!-- 头部组件 -->
    <app-header>
      <template>
        <div slot="title">{{title}}</div>
        <div slot="right"></div>
      </template>
    </app-header>
    <van-tabs v-model="active" swipeable color="#eb6100">
      <van-tab v-for="(item,index) in titleArr" :key="index">
        <div slot="title" @click="navToggle(item.order_status)">{{item.cont}}</div>
        <van-list
          v-model="loading"
          :offset="10"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <div
            class="item"
            v-for="item in list"
            :key="item.id"
            @click="$router.push({path:'/mydetail',query:{order_id:item.id}})"
          >
            <div class="title">
              <p class="order-number">订单编号：{{item.order_number}}</p>
              <p class="order-status">{{item.order_status==2?'交易完成':'支付失败'}}</p>
            </div>
            <div class="content">
              <p class="name">{{item.title}}</p>
              <p class="time">时间：{{ item.created_at*1000 | timeC}}</p>
              <p class="price">
                <span>实付款：</span>
                <img
                  src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png"
                  class="price-ico"
                  alt
                />
                <span>{{item.order_price}}</span>
              </p>
            </div>
            <div class="bottom">
              <span class="btn color">加入学习</span>
            </div>
          </div>
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { myOrderAjax } from "../../utils/myApi";
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
    return {
      loading: false,
      finished: false,
      title: "",
      order_type: "",
      active: 0,
      list: [],
      titleArr: [
        { cont: "全部订单", order_status: "0" },
        { cont: "待支付", order_status: "1" },
        { cont: "已完成", order_status: "2" },
        { cont: "以取消", order_status: "3" }
      ],
      
      order_status: 0,
      page: 0,
      limit: 10
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    async myOrder() {
      let obj = {
        limit: this.limit,
        order_status: this.order_status,
        order_type: this.order_type,
        page: this.page
      };
      let { data } = await myOrderAjax(obj);
      // 加载状态结束
      this.loading = false;
      // 数据全部加载完成
      this.list = [...this.list, ...data.list]; // 展开合并
      if (this.list.length >= data.total) {
        this.finished = true;
      }
      console.log(this.list);
    },
    navToggle(order_status) {
      this.order_status = order_status;
      this.myOrder();
    },
    onLoad() {
      // 异步更新数据
      this.page++; // 页码自增
      setTimeout(() => {
        this.myOrder();
      }, 100);
    }
  },
  /**
   * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
   */
  created() {
    this.title = this.$route.query.title;
    this.order_type = this.$route.query.order_type;
  },
  mounted() {}
};
</script> 

<style scoped lang="scss">
.van-tab--active {
  color: #eb6100 !important;
}
.item {
  background-color: #fff;
  border-radius: 1.33333vw;
  padding: 4vw 3.73333vw;
  margin-bottom: 4vw;
  position: relative;
  box-shadow: 0 0 2vw rgba(0, 0, 0, 0.1);
  .title {
    display: flex;
    justify-content: space-between;
    padding-bottom: 2.66667vw;
    margin-bottom: 2.66667vw;
    border-bottom: 1px solid #f5f5f5;
    .order-number {
      font-size: 3.2vw;
      color: #595959;
    }
    .order-status {
      font-size: 3.2vw;
      color: #ea7a2f;
    }
  }
  .content {
    margin-bottom: 1.33333vw;
    .name {
      font-size: 3.46667vw;
      color: #595959;
      margin-bottom: 2.66667vw;
    }
    .time {
      font-size: 3.2vw;
      color: #8c8c8c;
      margin-bottom: 2vw;
    }
    .price {
      font-size: 3.2vw;
      color: #8c8c8c;
      span:nth-of-type(2) {
        font-size: 4.26667vw;
        color: #595959;
      }
      .price-ico {
        width: 3.2vw;
        margin-right: 0.4vw;
      }
    }
  }
  .bottom {
    text-align: right;
    .color {
      border: 1px solid #ea7a2f;
      color: #ea7a2f;
    }
    .btn {
      display: inline-block;
      width: 20.26667vw;
      height: 7.46667vw;
      border-radius: 3.73333vw;
      font-size: 3.2vw;
      line-height: 7.46667vw;
      text-align: center;
      margin-left: 2.66667vw;
    }
  }
}
</style>
