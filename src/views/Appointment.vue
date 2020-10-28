<template>
  <div class="box">
    <van-tabs v-model="active" @change="change">
      <van-tab
        :title="item"
        v-for="(item, index) in list"
        :key="index"
      ></van-tab>
    </van-tabs>
    <van-popup v-model="show" class="xiangx" position="top">
      <div v-if="active == 0" class="">
        <p>年级</p>
        <button v-for="item in list1" :key="item" class="btns">
          {{ item }}
        </button>
        <p>学科</p>
        <button v-for="item in list2" :key="item" class="btns">
          {{ item }}
        </button>
        <div class="btn_bottom">
          <van-button class="btn_bottom_btn" type="info" @click="Reset">重置</van-button>
          <van-button class="btn_bottom_btn" type="primary" @click="suc">确定</van-button>
        </div>
      </div>
      <div v-if="active == 1">
           <van-cell v-for="item in list2" :key="item" :title="item" />
      </div>
      <div v-if="active == 2">
        <button v-for="item in list2" :key="item" class="btns">
          {{ item }}
        </button>
      </div>
    </van-popup>
    <Card v-for="item in 10" :key="item"> </Card>
  </div>
</template>

<script>
import Card from "../components/Card";
export default {
  components: {
    Card,
  },
  data() {
    return {
      active: 1,
      list: ["分类", "排序", "筛选"],
      list1: ["初一", "初二"],
      list2: ["语文", "数学", "英语", "化学", "物理"],
      show: false,
    };
  },
  mounted() {},
  methods: {
    change() {
      this.show = true;
    },
    Reset(){
      this.show = false;
    },
    suc(){
      this.show = false;
    }
  },
};
</script>

<style lang="scss" scoped>
.btn_bottom {
  width: 100%;
  height: 0.8rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .btn_bottom_btn {
    height: 0.4rem;
    width: 40%;
    border-radius: 0.4rem;
  }
}
.van-tab--active {
  color: red;
}
.van-tabs {
  z-index: 9999;
}
.xiangx {
  top: 44px;
}
.btn {
  margin: 0.05rem;
  height: 0.3rem;
}
.box {
  height: 90vh;
  overflow: scroll;
  P {
    width: 100%;
    margin: 0.1rem 0;
    text-indent: 1em;
  }
  .btns {
    list-style: none;
    border: 0;
    width: 60px;
    height: 26px;
    line-height: 26px;
    margin: 0.1rem 0.1rem;
    background: #ccc;
    font-size: 12px;
    border-radius: 2px;
  }
}
</style>