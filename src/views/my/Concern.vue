<template>
  <div class="box">
    <!-- 头部组件 -->
    <app-header>
      <template>
        <div slot="title">我的关注</div>
        <div slot="right"></div>
      </template>
    </app-header>
    <div class="div-box">
      <ul>
        <li>
          <img src alt />
          <div>
            <h4>
              <span>杨德胜</span>
              <i>M20</i>
            </h4>
            <p>
              杨老师,特级教师.多次被中国数学会评为全国高中数学竞联赛优秀教练员。长期从事名校理科班的数学教学和数学竞赛辅导工作。辅导学生参加全国高中数学联赛有数百人次获全国高中数学联赛一、二、三等奖，数十人被免试保送到清华大学、北京大学等名牌大学学习。十多人获CMO获一、二、三等奖，一人获IMO金牌。
              特别是近年来大学试行自主招生，有很多同学通过上他的竞赛辅导课进入清华大学、北京大学、上海交通大学等。
            </p>
          </div>
          <p class="p-quxiao">取消关注</p>
        </li>
      </ul>
      <p>没有更多了</p>
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
.box {
  width: 100%;
}
.div-box {
  width: 100%;
  padding: 0.15rem 0.1rem;
  box-sizing: border-box;
  ul {
    width: 100%;
    li {
      background-color: #fff;
      padding: 0.1rem;
      box-sizing: border-box;
      border-radius: 0.05rem;
      margin-bottom: 0.1rem;
      display: flex;
      align-items: center;
      img {
        width: 0.4rem;
        height: 0.4rem;
      }
      div {
        width: 2.1rem;
        height: 100%;
        margin-left: 0.1rem;
        h4 {
          font-weight: normal;
          span {
            font-size: 4vw;
            color: #595959;
          }
          i {
            font-style: normal;
            font-size: 2.93333vw;
            color: #ea7a2f;
            margin-left: 0.06rem;
          }
        }
        p {
          text-indent: 0.1rem;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          word-break: break-all;
        }
      }
      .p-quxiao {
        font-size: 3.46667vw;
        color: #eb6100;
        text-align: center;
        width: 20.26667vw;
        height: 7.46667vw;
        line-height: 7.46667vw;
        background: rgba(235, 97, 0, 0.1);
        border-radius: 4.13333vw;
      }
    }
  }
  p {
    text-align: center;
    line-height: 6.66667vw;
    color: #969799;
    font-size: 3.2vw;
  }
}
</style>
