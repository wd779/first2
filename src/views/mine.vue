<template>
  <div class="box">
    <!-- 头像 -->
    <div class="user">
      <div class="user_icon">
        <!-- 登录 -->
        <div class="head">
          <section @click="$router.push('/info')">
            <div v-show="flag">
              <img :src="personal.avatar" />
              <span>{{personal.nickname}}</span>
              <van-icon name="edit" />
              <h4 @click="$router.push('/fudao')">去约课</h4>
            </div>
            <div v-show="!flag">
              <img :src="personal.avatar" />
              <span @click="$router.push('/login')">登录/注册</span>
              <van-icon name="edit" />
              <h4 @click="$router.push('/fudao')">去约课</h4>
            </div>
          </section>
          <div class="info">
            <ul>
              <li @click="$router.push('/my-study')">
                <h3>{{personal.courses}}</h3>
                <p>我的特色课</p>
                <span>已购特色课程的学习</span>
              </li>
              <li @click="$router.push('/order')">
                <h3>{{personal.oto}}</h3>
                <p>一对一辅导</p>
                <span>我的一对一老师辅导</span>
              </li>
              <li @click="$router.push('/my-currency')">
                <h3>{{personal.integral | fnName}}</h3>
                <p>剩余学习币</p>
                <span>查看剩余学习币</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 邀请 -->
      <div class="yao" @click="show=true">
        <div>
          <van-icon name="point-gift" />
          <section>
            <p>邀请好友注册APP，享多重好礼</p>
            <span>限时特惠，多邀多得</span>
          </section>
          <i></i>
          <i></i>
          <i></i>
          <van-icon name="arrow" />
        </div>
      </div>
      <!-- ulBox -->
      <ul class="menu">
        <li class="icon1">
          <p class="menu-title">课程相关</p>
          <div class="menu-box">
            <div @click="$router.push('/concern')">
              <van-icon name="friends" />
              <p>关注的老师</p>
            </div>
            <div @click="$router.push('/collect')">
              <van-icon name="underway" />
              <p>我的收藏</p>
            </div>
          </div>
        </li>

        <li  class="icon2">
          <p class="menu-title">订单相关</p>
          <div class="menu-box">
            <div @click="$router.push({path:'/orderDetail',query:{order_type:2,title:'课程订单'}})">
              <van-icon name="point-gift" />
              <p>课程订单</p>
            </div>
            <div @click="$router.push({path:'/orderDetail',query:{order_type:3,title:'会员订单'}})">
              <van-icon name="point-gift" />
              <p>会员订单</p>
            </div>
            <div @click="$router.push({path:'/orderDetail',query:{order_type:1,title:'约课订单'}})">
              <van-icon name="point-gift" />
              <p>约课订单</p>
            </div>
          </div>
        </li>
        <li  class="icon3">
          <p class="menu-title">我的账户</p>
          <div class="menu-box">
            <div @click="$router.push('/coupon')">
              <van-icon name="gift-card" />
              <p>优惠券</p>
            </div>
            <div @click="$router.push('/card')">
              <van-icon name="vip-card" />
              <p>学习卡</p>
            </div>
            <div @click="$router.push('/vip')">
              <van-icon name="gem" />
              <p>会员</p>
            </div>
          </div>
        </li>
        <li  class="icon4">
          <p class="menu-title">自助服务</p>
          <div class="menu-box">
            <div @click="$router.push('/message')">
              <van-icon name="bell" />
              <p>我的消息</p>
            </div>
            <div @click="$router.push('/feedback')">
              <van-icon name="comment" />
              <p>意见反馈</p>
            </div>
            <div @click="$router.push('/personOne')">
              <van-icon name="service" />
              <p>在线客服</p>
            </div>
            <div @click="$router.push('/options')">
              <van-icon name="setting" />
              <p>设置</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="van-overlay" v-show="show" @click="show=false"></div>
    <div class="van-popup van-popup--center" v-show="show">
      <div class="share-box">
        <img
          src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2020gS8dQ6ChUu1604494536.png"
          alt
        />
      </div>
    </div>
  </div>
</template>

