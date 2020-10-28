<template>
  <div>
    <van-tabs v-model="active" @change="change">
      <van-tab
        :title="item"
        v-for="(item, index) in list"
        :key="index"
      ></van-tab>
    </van-tabs>
    <van-popup
      v-model="show"
      class="xiangx"
      position="top"
    >
      <h4>123</h4>
      <van-button
        class="btn"
        size="normal"
        type="info"
        v-for="(item, index) in list1"
        :key="index"
      >
        {{ item }}
      </van-button>
    </van-popup>
    <Card>

    </Card>
  </div>
</template>

<script>
import Card from '../components/Card'
export default {
  components: {
      Card
  },
  data() {
    return {
      active: 1,
      list: ["分类", "排序", "筛选"],
      list1: ["111", "222"],
      show: false,
    };
  },
  mounted() {},
  methods: {
    change() {
      this.show = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.van-tab--active {
  color: red;
}
.van-tabs{
    z-index: 9999;
}
.xiangx {
  top: 44px;
}
.btn {
  margin: 0.05rem;
  height: 0.3rem;
}
</style>