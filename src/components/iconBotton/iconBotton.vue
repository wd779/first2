<template>
  <div>
    <div class="icon_con">
      <div class="icon_warpper">
        <div class="icon_botton">
          <ul>
            <li @click="onClick">
              <img src="../../assets/imgs/特色课.png" alt="" />
              <p>特色课</p>
            </li>
            <li @click="onClick2">
              <img src="../../assets/imgs/一对一.png" alt="" />
              <p>一对一辅导</p>
            </li>
            <li>
              <img src="../../assets/imgs/学习日历.png" alt="" />
              <p>学习日历</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    // 点击进入 课程
    onClick(){
      this.$router.push({
        path:'/Appointment'
      })
    },

    // 点击进入一对一辅导
    onClick2(){
      this.$router.push({
        path:"/fudao"
      })
    }
  }
};
</script>

<style scoped>
.icon_con {
  width: 100%;
  height: 0.6rem;
}
.icon_warpper {
  width: 100%;
  height: 0.8rem;
}
.icon_botton {
  width: 100%;
  height: 0.8rem;
  /* position: fixed; */
  /* border: 1px solid #000; */
  /* top: 2rem; */
}

ul {
  width: 100%;
  height: 100%;
  list-style: none;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0px 8px;
  align-items: center;
  font-size: 12px;
  color: #8c8c8c;
}
ul li {
  width: 30%;
  height: 100%;
  background-color: #fff;
  text-align: center;
  border-radius: 8px 8px 8px 8px;
}
ul li img {
  width: 25px;
  height: 25px;
  align-items: center;
  margin-top: 10px;
}
</style>