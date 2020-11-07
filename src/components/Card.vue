<template>
  <div class="box_container">
    <div class="box_wrapper">
      <h6>{{ datas.title }}</h6>
      <div class="user">
        <div>
          <img :src="datas.teachers_list[0].teacher_avatar" />
        <span>
          {{ datas.teachers_list[0].teacher_name }}
        </span>
        </div>
        
        <div class="float" v-if="datas.price == 0">
          <img src="../assets/has-buy.png" />
        </div>
      </div>

      <p>
        {{ datas.sales_num }}人已报名
        <b :class="datas.price == 0 ? '' : 'red'">{{
          datas.price == 0 ? "免费" : "￥" + datas.price
        }}</b>
      </p>
    </div>
  </div>
</template>

<script>
import { GetCurriculum } from "../utils/appointmtemtApi";
export default {
  props: {
    data: {
      type: Object,
      default: function () {
        return {
          title: "标题",
          desc: "描述",
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603780371383&di=418f70b09f7c380e134464456dd454f2&imgtype=0&src=http%3A%2F%2Fimg02.fs.yiban.cn%2F43259453%2Favatar%2Fuser%2F200",
          name: "姓名",
        };
      },
    },
  },

  computed: {
    datas() {
      // console.log(this.data);
      return this.data;
    },
    isbuy() {
      return this.info.has_buy;
    },
  },
  data() {
    return {
      info: "",
    };
  },
  methods: {
    async getdata() {
      var a = await GetCurriculum(this.datas.id);
      // console.log(a);
      this.info = a.data.info;
    },
  },
  mounted() {
    this.getdata();
  },
};
</script>

<style lang="scss" scoped>

.box_container {
  height: 1.5rem;
  margin: 1vw;
  width: 98vw;
  background: white;
  // box-shadow: 3px 1px 5px #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}
.box_wrapper {
  margin: 0.2rem;
  font-size: 0.12rem;
  h6 {
    font-weight: normal;
    padding-top: 0.1rem;
    height: 0.44rem;
    font-size: 0.15rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  p {
    margin-top: 0.1rem;
    width: 100%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    b {
      font-weight: normal;
      color: #44a426;
      float: right;
    }
    b.red {
      color: red;
    }
  }
}
.user {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.2rem;
  img:nth-child(1) {
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 50%;
  }
  img:nth-child(2){
    width: 0.44rem;
    height: 0.44rem;
  }
  span {
    text-indent: 1em;
    line-height: 100%;
  }
}
</style>