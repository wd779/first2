<template>
  <div>
    <van-nav-bar
      title="一对一辅导"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickSearch"
    >
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>

    <!-- 下拉菜单 -->
    <van-dropdown-menu>
      <van-dropdown-item title="选择上课时间">
        <van-cell is-link @click="showPopup">
          <van-calendar
            :poppable="false"
            :show-confirm="false"
            :style="{ height: '300px' }"
          />
           <div class="footer"></div>
        </van-cell>

       
      </van-dropdown-item>
        
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>

    <!-- 一对一列表 -->
    <div class="fudao_content">
      <div class="fudao_content_warpper" v-for="item in 10" :key="item">
        <!-- 左侧图片盒子 -->
        <div class="fudao_content_left">
          <van-image
            round
            width="10rem"
            height="10rem"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
            style="width: 40px; height: 40px"
          />
        </div>
        <!-- 描述盒子 -->
        <div class="fudao_content_right">
          <div class="right_title">
            <p>杨德胜</p>
            <p class="xinxi">
              <span>男</span>
              <span>30年教龄</span>
            </p>
          </div>
        </div>

        <!-- 按钮 -->
        <div class="right_msg">
          <van-button plain round type="danger" size="mini">预约</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 0,
      value2: "a",
      option1: [{ text: "选择上课时间", value: 0 }],
      option2: [
        { text: "选择老师条件", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" },
      ],
      show: false,
    };
  },
  methods: {
    // 返回上一层
    onClickLeft() {
      this.$router.go(-1);
    },
    // 跳进搜索页
    onClickSearch() {
        
    },
    // 弹出层
    showPopup() {
      this.show = true;
    },
  },
};
</script>

<style scoped>
.fudao_content {
  width: 100%;
  height: 0.8rem;
}
.fudao_content_warpper {
  width: 95%;
  height: 0.8rem;
  background-color: #fff;
  margin: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.right_msg {
  width: 20%;
  font-size: 10px;
  color: #b7b7b7;
}
.right_title {
  color: #595959;
}

.fudao_content_left {
  width: 20%;
}
.fudao_content_right {
  width: 60%;
}
.van-icon::before {
    display: none;
}
.footer{
    width: 100%;
    height: 500px;
    background-color: #fff;
    z-index: 9999;
}
</style>