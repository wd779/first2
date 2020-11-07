<template>
  <div class="box_container">
    <div class="box_wrapper">
      <h6>{{ datas.title }}</h6>
      <p>{{ datas.course_statement || "暂无描述" }}</p>
      <div class="user">
        <div class="tea"> 
          <img :src="datas.teachers_list[0].teacher_avatar" />
          <span>{{ datas.teachers_list[0].teacher_name }}</span>
        </div>
        <div v-if="datas.price == 0">
          <img src="https://wap.365msmk.com/img/has-buy.6cfbd83d.png" class="img1" />
        </div>
      </div>
      <p>
        {{ datas.sales_num }}人已报名
        <b :class="datas.price == 0 ? '' : 'red'">
          {{
          datas.price == 0 ? "免费" : "￥" + datas.price
          }}
        </b>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: function() {
        return {
          title: "标题",
          desc: "描述",
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603780371383&di=418f70b09f7c380e134464456dd454f2&imgtype=0&src=http%3A%2F%2Fimg02.fs.yiban.cn%2F43259453%2Favatar%2Fuser%2F200",
          name: "姓名"
        };
      }
    }
  },
  computed: {
    datas() {
      // console.log(this.data);
      return this.data;
    }
  }
};
</script>

<style lang="scss" scoped>
.box_container {
  margin: 1%;
  width: 98%;
//   background: white;
  border-radius: 5px;
  box-sizing: border-box;
}
.box_wrapper {
  margin: 0.08rem;
  font-size: 0.1rem;
  h6 {
    font-weight: normal;
    height: 0.5rem;
    line-height: 0.5rem;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    font-size: 4.26667vw;
  }
  p {
    // border-top: 1px solid #f5f5f5;
    // margin-top: 0.1rem;
    // width: 100%;
    // font-size: 3.2vw;
    // display: -webkit-box;
    // -webkit-box-orient: vertical;
    // -webkit-line-clamp: 1;
    // overflow: hidden;
    border-top: 1px solid #f5f5f5;
    height: 11.73333vw;
    line-height: 11.73333vw;
    display: flex;
    font-size: 3.46667vw;
    font-family: PingFangSC-Regular;
    justify-content: space-between;
    color: rgb(112, 111, 111);
    b {
      font-weight: normal;
      color: #44a426;
      font-size: 4.26667vw;
    }
    b.red {
      color: red;
      font-size: 0.1rem;
    }
  }
}
.user {
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 50%;
  }
  .img1 {
    width: 15.73333vw;
    height: 12.8vw;
  }
  span {
    text-indent: 1em;
    font-size: 0.1rem;
  }
}
.tea{
    display: flex;
    align-items: center;
    color: rgb(109, 106, 106);
}
</style>