<template>
  <div class="smsLogin">
    <!-- 注册/验证码登录页面 -->
    <!-- logo -->
    <div class="logo">
      <img src="../../assets/2019pILfAg7Avr1567732916.png" alt />
    </div>
    <!-- 验证码登录 -->
    <div class="van-form">
      <div class="yan">
        <van-field v-model="mobile" name="用户名" label placeholder="请输入手机号" />
        <span @click="sms" v-show="!flag">获取验证码</span>
        <span v-show="flag" style="color:#ccc;">获取验证码 ({{count}})</span>
      </div>
      <van-field v-model="sms_code" name="验证码" label placeholder="请输入短信验证码" />
      <div class="pass">
        <span style="color: #b7b7b7;">*未注册的手机号将自动注册</span>
        <span style="color: #999;" @click="$router.push('/login')">使用密码登录</span>
      </div>
      <div style="margin: 0.3rem;">
        <van-button round block type="warning" native-type="submit" @click="onSubmit">登录</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { AjaxLogin, AjaxSmsLogin } from "@/utils/myApi";
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
      mobile: "",
      sms_code: "",
      type: 2,
      sms_type: "",
      client: 1,
      flag: false,
      count: ""
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    // 登录
    async onSubmit() {
      let pattern = /^1[3|4|5|7|8][0-9]{9}$/;
      let sms = /^[0-9]{6}$/;
      if (pattern.test(this.mobile)) {
        if (sms.test(this.sms_code)) {
          let res = await AjaxLogin({
            mobile: this.mobile,
            sms_code: this.sms_code,
            client: this.client,
            type: this.type
          });
          if (res.code == 200) {
            sessionStorage.setItem("token", res.data.remember_token);
            this.$toast.success("登录成功");
            if (res.data.is_new == 1) {
              this.$router.push({
                path:"/SetPassword",
                query:{
                  mobile:this.mobile,
                  sms_code:this.sms_code
                }
              });
            } else if (res.data.is_new == 2) {
              this.$router.push("/mine");
            }
          }
        } else {
          this.$toast("验证码必须是6位的数字");
        }
      } else {
        this.$toast("请输入正确的手机号");
      }
    },
    // 验证码
    async sms() {
      let patterns = /^1[3|4|5|7|8][0-9]{9}$/;
      if (patterns.test(this.mobile) && this.mobile != "") {
        let res = await AjaxSmsLogin({
          mobile: this.mobile,
          sms_type: "login"
        });
        if (res.code == 200) {
          this.$toast.success("发送成功");
          const sum = 60;
          this.count = sum;
          this.flag = true;
          setInterval(() => {
            if (this.count > 0 && this.count <= sum) {
              this.count--;
            } else {
              this.flag = false;
            }
          }, 1000);
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
.smsLogin {
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
    padding: 0 0.3rem;
    box-sizing: border-box;
    background-color: #fff;
    .yan {
      position: relative;
      span {
        position: absolute;
        z-index: 999;
        top: 0.2rem;
        right: 0.2rem;
        font-size: 0.12rem;
        color: #eb6100;
      }
    }
    .van-field {
      line-height: 0.4rem;
    }
    .van-field:hover {
      border-bottom: 1px solid #eb6100;
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
}
</style>
