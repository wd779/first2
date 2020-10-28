<template>
  <div>
    <van-nav-bar title="特色课" left-arrow @click-left="onClickLeft">
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
import { GetCurriculum } from "../../utils/appointmtemtApi";
export default {
  // 组件名称
  name: "", // 组件参数 接收来自父组件的数据
  props: [], // 局部注册的组件
  components: {}, // 组件状态值
  data() {
    return {
      data: "",
    };
  }, // 计算属性
  computed: {}, // 侦听器
  watch: {}, // 组件方法
  methods: {
    async getdata() {
      console.log(this.$route.query);
      var a = await GetCurriculum({
        basis_id: this.$route.query.con.id,
      });
      console.log(a);
    },
    onClickLeft(){
      this.$router.go(-1)
    }
  },
  /**
   * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
   */ created() {},
  mounted() {
    this.getdata();
    // this.GetCurriculum().then(res=>{
    //     console.log(res);
    // })
  },
};
</script> 

<style lang="scss" scoped >
</style>
