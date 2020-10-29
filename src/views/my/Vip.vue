<template>
  <div>
    <!-- 头部组件 -->
    <app-header>
      <template>
        <div slot="title">开通会员</div>
        <div slot="right"></div>
      </template>
    </app-header>
    <!-- 会员 -->
    <div class="top">
      <div class="box">
        <img
          src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png"
          alt
        />
        <div class="info">
          <div class="name">玛卡巴卡</div>
          <p class="note">开通会员免费学习</p>
        </div>
      </div>
    </div>
    <!-- 购买会员 -->
    <div data-v-d183123a class="bottom">
      <p data-v-d183123a>
        <span data-v-d183123a class="tag1">购买会员</span>
        <span data-v-d183123a class="tag2">购买会员后可免费观看会员课程</span>
      </p>
      <div data-v-d183123a class="vip-items">
        <div data-v-d183123a class="vip-item select">
          <p data-v-d183123a class="name">季度会员</p>
          <p data-v-d183123a class="price">
            <img
              data-v-d183123a
              src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png"
              class="price-ico"
            />
            <span data-v-d183123a>40.00</span>
          </p>
        </div>
        <div data-v-d183123a class="vip-item">
          <p data-v-d183123a class="name">半年会员</p>
          <p data-v-d183123a class="price">
            <img
              data-v-d183123a
              src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png"
              class="price-ico"
            />
            <span data-v-d183123a>75.00</span>
          </p>
        </div>
        <div data-v-d183123a class="vip-item">
          <p data-v-d183123a class="name">月会员</p>
          <p data-v-d183123a class="price">
            <img
              data-v-d183123a
              src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png"
              class="price-ico"
            />
            <span data-v-d183123a>15.00</span>
          </p>
        </div>
      </div>
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
.top {
  position: relative;
}
.box {
  border-top: 1px solid #f5f5f5;
  height: 19.46667vw;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 0 4vw;
  position: relative;
}
img {
  width: 11.46667vw;
  //   height: 11.46667vw;
  border-radius: 50%;
}
.info {
  margin-left: 2.66667vw;
  line-height: 5.6vw;
}
.name {
  font-size: 3.73333vw;
  font-weight: 500;
  color: #595959;
}
.note {
  font-size: 3.2vw;
  color: #8c8c8c;
}
.bottom {
  padding: 8vw 4vw;
}
.select[data-v-d183123a] {
  border: 0.26667vw solid #e6c37f;
  background-color: #f9f0d9;
}
.vip-items {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: space-between;
  padding-top: 5.33333vw;
}
.vip-item {
  width: 26.66667vw;
  height: 29.33333vw;
  border-radius: 2.13333vw;
  border: 0.26667vw solid #d9d9d9;
  background-color: #fff;
  margin-bottom: 2.66667vw;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.tag1 {
  font-size: 4vw;
  font-weight: 500;
  color: #595959;
}
.tag2 {
  margin-left: 2.66667vw;
  font-size: 3.2vw;
  color: #8c8c8c;
}
.name {
  font-size: 3.46667vw;
  font-weight: 600;
  color: #595959;
  margin-bottom: 2.66667vw;
  line-height: 4vw;
}
.price {
  font-size: 7.46667vw;
  color: #d5a322;
}
.price-ico {
  width: 3.73333vw;
  margin-right: 0.4vw;
}
</style>
