<template>
  <div class="login">
    <!-- 登录页面 -->
    <!-- logo -->
    <div class="logo">
      <img src="../../assets/2019pILfAg7Avr1567732916.png" alt />
    </div>
    <!-- 登录 -->
    <div class="van-form">
      <!-- 用户名 -->
      <van-field v-model="mobile" label placeholder="请输入手机号" />
      <!-- 密码  -->
      <van-field v-model="password" type="password" label placeholder="请输入密码" />
      <div class="pass">
        <span @click="$router.push('/forgetPass')">找回密码</span>
        <span @click="$router.push('/smsLogin')">注册/验证码登录</span>
      </div>
      <div class="vvv">
        <van-button round block type="warning" @click="onSubmit" native-type="submit">登录</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { AjaxLogin } from "@/utils/myApi";
export default {
  // 组件名称
  name: "Login",
  // 组件参数 接收来自父组件的数据
  props: [],
  // 局部注册的组件
  components: {},
  // 组件状态值
  data() {
    return {
      mobile: "",
      password: "",
      type: 1
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    // 登录
    async onSubmit(values) {
      let pattern = /^1[3|4|5|7|8][0-9]{9}$/; // 手机号正则
      let pass = /^[0-9]{6,12}$/; // 密码正则
      if (pattern.test(this.mobile)) {
        if (pass.test(this.password)) {
          let res = await AjaxLogin({
            mobile: this.mobile,
            password: this.password,
            type: this.type
          });
          if (res.code == 200) {
            sessionStorage.setItem("token", res.data.remember_token);
            this.$toast.success("登录成功");
            this.$router.push("/mine");
          }
          console.log(res);
        } else {
          this.$toast("密码必须是6-12位的数字");
        }
      } else {
        this.$toast("请输入正确的手机号");
      }
    }
  },
  /**
   * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
   */
  created() {},
  mounted() {}
};
</script> 

<style scoped lang="scss">
.login {
  width: 100%;
  height: 100%;
  background-color: #fff;
  .logo {
    width: 100%;
    padding: 0 0.4rem;
    box-sizing: border-box;
    img {
      width: 2.36rem;
      margin: 0.5rem 0.3rem;
    }
  }
  .van-form {
    padding: 0 0.4rem;
    .van-field:hover {
      border-bottom: 1px solid #eb6100;
    }
  }
  .pass {
    font-size: 0.12rem;
    color: #999;
    display: flex;
    justify-content: space-between;
    margin-top: 0.2rem;
    margin-bottom: 0.4rem;
    padding: 0 0.1rem;
  }
}
.vvv {
  color: rgb(235, 97, 0);
}
</style>
