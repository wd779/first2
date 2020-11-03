<template>
  <div>
    <div class="teach-page">
      <!-- 标题 -->
      <div class="header">
        <header>
          <span class="back">
            <img src="../../assets/下载.png" alt="" @click="backHome" />
          </span>
          <h3>讲师详情</h3>
        </header>
      </div>

      <!-- 模板介绍 -->
      <div>
        <div class="teacher-info">
          <div class="ti-base">
            <img :src="data.avatar" alt="" />
            <div>
              <p>
                <span data-v-8a020ce2="">{{ data.real_name }}</span
                ><font data-v-8a020ce2="">M20</font>
              </p>
              <p data-v-8a020ce2="">
                男
                <font data-v-8a020ce2="">30年教龄</font>
              </p>
            </div>
            <button data-v-8a020ce2="">关注</button>
          </div>
        </div>

        <!-- 讲师  简介 -->
        <div class="com-box">
          <div class="vant-nav">
            <van-tabs v-model="activeName">
              <van-tab title="讲师介绍" name="a">
                <ul class="teacher-tro">
                  <li><span>教学年龄</span><font>30年</font></li>
                  <li><span>授课价格</span><font>400学习币</font></li>
                  <li>
                    <span>老师简介</span
                    ><font
                      >　　杨老师,特级教师.多次被中国数学会评为全国高中数学竞联赛优秀教练员。长期从事名校理科班的数学教学和数学竞赛辅导工作。辅导学生参加全国高中数学联赛有数百人次获全国高中数学联赛一、二、三等奖，数十人被免试保送到清华大学、北京大学等名牌大学学习。十多人获CMO获一、二、三等奖，一人获IMO金牌。
                      　　特别是近年来大学试行自主招生，有很多同学通过上他的竞赛辅导课进入清华大学、北京大学、上海交通大学等。</font
                    >
                  </li>
                </ul>
              </van-tab>
              <van-tab title="主讲课程" name="b">
                <ul class="masterCourse">
                  <li v-for="index in 7" :key="index">
                    <div class="lm_ii_item" @click="ToCourseDetail()">
                      <p>
                        每时每课特级教师-自主招生冲刺讲座6-多元方程组与可转化为多元方程组问题
                      </p>
                      <div class="lm_ii_time">
                        <p>共一课时</p>
                      </div>
                      <div class="lm_ii_teacher">
                        <img
                          src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019wX5ZNRNxBT1577773182.jpg"
                        />
                        <p>杨德胜</p>
                      </div>

                      <div class="lm_ii_info">
                        <span>1000人已报名</span>
                        <span class="lm_good">免费</span>
                        <!-- <span class="lm_price">
                    <img
                      src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png"
                      alt
                    />


                    <span>1.00</span>
                      </span>-->
                      </div>
                      <img
                        class="lm_flag_img"
                        src="https://wap.365msmk.com/img/has-buy.6cfbd83d.png"
                        alt
                      />
                    </div>
                  </li>
                </ul>
              </van-tab>
              <van-tab title="学员评价" name="c">
                <van-empty description="暂无学员评价" />
              </van-tab>
            </van-tabs>
          </div>
        </div>
      </div>

      <button
        class="course-btn van-button van-button--default van-button--normal"
        style=""   @click="goDetails_kecheng"
      >
        <span class="van-button__text" 
          >立即预约</span
        >
      </button>
    </div>
  </div>
</template>

<script>
import { GetTeacher , GetTeacherInfo} from "../../utils/homeApi";
export default {
  data() {
    return {
      activeName: "a",
      data: [],
      Info:[]
    };
  },

  mounted() {
    this.onTeacher();
    this.onTeacherInfo()
  },
  methods: {
    // 获取数据
    async onTeacher() {
      let res = await GetTeacher(this.$route.query.id);
      this.data = res.data.teacher;
      console.log(res);
    },
    
    async onTeacherInfo(){
        let res = await GetTeacherInfo()
        //  this.Info = res.attr
         console.log(res);
    },
    // 返回home 页面
    backHome() {
      this.$router.go(-1);
    },

    // 跳转到  课程预约
   goDetails_kecheng() {
     console.log(11111);
      this.$router.push({
        path:'/yuyue'
      })
    },

    // 主讲课程 点击事件
    ToCourseDetail(){}
  },
};
</script>

