<template>
  <div>
    <div class="nav">
      <div class="nav_left">
        <van-icon name="arrow-left" size="22" @click="back"></van-icon>
      </div>
      <div class="nav_right">
        <van-search v-model="value" show-action placeholder="请输入搜索关键词">
          <template #action>
            <div @click="onSearch" class="search">搜索</div>
          </template>
        </van-search>
      </div>
    </div>
    <div class="tags" v-show="show">
      <p>
        搜索记录
        <span class="float">
          <van-icon name="delete" @click="clear" />
        </span>
      </p>
      <br />
      <van-tag
        color="#F7F7F7"
        text-color="#000"
        v-for="(item, index) in showL"
        :key="index"
        @click="value = item"
        >{{ item }}</van-tag
      >
    </div>
    <div class="connect" v-show="!show">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
      >
        <van-cell v-for="item in ShowList" :key="item.id">
          <!-- @click="toDetails(item)" -->
          <Card :data="item" />
        </van-cell>
      </van-list>
    </div>
  </div>
</template>

<script>
import { Search } from "../../utils/appointmtemtApi";
import Card from "../../components/Card copy 2";
export default {
  // 组件名称
  name: "", // 组件参数 接收来自父组件的数据
  props: [], // 局部注册的组件
  components: { Card }, // 组件状态值
  data() {
    return {
      value: "",
      list:  JSON.parse(localStorage.getItem("searchList")) ||[],
      ShowList: [],
      finished: false,
      loading: false,
      requeryHeader: {
        limit: 10,
        page: 1,
        course_type: "0",
      },
    };
  }, // 计算属性
  computed: {
    show() {
      if (this.value == "") {
        return true;
      } else {
        return false;
      }
    },
    showL(){
      if (this.list.length >= 4 ) {
        return this.list.slice(list.length - 4, list.length)
      }
      return this.list
    }
  }, // 侦听器
  watch: {}, // 组件方法
  methods: {
    back() {
      this.$router.go(-1);
    },
    clear(){
      this.list = [];
      localStorage.searchList = JSON.stringify(this.list);
    },
    async onSearch() {
      if (this.value == "") {
        return false;
      }
      let res = await Search({
        ...this.requeryHeader,
        keywords: this.value,
      });
      if (res.code == 200) {
        this.ShowList = [];
        res.data.list.forEach((element) => {
          this.ShowList.push(element);
        });
        this.finished = true;
        // var arr = this.list;
        // arr.forEach(item=>{
        //     if (item == this.value) {
        //         return
        //     }
        // })
        // arr.push(this.value);
        // localStorage.searchList = JSON.stringify(arr);
        // console.log(this.list);
        // console.log([...new Set(this.list)]);
        this.list.push(this.value)
        console.log(this.list);
        this.list = [...new Set(this.list)];
        console.log(this.list);
        localStorage.searchList = JSON.stringify(this.list);
      } else {
        console.log("没有查询到相关信息");
      }
      //   console.log(res.data.list);
    },
  },
  created() {},
  mounted() {},
};
</script> 

<style scoped>
.nav {
  display: flex;
  padding-left: 0.1rem;
  box-sizing: border-box;
  background: #ffffff;
  height: 8vh;
  font-size: 0.1rem;
}
.connect{
  height: 92vh;
}
.float {
  float: right;
}
.search {
  font-size: 0.1rem;
}
.van-search {
  padding: 0.06rem 0.04rem;
}
.tags {
  width: 100%;
  padding: 0.1rem;
  box-sizing: border-box;
}

.nav_left {
  flex: 1;
  width: 0.2rem;
  text-align: center;
  display: flex;
  justify-items: center;
  align-items: center;
}
.nav_right {
  flex: 14;
}
.icon {
  font-size: 0.4rem;
}
</style>
