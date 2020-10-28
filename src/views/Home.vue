<template>
  <div class="home">
    <div class="con">
      <!-- 轮播图 -->
      <Swiper :Swiper="Swiper"></Swiper>
      <!-- 图标 -->
      <IconBotton class="icon"></IconBotton>
    </div>

    <!-- 名师阵容 -->
    <Title>名师阵容</Title>
    <Teacher></Teacher>
    <!-- 精品课程 -->
    <Title>精品课程</Title>
    <Crad></Crad>
    <!-- 明星讲师 -->
    <Title>明星讲师</Title>
    <RenownedTeacher></RenownedTeacher>
  </div>
</template>

<script>
import Swiper from "../components/Swiper/Swiper"; //轮播图
import IconBotton from "../components/iconBotton/iconBotton"; //按钮 图标
import Teacher from "../components/Teacher/TeacherLineup"; //名师阵容
import RenownedTeacher from "../components/Renownedteacher/renownedteacher"; //明星讲师
import Crad from "../components/Card";  //精品课程
import Title from "../components/Renownedteacher/Renowned_teacher_border";  //home页  分类标签组件
export default {
  name: "Home",
  components: {
    Swiper,
    IconBotton,
    Teacher,
    RenownedTeacher,
    Crad,
    Title,
  },

  data() {
    return {
      Swiper: [
        { Swiper: require("../assets/Swiper/20193KAjU2cB6h1569839562.jpg") },
        { Swiper: require("../assets/Swiper/20197Cxc53hktC1569839552.jpg") },
        { Swiper: require("../assets/Swiper/2019LnKumseuhw1569839569.jpg") },
        { Swiper: require("../assets/Swiper/2019MGNW3BtiS91569839576.jpg") },
      ],
    };
  },
};
</script>
<style scoped>
.home{
  height: 90vh;
  overflow: scroll;
  margin-bottom: 64px;
}
.con {
  width: 100%;
  height: 3rem;
  position: relative;
}
.icon {
  width: 100%;
  position: absolute;
  bottom: 0.3rem;
}
</style>
