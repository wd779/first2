<template>
  <div>
    <!-- 头部组件 -->
    <app-header>
      <template>
        <div slot="title">消息通知</div>
        <div slot="right"></div>
      </template>
    </app-header>
    <!-- 课程通知 -->
    <ul>
      <li v-for="(item,index) in list" :key="index" @click="detail(item.message_classify,item.title)">
        <div class="icon">
          <img :src="item.url" />
        </div>
        <div class="info">
          <span>{{ item.title }}</span>
          <p class="content">{{ item.content==''?'暂无消息':item.content }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>


<script>
import appHeader from "../../components/AppHeader.vue";
import { messageAjax, msgDetailAjax } from "../../utils/myApi";
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
      messageList: [],
      list: [
        {
          title: "课程通知",
          url: "https://wap.365msmk.com/img/icon-msg-course.d8a2c8d5.png",
          message_classify: "course",
          content: ""
        },
        {
          title: "系统通知",
          url: "https://wap.365msmk.com/img/icon-msg-system.db56e51b.png",
          message_classify: "system",
          content: ""
        },
        {
          title: "订单通知",
          url: "https://wap.365msmk.com/img/icon-msg-order.41755990.png",
          message_classify: "order",
          content: ""
        },
        {
          title: "约课通知",
          url: "https://wap.365msmk.com/img/icon-msg-oto.d8a2c8d5.png",
          message_classify: "oto",
          content: ""
        },
        {
          title: "考试通知",
          url: "https://wap.365msmk.com/img/icon-msg-exam.8a210fd7.png",
          message_classify: "exam",
          content: ""
        }
      ]
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    async msg() {
      let { data } = await messageAjax();
      this.messageList = data;
      this.list.forEach(item => {
        this.messageList.forEach(value => {
          if (item.message_classify === value.message_classify) {
            item.content = value.content;
          }
        });
      });
      console.log(this.list);
    },
    detail(message_classify,title){
      this.$router.push({
        path:'/message-detail',
        query:{
          message_classify,
          title
        }
      })
    }
  },
  /**
   * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
   */
  created() {},
  mounted() {
    this.msg();
  }
};
</script> 


<style scoped lang="scss">
ul {
  margin-top: 0;
  border-top: 0.2vw solid #f5f5f5;
  background: #fff;
  padding: 1.33333vw 4vw;
  //   margin: 2.66667vw 0;
}
li {
  height: auto;
  line-height: normal;
  display: flex;
  color: #595959;
  border-bottom: 0.01vw solid #e0dddd;
}
.icon {
  padding: 2.6vw 0;
  margin-right: 4vw;
}
.icon img {
  width: 11.73333vw;
  height: 11.73333vw;
  border-radius: 50%;
}
.info {
  display: flex;
  flex-direction: column;
  color: #595959;
  padding: 0.2rem 0;
  padding: 2vw 0;
  position: relative;
}
span {
  font-size: 4vw;
  margin-bottom: 2.6vw;
}
p {
  font-size: 3.4vw;
}
</style>
