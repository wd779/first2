<template>
  <div class="forgetPass">
    <!-- 找回密码页面 -->
    <!-- 头部 -->
    <div class="header">
      <van-icon name="arrow-left" @click="$router.go(-1)" />
      <p>找回密码</p>
      <p></p>
    </div>
    <!-- 找回密码 -->
    <div class="van-form">
      <div class="yan">
        <van-field v-model="mobile" name="用户名" label placeholder="请输入手机号" />
        <span v-show="!flag" @click="editPass">获取验证码</span>
        <span v-show="flag" style="color:#ccc;">获取验证码({{count}})</span>
      </div>
      <van-field v-model="sms_code" name="验证码" label placeholder="请输入验证码" />
      <van-field v-model="password" name="密码" label placeholder="请输入密码" />
      <div style="margin: 0.3rem;">
        <van-button round block type="warning" native-type="submit" @click="onSubmit">确定</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { AjaxPass, AjaxSmsLogin } from "@/utils/myApi";
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
      sms_code: "",
      password: "",
      mobile: "",
      sms_type: "getPassword",
      count: "",
      flag: false
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    async onSubmit(values) {
      let pattern = /^1[3|4|5|7|8][0-9]{9}$/;
      let pass = /^[0-9]{6,12}$/;
      let sms = /^[0-9]{6}$/;
      if (pattern.test(this.mobile)) {
        if (sms.test(this.sms_code)) {
          if (pass.test(this.password)) {
            let res = await AjaxPass({
              mobile: this.mobile,
              password: this.password,
              sms_code: this.sms_code,
              type: this.type
            });
            // 修改密码
            console.log("submit", values);
            console.log(res);
            if (res.code == 200) {
              this.$toast.success("修改成功");
              this.$router.push("/login");
            }
          } else {
            this.$toast("密码必须是6-12位的数字");
          }
        } else {
          this.$toast("验证码必须是6位的数字");
        }
      } else {
        this.$toast("请输入正确的手机号");
      }
    },
    // 验证码
    async editPass() {
      let patterns = /^1[3|4|5|7|8][0-9]{9}$/;
      if (patterns.test(this.mobile)) {
        let res = await AjaxSmsLogin({
          mobile: this.mobile,
          sms_type: this.sms_type
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
        console.log(res);
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
    .yan {
      position: relative;
      span {
        position: absolute;
        z-index: 999;
        top: 0.1rem;
        right: 0.2rem;
        font-size: 0.12rem;
        color: #eb6100;
      }
    }
    .van-field {
      line-height: 0.4rem;
    }
  }
}
</style>
