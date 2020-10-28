import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', name: 'Dome', component: () => import('../views/Dome.vue'),redirect: '/home',  
    children: [
      { path: 'home', name: 'Home', component: Home },//首页
      { path: 'mine', name: 'mine', component: () => import('../views/mine.vue') }, // 我的
      { path: 'Appointment', name: 'Appointment', component: () => import('../views/Appointment.vue') }, // 课程
      { path: "practice", name: "Practice", component: () => import("../views/practice/Practice.vue"), },//   练习页面
      { path: "point", name: "point", component: () => import("../views/practice/point.vue") }, //考点练习
      { path: "paper_package", name: "paper_package", component: () => import("../views/practice/paper_package.vue") }, //套卷联系
      { path: "exam", name: "exam", component: () => import("../views/practice/exam.vue") },  // 仿真模考
      { path: "error_ques", name: "error_ques", component: () => import("../views/practice/error_ques.vue") },// 错题练习
      { path: "assess", name: "assess", component: () => import("../views/practice/assess.vue") }, // 测评记录
      { path: "ques_collect", name: "ques_collect", component: () => import("../views/practice/ques_collect.vue") },// 习题收藏
      {path: '/fudao', name: 'fudao', component: () => import('../views/Home/FuDao.vue')},// 一对一辅导页面,
      {path: '/study', name: 'study', component: () => import('../views/Home/Study.vue')},// 学习日历
    ]
  }, // 主页面
  { path: '/login', name: 'Login', component: () => import('../views/login/Login.vue') }, // 密码登录
  { path: '/forgetPass', name: 'ForgetPass', component: () => import('../views/login/ForgetPass.vue') }, // 修改密码
  { path: '/smsLogin', name: 'SmsLogin', component: () => import('../views/login/SmsLogin.vue') }, // 验证码登录






]
const router = new VueRouter({
  routes
})

export default router
