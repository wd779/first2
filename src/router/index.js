import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', name: 'Dome', component: () => import('../views/Dome.vue'), redirect: '/home',
    children: [
      { path: 'home', name: 'Home', component: Home },//首页
      { path: 'mine', name: 'mine', component: () => import('../views/mine.vue'),mate:{title:'我的'} }, // 我的
      { path: 'Appointment', name: 'Appointment', component: () => import('../views/Appointment.vue') ,mate:{title:'课程'}}, // 课程
      { path: "practice", name: "Practice", component: () => import("../views/practice/Practice.vue"), mate:{title:'练习页面主页面'}},// 练习页面主页面-zhy
      { path: "email", name: "email", component: () => import("../views/practice/email.vue"), mate:{title:'弹出信封'}}, //弹出信封-zhy
      { path: "point", name: "point", component: () => import("../views/practice/point.vue"), mate:{title:'考点练习'} }, //考点练习-zhy
      { path: "paper_package", name: "paper_package", component: () => import("../views/practice/paper_package.vue"), mate:{title:'套卷练习'} }, //套卷练习-zhy
      { path: "exam", name: "exam", component: () => import("../views/practice/exam.vue"), mate:{title:'仿真模考'} }, // 仿真模考-zhy
      { path: "error_ques", name: "error_ques", component: () => import("../views/practice/error_ques.vue") , mate:{title:'错题练习'}},// 错题练习-zhy
      { path: "assess", name: "assess", component: () => import("../views/practice/assess.vue"), mate:{title:'测评记录'} }, // 测评记录-zhy
      { path: "ques_collect", name: "ques_collect", component: () => import("../views/practice/ques_collect.vue"), mate:{title:'习题收藏'} },// 习题收藏-zhy
      { path: "shu", name: "shu", component: () => import("../views/practice/shu.vue") , mate:{title:'学习跳转页面'}},// 学习跳转页面-zhy
      { path: "hua", name: "hua", component: () => import("../views/practice/hua.vue") , mate:{title:'化学跳转页面'}},// 化学跳转页面-zhy
      { path: "order", name: "order", component: () => import("../views/order/order.vue") , mate:{title:'约课记录主页面'}},// 约课记录主页面-zhy
    ]
  }, // 主页面
  { path: '/login', name: 'Login', component: () => import('../views/login/Login.vue'), mate:{title:'密码登录'} }, // 密码登录
  { path: '/forgetPass', name: 'ForgetPass', component: () => import('../views/login/ForgetPass.vue'), mate:{title:'密码登录'} }, // 密码登录
  { path: '/smsLogin', name: 'SmsLogin', component: () => import('../views/login/SmsLogin.vue') , mate:{title:'验证码登录'}}, // 验证码登录
  { path: '/info', name: 'Info', component: () => import('../views/my/Info.vue') , mate:{title:'个人信息'}}, // 个人信息
  { path: '/my-study', name: 'My-study', component: () => import('../views/my/My-study.vue') , mate:{title:'我的特色课 我的学习'}}, // 我的特色课 我的学习
  { path: '/my-currency', name: 'My-currency', component: () => import('../views/my/My-currency.vue') , mate:{title:'约课记录我的特色课 我的学习主页面'}}, // 我的特色课 我的学习
  { path: '/collect', name: 'Collect', component: () => import('../views/my/Collect.vue') , mate:{title:'我的收藏'}}, // 我的收藏
  { path: '/concern', name: 'Concern', component: () => import('../views/my/Concern.vue'), mate:{title:'我的关注 关注的老师'} }, // 我的关注 关注的老师
  { path: '/coupon', name: 'Coupon', component: () => import('../views/my/Coupon.vue') , mate:{title:'优惠券'}}, // 优惠券-hrj-zhy
  { path: '/card', name: 'Card', component: () => import('../views/my/Card.vue'), mate:{title:'学习卡'} }, // 学习卡-hrj-zhy
  { path: '/vip', name: 'Vip', component: () => import('../views/my/Vip.vue') , mate:{title:'会员'}}, // 会员-hrj-zhy
  { path: '/message', name: 'Message', component: () => import('../views/my/Message.vue'), mate:{title:'我的消息'} }, // 我的消息-hrj-zhy
  { path: '/feedback', name: 'Feedback', component: () => import('../views/my/Feedback.vue') , mate:{title:'意见反馈'}}, // 意见反馈-hrj-zhy
  { path: '/options', name: 'Options', component: () => import('../views/my/Options.vue'), mate:{title:'设置'} }, // 设置-hrj-zhy
  { path: '/setPass', name: 'setPass', component: () => import('../views/my/setPass.vue'), mate:{title:'设置密码页面'} }, // 设置密码页面-zhy
  { path: '/personOne', name: 'personOne', component: () => import('../views/my/personOne.vue') , mate:{title:'客服留言'}}, // 客服留言-zhy
  { path: '/study', name: 'study', component: () => import('../views/Home/Study.vue') , mate:{title:'学习日历'}},// 学习日历
  { path: '/fudao', name: 'fudao', component: () => import('../views/Home/FuDao.vue'), mate:{title:'一对一辅导页面'} },// 一对一辅导页面,
  { path: '/Details', name: 'Details', component: () => import('../views/Appointment/Details.vue') , mate:{title:'详情'}},// 详情,

]
const router = new VueRouter({
  routes
})

export default router
