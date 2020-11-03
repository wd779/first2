<template>
  <div class="box">
    <!-- 头部组件 -->
    <app-header>
      <template>
        <div slot="title">我的收藏</div>
        <div slot="right"></div>
      </template>
    </app-header>
    <div class="div-box">
      <div class="item" v-for="(item,index) in list" :key="index">
        <van-icon name="star" size="24" @click="del(item.collect_id)"/>
        <div class="top">
          <p class="title">{{item.title}}</p>
          <p class="itme">
            <span class="duration">
              <img
                src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=286605818,4063183168&fm=11&gp=0.jpg"
                alt
              />
              <span>02月18日 13:00 ~ 02月20日 17:00</span>
            </span> |
            <span class="keshi">共4课时</span>
          </p>
          <ul class="teachers">
            <li>
              <img
                :src="item.teachersAvatar"
                alt
              />
              <span>{{item.teachers}}</span>
            </li>
          </ul>
        </div>
        <div class="bottom">
          <div class="info">
            <p class="p-title">{{item.sales_num}}人已报名</p>
            <div class="price">
              <p class="price-now">
                <img
                  src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=286605818,4063183168&fm=11&gp=0.jpg"
                  alt
                /> {{item.price}}
              </p>
            </div>
          </div>
        </div>
      </div>
      <p class="van-list__finished-text">没有更多了</p>
    </div>
  </div>
</template>

<script>
import appHeader from "../../components/AppHeader.vue";
import {GetCollect , postCancel} from '../../utils/homeApi'
export default {
  // 组件名称
  name: "",
  // 组件参数 接收来自父组件的数据
  props: [],
  // 局部注册的组件
  components: { appHeader },
  // 组件状态值
  data() {
    return {
      list:[]
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    async onGetCollect(){
      let res = await GetCollect()
      this.list = res.data.list
      console.log( this.list);
    },


    async del(collect_id){
      console.log(collect_id);
      let res = await postCancel(collect_id)
      if(res.code == 200){
        this.onGetCollect()
      }
    }
  },
  /**
   * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
   */
  created() {},
  mounted() {
    this.onGetCollect() 
  }
};
</script> 

<style scoped lang="scss">
.box {
  width: 100%;
}
.div-box {
  width: 100%;
  height: 90vh;
  overflow: scroll;

  padding: 0.15rem 0.1rem;
  box-sizing: border-box;
  .van-list__finished-text{
    color: #969799;
    font-size: 1.86667vw;
    line-height: 6.66667vw;
    text-align: center;
  }
  .item {
    position: relative;
    width: 100%;
    height: 1.85rem;
    background-color: #fff;
    border-radius: 0.06rem;
    padding: 0.1rem;
    box-sizing: border-box;
    margin-bottom: 0.1rem;
    .van-icon{
      position: absolute;
      font-size: 0.2rem;
      color: orangered;
      top: 0.15rem;
      right: 0.15rem;
    }
    .title {
      font-size: 0.16rem;
      line-height: 0.16rem;
      font-weight: 500;
      color: #000;
    }
    .itme {
      line-height: 0.14rem;
      font-size: 0.14rem;
      font-weight: 400;
      color: #666;
      line-height: 0.14rem;
      margin: 0.1rem 0 0.3rem 0;
      img {
        width: 0.14rem;
        height: 0.14rem;
        margin-right: 0.05rem;
      }
    }
    .teachers {
      width: 100%;
      height: 0.36rem;
      li {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        img {
          width: 0.28rem;
          height: 0.28rem;
          border-radius: 50%;
        }
        span {
          font-size: 2.93333vw;
          color: rgba(0, 0, 0, 0.45);
          margin-left: 0.08rem;
        }
      }
    }
  }
  .bottom {
    width: 100%;
    height: 0.36rem;
    margin-top: 0.15rem;
    padding-top: 0.05rem;
    box-sizing: border-box;
    border-top: 1px solid #f5f5f5;
    .info {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: bottom;
      padding-top: 0.16rem;
      box-sizing: border-box;
      .p-title {
        font-size: 0.12rem;
        color: rgba(0, 0, 0, 0.45);
      }
      .price {
        .price-now {
          font-size: 4.66667vw;
          color: #ee1f1f;
          display: inline-block;
          img {
            width: 0.08rem;
            height: 0.08rem;
          }
        }
      }
    }
  }
}
</style>
