import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', name: 'Dome', component: () => import('../views/Dome.vue'), redirect: '/home',
    children: [
      { path: 'home', name: 'Home', component: Home ,meta: { title: '首页' }},//首页
      { path: 'mine', name: 'mine', component: () => import('../views/mine.vue'), meta: { title: '我的' } }, // 我的
      { path: 'Appointment', name: 'Appointment', component: () => import('../views/Appointment.vue'), meta: { title: '课程' } }, // 课程
      { path: "practice", name: "Practice", component: () => import("../views/practice/Practice.vue"), meta: { title: '练习页面主页面' } },// 练习页面主页面-zhy
      { path: "email", name: "email", component: () => import("../views/practice/email.vue"), meta: { title: '弹出信封' } }, //弹出信封-zhy
      { path: "point", name: "point", component: () => import("../views/practice/point.vue"), meta: { title: '考点练习' } }, //考点练习-zhy
      { path: "paper_package", name: "paper_package", component: () => import("../views/practice/paper_package.vue"), meta: { title: '套卷练习' } }, //套卷练习-zhy
      { path: "exam", name: "exam", component: () => import("../views/practice/exam.vue"), meta: { title: '仿真模考' } }, // 仿真模考-zhy
      { path: "error_ques", name: "error_ques", component: () => import("../views/practice/error_ques.vue"), meta: { title: '错题练习' } },// 错题练习-zhy
      { path: "assess", name: "assess", component: () => import("../views/practice/assess.vue"), meta: { title: '测评记录' } }, // 测评记录-zhy
      { path: "ques_collect", name: "ques_collect", component: () => import("../views/practice/ques_collect.vue"), meta: { title: '习题收藏' } },// 习题收藏-zhy
      { path: "shu", name: "shu", component: () => import("../views/practice/shu.vue"), meta: { title: '学习跳转页面' } },// 学习跳转页面-zhy
      { path: "hua", name: "hua", component: () => import("../views/practice/hua.vue"), meta: { title: '化学跳转页面' } },// 化学跳转页面-zhy
      { path: "order", name: "order", component: () => import("../views/order/order.vue"), meta: { title: '约课记录主页面' } },// 约课记录主页面-zhy
    ]
  }, // 主页面
  { path: '/login', name: 'Login', component: () => import('../views/login/Login.vue'), meta: { title: '密码登录' } }, // 密码登录
  { path: '/forgetPass', name: 'ForgetPass', component: () => import('../views/login/ForgetPass.vue'), meta: { title: '密码登录' } }, // 密码登录
  { path: '/smsLogin', name: 'SmsLogin', component: () => import('../views/login/SmsLogin.vue'), meta: { title: '验证码登录' } }, // 验证码登录
  { path: '/setPassword', name: 'SetPassword', component: () => import('../views/login/SetPassword.vue'), meta: { title: '设置密码' } }, // 设置密码
  { path: '/setMessage', name: 'SetMessage', component: () => import('../views/login/SetMessage.vue'), meta: { title: '信息填写' } }, // 信息填写
  { path: '/info', name: 'Info', component: () => import('../views/my/Info.vue'), meta: { title: '个人信息' } }, // 个人信息
  { path: '/my-study', name: 'My-study', component: () => import('../views/my/My-study.vue'), meta: { title: '我的特色课 我的学习' } }, // 我的特色课 我的学习
  { path: '/my-currency', name: 'My-currency', component: () => import('../views/my/My-currency.vue'), meta: { title: '约课记录我的特色课 我的学习主页面' } }, // 我的特色课 我的学习
  { path: '/collect', name: 'Collect', component: () => import('../views/my/Collect.vue'), meta: { title: '我的收藏' } }, // 我的收藏
  { path: '/concern', name: 'Concern', component: () => import('../views/my/Concern.vue'), meta: { title: '我的关注 关注的老师' } }, // 我的关注 关注的老师
  { path: '/coupon', name: 'Coupon', component: () => import('../views/my/Coupon.vue'), meta: { title: '优惠券' } }, // 优惠券-hrj-zhy
  { path: '/card', name: 'Card', component: () => import('../views/my/Card.vue'), meta: { title: '学习卡' } }, // 学习卡-hrj-zhy
  { path: '/vip', name: 'Vip', component: () => import('../views/my/Vip.vue'), meta: { title: '会员' } }, // 会员-hrj-zhy
  { path: '/message', name: 'Message', component: () => import('../views/my/Message.vue'), meta: { title: '我的消息' } }, // 我的消息-hrj-zhy
  { path: '/feedback', name: 'Feedback', component: () => import('../views/my/Feedback.vue'), meta: { title: '意见反馈' } }, // 意见反馈-hrj-zhy
  { path: '/options', name: 'Options', component: () => import('../views/my/Options.vue'), meta: { title: '设置' } }, // 设置-hrj-zhy
  { path: '/setPass', name: 'setPass', component: () => import('../views/my/setPass.vue'), meta: { title: '设置密码页面' } }, // 设置密码页面-zhy
  { path: '/personOne', name: 'personOne', component: () => import('../views/my/personOne.vue'), meta: { title: '客服留言' } }, // 客服留言-zhy
  { path: '/study', name: 'study', component: () => import('../views/Home/Study.vue'), meta: { title: '学习日历' } },// 学习日历
  { path: '/fudao', name: 'fudao', component: () => import('../views/Home/FuDao.vue'), meta: { title: '一对一辅导页面' } },// 一对一辅导页面,
  { path: '/yuyue', name: 'yuyue', component: () => import('../views/Home/YuYue.vue'), meta: { title: '预约课程' } },// 预约课程页面-zhy,
  { path: '/Details', name: 'Details', component: () => import('../views/Appointment/Details.vue'), meta: { title: '详情' } },// 详情,
  { path: '/Teacher_Details', name: 'Teacher_Details', component: () => import('../views/Home/Teacher_Details.vue'),meta: { title: '讲师详情' }},// 讲师详情,
]
const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})
export default router
