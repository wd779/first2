<template>
  <div class="box">
    <van-tabs v-model="active" @change="change" class="box_top">
      <van-tab
        :title="item"
        v-for="(item, index) in list"
        :key="index"
      ></van-tab>
    </van-tabs>
    <van-popup v-model="show" class="xiangx" position="top">
      <div v-if="active == 0">
        <p>年级</p>
        <button v-for="item in attrclassify.attrclassify" :key="item.id" @click="activeItem(item.name,SearchArr[1])" :class="item.name==SearchArr[0]?'btns_avtive':'btns'" >
          {{ item.name }}
        </button>
        <p>学科</p>
        <button v-for="item in attrclassify.classify" :key="item.id" @click="activeItem(SearchArr[0],item.name)" :class="item.name==SearchArr[1]?'btns_avtive':'btns'">
          {{ item.name }}
        </button>
        <div class="btn_bottom">
          <van-button class="btn_bottom_btn" type="info" @click="Reset">重置</van-button>
          <van-button class="btn_bottom_btn" type="primary" @click="suc">确定</van-button>
        </div>
      </div>
      <div v-if="active == 1">
        <van-cell v-for="item in courseClassify" :key="item.id" :title="item.name" @click="searchText(item.name)" />
      </div>
      <div v-if="active == 2">
        <button v-for="item in course_types" :key="item.type" @click="changeActive(item.value)" :class="item.value==seartypes?'btns_avtive':'btns'">
          {{ item.value }}
        </button>
      </div>
    </van-popup>
    <Card v-for="item in ShowCourseList" :key="item.id" :data="item"> </Card>
  </div>
</template>

<script>
import { GetData,GetDataList } from "../utils/appointmtemtApi";
import Card from "../components/Card";
export default {
  components: {
    Card,
  },
  data() {
    return {
      active: '',
      list: ["分类", "排序", "筛选"],
      attrclassify: {
        attrclassify: [
          {
            id: 1,
            name: "初一",
          },
          {
            id: 2,
            name: "初二",
          },
          {
            id: 3,
            name: "初三",
          },
          {
            id: 4,
            name: "高一",
          },
          {
            id: 5,
            name: "高二",
          },
        ],
        classify: [
          {
            id: 7,
            name: "语文",
          },
          {
            id: 8,
            name: "数学",
          },
          {
            id: 9,
            name: "英语",
          },
          {
            id: 12,
            name: "物理",
          },
          {
            id: 13,
            name: "化学",
          },
        ],
      },
      courseClassify:[],
      course_types: [
        { type: 0, value: "全部" },
        { type: 2, value: "大班课" },
        { type: 3, value: "小班课" },
        { type: 4, value: "公开课" },
        { type: 5, value: "点播课" },
        { type: 7, value: "面授课" },
        { type: 8, value: "音频课" },
        { type: 9, value: "系统课" },
        { type: 10, value: "图文课" },
        { type: 11, value: "会员课" },
      ],
      show: false,
      CourseList:[],
      SearchArr:[],
      seartypes:"",
      searchTex:""
    };
  },
  created() {
    GetData().then((res) => {
      // console.log(res.data.appCourseType);
      this.courseClassify = res.data.appCourseType;
      // console.log(this.courseClassify);
    });
    GetDataList().then(res=>{
      this.CourseList = res.data.list
      // console.log(res.data.list);
    });

    this.activeItem("");
    this.changeActive("全部");
    this.SearchArr=["",""];
  },

  methods: {
    change() {
      this.show = true;
    },
    searchText(i){
      this.searchTex = i ;
       this.show = false;
    },
    activeItem(name,name1){
      this.SearchArr = [name,name1]
    },
    Reset() {
      this.SearchArr = ["",""]
    },
    suc() {
      this.show = false;
    },
    changeActive(types){
      this.seartypes = types;
      this.show = false;
    }
  },
  computed:{
    ShowCourseList(){
      var res = this.CourseList;
      var searchStr = ""  
      if (this.active == 0 ) {
          searchStr = this.SearchArr[0]+this.SearchArr[1];
      }else  if (this.active == 1 ) {
          searchStr = this.searchTex;
      }else  if (this.active == 2 ) {
          searchStr = this.seartypes;
      }
      console.log(searchStr);
      
      return res
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
.box_top{
  position: fixed;
  top: 0;
  left: 0;
  height: 59px;
  width: 100%;
  background: white;
}
.van-cell__title{
  text-align: center;
}
.van-tab--active {
  color: red;
}
.van-tabs {
  z-index: 9999;
}
.xiangx {
  top: 50px;
}
.btn {
  margin: 0.05rem;
  height: 0.3rem;
}
.box {
  height: 90vh;
  overflow: scroll;
  margin-top: 50px;
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
  .btns_avtive {
    list-style: none;
    border: 0;
    width: 60px;
    height: 26px;
    line-height: 26px;
    margin: 0.1rem 0.1rem;
    background: rgb(70, 129, 55);
    font-size: 12px;
    border-radius: 2px;
    color: aliceblue;
  }
}
</style>