<style lang="scss" scoped>
.masterCourse {
  width: 100%;
  padding: 0.15rem;
  box-sizing: border-box;
  background: #fff;
  padding-bottom: 1.5rem;
  > li {
    margin-bottom: 0.2rem;
    width: 100%;
    height: 2rem;
    border-radius: 0.04rem;
    border: 0.01rem solid rgb(238, 238, 238);
    background: #fff;
    box-shadow: 0 0 0.01rem 0.01rem rgb(238, 238, 238);
  }
}
.lm_ii_item {
  position: relative;
  width: 100%;
  height: 2rem;
  padding: 0 0.2rem;
  margin-top: 0.1rem;
  box-sizing: border-box;
  background: #fff;
  border-radius: 0.05rem;
  > :nth-child(1) {
    width: 3.5rem;
    padding-top: 0.2rem;
    margin: 0;
  }
}
.lm_ii_time {
  display: flex;
  align-items: center;
  height: 0.3rem;
  line-height: 0.3rem;
  > p {
    margin: 0;
    font-size: 0.1rem;
    color: #8c8c8c;
  }
}
.lm_ii_teacher {
  width: 100%;
  height: 0.7rem;
  display: flex;
  align-items: center;
  font-size: 0.12rem;
  color: #8c8c8c;
  > img {
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 50%;
    margin-right: 0.1rem;
  }
}
.lm_ii_info {
  width: 100%;
  margin-top: 0.1rem;
  height: 0.4rem;
  line-height: 0.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 0.01rem rgb(238, 238, 238) solid;
  > :nth-child(1) {
    font-size: 0.12rem;
    color: #8c8c8c;
  }
  img {
    width: 0.2rem;
    height: 0.2rem;
  }
}
.lm_flag_img {
  width: 0.5rem;
  height: 0.4rem;
  position: absolute;
  right: 0.2rem;
  top: 0.4rem;
}
.lm_ii_item > :nth-child(1) {
  width: 2.5rem;
  padding-top: 0.2rem;
  margin: 0;
}
.lm_good {
  color: #44a426;
  font-size: 0.18rem;
}

.teacher-page {
  min-height: 100vh;
  background: #f0f2f5;
  padding-bottom: 1.6rem;
  padding-bottom: 16vw;
  box-sizing: border-box;
}
.header {
  height: 2.66667rem;
  height: 26.66667vw;
  line-height: 1.17333rem;
  line-height: 11.73333vw;
  background: linear-gradient(180deg, #63b7fe, #4e7de3);
}
.header header {
  display: flex;
  justify-content: center;
  align-items: center;
}
.header .back {
  width: 0.66667rem;
  width: 6.66667vw;
  height: 100%;
  padding-left: 0.26667rem;
  padding-left: 2.66667vw;
}
.header .back header {
  display: flex;
  justify-content: center;
  align-items: center;
}
.header h3 {
  flex: 2;
  text-align: center;
  font-size: 0.48rem;
  font-size: 4.8vw;
  color: #fff;
}
.header .back img {
  width: 2.4vw;

  height: 4.26667vw;
}

.teacher-info {
  margin: -1.52rem auto 0;
  margin: -15.2vw auto 0;
  width: 9.46667rem;
  width: 94.66667vw;
  padding: 0 0.4rem;
  padding: 0 4vw;
  background: #fff;
  border-radius: 0.10667rem;
  border-radius: 1.06667vw;
  box-sizing: border-box;
}
.teacher-info .ti-base {
  height: 2.02667rem;
  height: 20.26667vw;
  display: flex;
  align-items: center;
}
.ti-base img {
  width: 1.06667rem;
  width: 10.66667vw;
  height: 1.06667rem;
  height: 10.66667vw;
  margin-right: 0.32rem;
  margin-right: 3.2vw;
  border-radius: 50%;
  flex: none;
}

.ti-base div {
  flex: 1;
}
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  outline: none;
}
.ti-base button {
  width: 1.65333rem;
  width: 16.53333vw;
  height: 0.74667rem;
  height: 7.46667vw;
  background: #ebeefe;
  border-radius: 0.41333rem;
  border-radius: 4.13333vw;
  font-size: 0.34667rem;
  font-size: 3.46667vw;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: #4169ff;
  color: #eb6100;
  border: 0;
}

.com-box {
  margin-top: 0.26667rem;
  margin-top: 2.66667vw;
  background: #fff;
}

.vant-teacher-con {
  width: 100%;
  height: 4vm;
}
ul,
var,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  outline: none;
}
.teacher-tro {
  padding: 0 0.4rem;
  padding: 0 4vw;
}
.teacher-tro li {
  display: flex;
  line-height: 1.06667rem;
  line-height: 10.66667vw;
  font-size: 0.34667rem;
  font-size: 3.46667vw;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: #8c8c8c;
  padding-top: 0.26667rem;
  padding-top: 2.66667vw;
}
.teacher-tro li font {
  padding-top: 0.13333rem;
  padding-top: 1.33333vw;
  line-height: 0.8rem;
  line-height: 8vw;
  flex: 1;
}
.teacher-tro li span {
  margin-left: 0.13333rem;
  margin-left: 1.33333vw;
  margin-right: 0.53333rem;
  margin-right: 5.33333vw;
}
/* 立即预约 */
.course-btn,
.course-two-btn {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 1.17333rem;
  height: 11.73333vw;
  line-height: 1.17333rem;
  line-height: 11.73333vw;
  text-align: center;
}
.course-btn {
  background: #eb6100;
  font-size: 0.45333rem;
  font-size: 4.53333vw;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: #fff;
}
.van-button:before {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background-color: #000;
  border: inherit;
  border-color: #000;
  border-radius: inherit;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  opacity: 0;
  content: " ";
}
</style>