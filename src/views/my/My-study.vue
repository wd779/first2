<template>
  <div class="box">
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
      <van-tab v-for="(item,index) in list" @click="clkFn(item.type)" :key="index">
        <div slot="title" @click="navToggle(item.type)">{{item.name+`(${item.num})`}}</div>
        <ul class="ul-box" v-if="newList.length>0">
          <li v-for="item in newList" :key="item.course_id" @click="study(item.course_id)">
            <div class="div-box">
              <p>{{item.title}}</p>
              <div class="div-top">
                <i>□</i>
                <span>{{item.start_play_date*1000 | timeA}} ~ {{item.end_play_date*1000 | timeA}}</span> |
                <span>共{{item.section_num}}课时</span>
              </div>
              <div class="div-bottom">
                <van-progress pivot-text stroke-width="3" :percentage="0" />
                <span>已学习{{item.progress_rate}}%</span>
              </div>
              <span></span>
            </div>
          </li>
        </ul>

        <div class="empty" v-else>
          <img src="https://wap.365msmk.com/img/empty.0d284c2e.png" />
          <p>还没有课程，快去选择课程学习吧</p>
          <div class="info" @click="$router.push('/Appointment')">选择课程</div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { myStudyAjax } from "../../utils/myApi";
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
    return {
      type: 2,
      list: [],
      newList: []
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    async clkFn() {
      let { data } = await myStudyAjax(this.type);
      console.log(data);
      this.list = data.typeNum;
      this.newList = data.courseList;
    },
    // 切换导航
    navToggle(type) {
      this.type = type;
      this.clkFn();
    },
    study(course_id){
      this.$router.push({
        path:'/MyStudy',
        query:{
          course_id
        }
      })
    }
  },
  /**
   * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
   */
  created() {},
  mounted() {
    this.clkFn();
  }
};
</script> 

<style scoped lang="scss">
.box {
  width: 100%;
  height: 100%;
  background-color: #fff;
}

.ul-box {
  width: 100%;
  padding: 0.1rem 0.15rem;
  box-sizing: border-box;
  li {
    width: 100%;
    padding: 0.24rem 0.15rem;
    box-sizing: border-box;
    box-shadow: 0 0 0.1rem #ccc;
    border-radius: 0.06rem;
    .div-box {
      p {
        color: #333;
        line-height: 0.16rem;
      }
      .div-top {
        font-size: 0.1rem;
        line-height: 0.16rem;
        padding: 0.1rem 0 0.32rem 0;
        color: #666;
        i {
          margin-right: 0.05rem;
        }
      }
      .div-bottom {
        display: flex;
        align-items: center;
        .van-progress {
          width: 1.2rem;
        }
        span {
          font-size: 0.08rem;
          color: #8c8c8c;
          margin-left: 0.15rem;
        }
      }
    }
  }
}
.empty {
  margin-top: 26.66667vw;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 40vw;
    height: 40vw;
  }
  p {
    font-size: 4vw;
    color: #8c8c8c;
    margin-top: 5.33333vw;
  }
}
.info {
  width: 23.46667vw;
  height: 7.46667vw;
  border-radius: 1.06667vw;
  background-color: #eb6100;
  font-size: 3.46667vw;
  color: #fff;
  line-height: 7.46667vw;
  margin: 10.66667vw auto;
  text-align: center;
  line-height: 7.46667vw;
}
</style>
