<template>
  <div class="msg">
    <app-header>
      <template>
        <div slot="title">{{title}}</div>
        <div slot="right"></div>
      </template>
    </app-header>
    <div class="jh_messageDetail_cont">
      <ul>
        <li v-for="(value,index) in list" :key="index">
          <p>{{value.created_at*1000 | timeA}}</p>
          <p>
            {{value.content}}
            <router-link
              :to="{path:'/orderDetail',query:{order_id:value.order_id}}"
              tag="span"
              v-if="value.link_type===1"
            >点击支付>></router-link>
          </p>
        </li>
      </ul>
      <p>没有更多了</p>
    </div>
  </div>
</template>
<script>
import appHeader from "../../components/AppHeader";
import { msgDetailAjax } from "../../utils/myApi";
export default {
  components: {
    appHeader
  },
  data() {
    return {
      title: "",
      message_classify: "",
      limit: 10,
      page: 1,
      list: []
    };
  },
  created() {
    this.title = this.$route.query.title;
    this.message_classify = this.$route.query.message_classify;
  },
  mounted() {
    this.getMessage();
  },
  methods: {
    async getMessage() {
      let obj = {
        message_classify: this.message_classify,
        limit: this.limit,
        page: this.page
      };
      let { data } = await msgDetailAjax(obj);
      console.log(data);
      this.list = data.list;
    }
  }
};
</script>

<style scoped lang='scss'>
.msg {
  width: 100%;
  height: 100%;
  overflow: auto;
  background: #fff;
}
.jh_messageDetail_cont {
  padding: 0 2.66667vw;
  box-sizing: border-box;
  width: 100%;
  > p {
    font-size: 3.2vw;
    line-height: 6.66667vw;
    text-align: center;
    color: #969799;
  }
  ul {
    width: 100%;
    box-sizing: border-box;
    padding: 0 2.66667vw;
    background-color: #fff;
    li {
      width: 100%;
      padding: 4vw 0;
      border-bottom: 1px solid #f5f5f5;
      background-color: #fff;
      p {
        font-size: 3.46667vw;
        color: #8c8c8c;
        line-height: 4.8vw;
        padding: 0 2.66667vw;
        margin-top: 4vw;
        span {
          color: #eb6100;
        }
      }
      p:nth-of-type(1) {
        width: 23.2vw;
        height: 6.4vw;
        background: #b7b7b7;
        border-radius: 0.53333vw;
        font-size: 2.93333vw;
        color: #fff;
        line-height: 6.4vw;
        padding: 0 1.33333vw;
        text-align: center;
        margin: 0 auto;
      }
    }
  }
}
</style>
