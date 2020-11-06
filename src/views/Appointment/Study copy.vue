<template>
  <div class="hmwBox">
    <!-- 顶部 -->
    <van-sticky>
      <div class="hmw-top">
         <van-nav-bar
          :title="infoList.course.title"
          @click-left="onClickLeft"
          @click-right="onClickRight"
        >
        
          <template #right>
            <van-icon color="#595959" name="notes-o" size="22" />
          </template>
          <template #left>
            <van-icon color="#595959" name="arrow-left" size="22" />
          </template>
        </van-nav-bar>
      </div>
    </van-sticky>
    <!-- 中间主体部分 -->
    <div class="hmw-center">
      <van-list>
        <!-- 主题的上部分 -->
        <div class="hmwC-top">
          <p>共{{ infoList.course.section_num }}时</p>
          <van-progress inactive :percentage="0" />
          <p>已学习0%</p>
        </div>
        <!-- 列表部分 -->
        <ul>
          <div
            :key="item.id"
            v-for="item in infoList.periods"
            @click="onQuertIsSee(item.id)"
          >
            <li>
              <p>
                <span class="hmwS1" style="">[回放]</span
                ><span class="hmwS2">{{ item.periods_title }}</span>
              </p>
              <p class="hmwP3">
                <span>{{ item.teacher_name }}</span
                ><span
                  >{{ item.total_end_play }}-{{ item.total_start_play }}</span
                >
              </p>
              <p class="hmwJD">
                <van-progress inactive :percentage="0" />
                <span>已观看0%</span>
              </p>
            </li>
          </div>
        </ul>
      </van-list>
    </div>
    <!-- 底部 -->
    <van-tabbar>
      <div class="hmw-foot">
        <p @click="onWriteComment">
          <van-icon size="18" name="edit" /><span>写评论</span>
        </p>
        <p @click="$router.go(-1)">
          <van-icon size="18" name="apps-o" /><span>课程详情</span>
        </p>
        <p @click="hmwDian">
          <van-icon size="18" name="delete" /><span>移除列表</span>
        </p>
      </div>
    </van-tabbar>
    <van-popup v-model="show">
      <!-- 弹出层 -->
      <div class="center_box">
        <p><span class="float">x</span></p>
        <div class="center_box_connect">
          <p>星级： <van-rate v-model="value" /></p>
          <div class="text">
            <p>内容：</p>
            <textarea class="textarea" v-model="tex"></textarea>
          </div>
        </div>
        <div class="center_box_bottom">
          <van-button type="primary" size="small" class="btn" @click="onPublish"
            >发布</van-button
          >
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { GetCourses, QuertIsSee, Publish,Re } from "../../utils/appointmtemtApi";
import { Toast } from "vant";
export default {
  // 组件名称
  name: "demo",
  // 组件参数 接收来自父组件的数据
  props: {},
  // 局部注册的组件
  components: {},
  // 组件状态值
  data() {
    return {
      //    底部导航
      active: 0,
      infoList: [],
      show: false,
      value: 0,
      tex: "",
    };
  },
  mounted() {
    // console.log(this.$route.query.vid);
    this.onGetCourses();
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    //   导航部分事件
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      Toast("按钮");
      this.$router.push({path:"/Study"})
    },
    // 统一点击事件，只是一个效果
    async hmwDian() {
      // alert("你点了一下");
      let res = await Re(this.$route.query.vid);
      // console.log(res);
      if (res.code == 200) {
        this.$router.go(-1)
      }

    },
    onWriteComment() {
      this.show = true;
    },
    async onQuertIsSee(i) {
      // console.log(i);
      let res = await QuertIsSee(this.$route.query.vid, i);
      // console.log(res);
      if (res.code == 200) {
        this.$toast("正在进入");
        window.location.href = res.data.chapterInfo.web_url;
      } else {
        // console.log(res.msg);
        this.$toast(res.msg);
      }
    },
    async onGetCourses() {
      let { data } = await GetCourses(this.$route.query.vid);
      this.infoList = data;
      console.log(data);
    },
    async onPublish() {
      let obj = {
        content: this.tex,
        course_id: this.$route.query.vid,
        grade: this.value,
        type: 1,
      };
      let res = await Publish(obj);
      console.log(res);
      if (res.code == 200) {
        this.$toast("评价成功");
        this.show = false;
      } else {
        this.$toast(res.msg);
        this.show = false;
      }
    },
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.btn {
  width: 0.5rem;
  height: 0.3rem;
}
.center_box {
  width: 3.6rem;
  height: 2.5rem;
  padding: 0.1rem;
  margin-top: 0.1rem;
  line-height: 0.3rem;
  box-sizing: border-box;
}
.float {
  float: right;
}
.text {
  height: 1rem;
  display: flex;
}
.text p {
  flex: 1;
}
.text .textarea {
  flex: 5;
  height: 1rem;
}
.center_box_connect {
  width: 100%;
  height: 1;
  margin-top: 0.2rem;
}
.center_box_bottom {
  margin-top: 0.2rem;
  height: 0.4rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
html,
body,
.hmwBox {
  height: 100%;
}
/* 大体布局 */
.hmwBox {
  display: flex;
  flex-direction: column;
}
.hmw-top {
  /* height: 4rem; */
  height: 11.73333vw;
  background: white;
  border-bottom: 1px solid #f5f5f5;
}
.hmw-center {
  overflow: scroll;
}
.hmw-foot {
  height: 9.86667vw;
  background-color: #fff;
  z-index: 999;
  width: 100%;
  border-top: 1px solid #f5f5f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/* 主体部分----------------------------------------------------------------------------- */
/* 主题的上半部分 */
.hmwC-top {
  margin-top: 0.2rem;

  width: 100%;
  font-size: 3.46667vw;
  color: #595959;
  /* height: 13.86667vw;
    line-height: 13.86667vw; */
  border-bottom: 1px solid #f5f5f5;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
/* 进度条 */
.van-progress {
  width: 2.5rem;
}
/* 列表部分 */
.hmw-center ul li {
  list-style: disc;
  color: #eb6100;
}
.hmw-center ul > div {
  margin: 0 0.1rem;
  margin-top: 0.1rem;
  border: 0.53333vw solid #e9e9e9;
  border-radius: 1.06667vw;
  padding: 4vw 4vw 4vw 7vw;
  /* width: 90%; */
}
/* span部分 */
.hmwS1 {
  /* padding: 0.2rem 0.4rem; */
  font-size: 0.1rem;
  color: #ea7a2f;
  border-radius: 0.2rem;
  margin-right: 0.4rem;
}
.hmwS2 {
  font-size: 3.2vw;
  font-weight: 400;
  color: #595959;
}
.hmw-center .hmwP3 {
  font-size: 3.6vw;
  padding: 0.05rem;
}
.hmwP3 {
  font-size: 4vw;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.45);
}
/* 主体的进度条部分 */
.hmwJD {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.hmwJD span {
  color: #8c8c8c;
  font-size: 0.02rem;
}
/* 底部导航布局------------------------------------------------------------------------- */
.hmw-foot p {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3.2vw;
  color: #8c8c8c;
  vertical-align: middle;
  margin-left: 1.33333vw;
  height: 100%;
}
.hmw-foot {
  margin-bottom: 0.3rem;
}

.hmw-foot p span {
  margin-left: 0.02rem;
}
.van-tabbar {
  height: 9.86667vw;
}
</style>