<script>
import { AjaxInfo, getUCenterInfoAjax } from "../utils/myApi";
export default {
  // 组件名称
  name: "", // 组件参数 接收来自父组件的数据
  props: [], // 局部注册的组件
  components: {}, // 组件状态值
  data() {
    return {
      flag: false,
      personal: [], // 个人信息
      show: false
    };
  }, // 计算属性
  computed: {}, // 侦听器
  watch: {}, // 组件方法
  methods: {
    async getUCenterInfo() {
      let { data } = await getUCenterInfoAjax();
      console.log(data);
      this.personal = data;
    }
  },
  created() {},
  mounted() {
    this.getUCenterInfo();
    if (sessionStorage.getItem("token")) {
      this.flag = true;
    } else {
      this.flag = false;
    }
  },
  filters: {
    fnName: function(value) {
      return value.toFixed(2);
    }
  },
  //  路由组件首位
  beforeRouteEnter: (to, from, next) => {
    if (!sessionStorage.getItem("token")) {
      next("/login");
    }
    next();
  }
};
</script> 

<style lang="scss" scoped >
.box {
  width: 100%;
  padding-bottom: 0.8rem;
}
.user_icon {
  width: 3.75rem;
  height: 2.2rem;
  background: url("../assets/user_bg.ab306a5c.png") no-repeat top center;
  background-size: 3.75rem 1.2rem;
  padding: 0.48rem 0.15rem 0;
  box-sizing: border-box;
  background-color: #fff;
  .head {
    width: 3.45rem;
    height: 1.72rem;
    background-color: #fff;
    border-radius: 0.1rem;
    box-shadow: 0 0 0.01rem #ccc;
    section {
      width: 3.45rem;
      height: 0.77rem;
      div {
        width: 3.3rem;
        height: 0.62rem;
        padding: 0.15rem 0 0 0.15rem;
        display: flex;
        align-items: center;
        position: relative;
        img {
          width: 0.62rem;
          border-radius: 50%;
        }
        span {
          margin-left: 0.1rem;
        }
        .van-icon {
          margin-left: 0.1rem;
          color: #f2995a;
        }
        h4 {
          width: 0.55rem;
          height: 0.25rem;
          position: absolute;
          background-color: #eb6100;
          text-align: center;
          line-height: 0.25rem;
          color: #fff;
          top: 0.28rem;
          right: 0;
          font-size: 0.12rem;
          font-weight: normal;
          border-radius: 0.15rem 0 0 0.15rem;
        }
      }
    }
    .info {
      width: 3.45rem;
      height: 0.81rem;
      ul {
        width: 3.45rem;
        height: 0.81rem;
        display: flex;
        li {
          text-align: center;
          width: 1.14rem;
          height: 0.81rem;
          h3 {
            line-height: 0.35rem;
            font-size: 0.24rem;
            color: #eb6100;
            font-weight: normal;
          }
          p {
            font-size: 0.12rem;
            margin-bottom: 0.05rem;
            color: #595959;
          }
          span {
            color: #b7b7b7;
            font-size: 0.1rem;
          }
        }
      }
    }
  }
}
// 邀请
.yao {
  width: 3.75rem;
  height: 0.6rem;
  background-color: #fff;
  padding: 0.15rem 0.15rem 0 0.15rem;
  box-sizing: border-box;
  div {
    border-radius: 0.4rem;
    width: 100%;
    height: 0.45rem;
    background: linear-gradient(-90deg, #f2995a, #eb6100);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.1rem;
    box-sizing: border-box;
    .van-icon {
      color: #fff;
      font-size: 0.24rem;
    }
    section {
      color: #fff;
      p {
        font-size: 0.12rem;
      }
      span {
        font-size: 0.1rem;
      }
    }
  }
}
//
.menu {
  width: 3.75rem;
  background-color: #fff;
  padding: 0 0.15rem;
  box-sizing: border-box;
  li {
    padding: 0.2rem 0;
    box-sizing: border-box;
    .menu-title {
      color: #333;
      font-size: 0.16rem;
    }
    .menu-box {
      width: 100%;
      display: flex;
      div {
        width: 0.84rem;
        height: 0.6rem;
        text-align: center;
        .van-icon {
          font-size: 0.26rem;
          line-height: 0.44rem;
          //   color: #ff944b;
        }
        p {
          font-size: 0.12rem;
        }
      }
    }
  }
}
.icon1 .van-icon {
  color: #ff944b;
}
.icon2 .van-icon{
    color: #fc5500;
}
.icon3 .van-icon{
    color: #ffaf00;
}
.icon4 .van-icon{
    color: #ff9a2a;
}
.van-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 2009;
}
.van-popup--center {
  z-index: 2010;
  background-color: transparent;
  top: 50%;
  left: 50%;
  -webkit-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
  position: fixed;
  max-height: 100%;
  overflow-y: auto;
  transition: 0.3s ease-out;
  .share-box {
    width: 89.33333vw;
    img {
      display: block;
      width: 100%;
    }
  }
}
</style>
