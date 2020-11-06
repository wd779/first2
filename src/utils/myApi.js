import axios from "../plugins/axios";

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} data [请求时携带的参数]
 */
export function get(url, data) {
    return new Promise((resolve, reject) => {
        axios.get(url, { params: data }).then(res => {
            resolve(res.data);
        })
            .catch(err => {
                reject(err.data);
            });
    });
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} data [请求时携带的参数]
 */
export function post(url, data) {
    return new Promise((resolve, reject) => {
        axios.post(url, data).then(res => {
            resolve(res.data);
        })
            .catch(err => {
                reject(err.data);
            });
    });
}
/**
 * put方法，对应put请求
 * @param {String} url [请求的url地址]
 * @param {Object} data [请求时携带的参数]
 */
export function put(url, data) {
    return new Promise((resolve, reject) => {
        axios.put(url, data).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data);
        });
    });
}
// 登录
export const AjaxLogin = data => post("/api/app/login", data); // 密码登录
export const AjaxSmsLogin = data => post("/api/app/smsCode", data); // 验证码登录 验证码
export const AjaxPass = data => post("/api/app/password", data); // 修改密码
// // 我的页面
export const getUCenterInfoAjax = data => get("/api/app/getUCenterInfo?", data); // 渲染
// 个人信息
export const AjaxInfo = data => get("/api/app/userInfo", data); // 个人信息
export const AjaxEditUser = data => put("/api/app/user", data); // 修改个人信息

export const AjaxEditAttribute = data => get("/api/app/module/attribute/1?", data); // 选择年纪和学科得数据
export const AjaxEditImg = data => post("/api/app/public/img", data); // 修改头像
// // 关注
export const guanzhu = data => get("/api/app/collect", data); // 关注列表
export const qxguanzhu = collect_id => put(`api/app/collect/cancel/${collect_id}/2`); // 取消关注
// 收藏
export const shoucang = data => get(`/api/app/collect`,data); // 收藏列表
export const qxshoucang = collect_id => put(`/api/app/collect/cancel/${collect_id}/1`); // 收藏列表
// 消息
export const messageAjax = data => post(`/api/app/message/classifyMessage`,data); // 消息
export const msgDetailAjax = data => post(`/api/app/message/getMessage`,data); // 消息
// 意见反馈
export const feedbackAjax = data => post(`/api/app/feedback`,data); // 消息
// 会员
export const vipAjax = data => get(`/api/app/vip/grade`,data); // 会员
export const downOrderAjax = data => post(`/api/app/order/downOrder`,data); // 充值
// 学习币
export const coinRankAjax = data => get(`/api/app/coin/coinRank`,data); // 渲染数据
export const payAjax = data => post(`/api/app/pay`,data); // 充值
export const itemAjax = data => get(`/api/app/coin/item`,data); // 获取余额
// 我的学习
export const myStudyAjax = type => get(`/api/app/myStudy/${type}?`); // 我的特色课
export const courseAjax = course_id => get(`/api/app/myStudy/course/${course_id}?`); // 我的特色课
// 我的订单
export const myOrderAjax = data => post(`/api/app/myOrder`,data); // 订单
export const detailAjax = data => post(`/api/app/myOrder/detail`,data); // 订单详情
//修改 地址
export const AjaxEditSonArea = data => get("/api/app/sonArea/"+data); // 获取城市列表数据



