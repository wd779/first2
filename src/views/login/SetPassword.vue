<template>
  <div class="forgetPass">
    <!-- 设置密码页面 -->
    <!-- 头部 -->
    <div class="header">
      <p></p>
      <p>设置密码</p>
      <p>跳过</p>
    </div>
    <!-- 找回密码 -->
    <div class="van-form">
      <van-field v-model="password" name="验证码" label placeholder="请设置登录密码" />
      <van-field v-model="pass" name="密码" label placeholder="请在次输入密码" />
      <div style="margin: 0.3rem;">
        <van-button round block type="warning" native-type="submit" @click="onSubmit">确定</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { AjaxPass } from "@/utils/myApi";
export default {
  // 组件名称
  name: "",
  // 组件参数 接收来自父组件的数据
  props: [],
  // 局部注册的组件
  components: {},
  // 组件状态值
  data() {
    return {
      mobile: this.$route.query.mobile,
      sms_code: this.$route.query.sms_code,
      password: "",
      pass: ""
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    async onSubmit(values) {
      let pass = /^[0-9]{6,12}$/; // 密码正则
      if (pass.test(this.password)) {
        if (this.pass == this.password) {
          let res = await AjaxPass({
            mobile: this.mobile,
            password: this.password,
            sms_code: this.sms_code
          });
          // 修改密码
          console.log("submit", values);
          console.log(res);
          if (res.code == 200) {
            this.$router.push('/setMessage')
            this.$toast.success("设置成功");
          }
        } else {
          this.$toast("密码必须和第一次输入的一样");
        }
      } else {
        this.$toast("密码必须是6-12位的数字");
      }
    }
  },
  /**
   * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
   */
  created() {
    console.log(123);
  },
  mounted() {
    console.log();
    console.log();
  }
};
</script> 

<style scoped lang="scss">
.forgetPass {
  width: 100%;
  height: 100%;
  background-color: #fff;
  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 0.1rem;
    box-sizing: border-box;
    height: 0.45rem;
    align-items: center;
    background-color: #fff;
    font-size: 0.18rem;
  }
  .van-form {
    .van-field:hover {
      border-bottom: 1px solid #eb6100;
    }
    .van-field {
      line-height: 0.4rem;
    }
  }
}
</style>
