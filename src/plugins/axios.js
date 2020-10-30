"use strict";
import axios from "axios";
import { Toast } from 'vant'
import { Guid } from "../utils/guid";
// 初始化设备ID
let deviceid = null
// 现获取设备ID如果有使用之前的
let id = localStorage.getItem("deviceid")
if (id) {
  deviceid = id
} else {
  deviceid = Guid.NewGuid().ToString("D")
}
// 写入设备ID
localStorage.setItem("deviceid", deviceid)
let config = {
  baseURL: "http://120.53.31.103:84",
  // baseURL: "https://wap.365msmk.com"
  timeout: 60 * 1000, // Timeout
};
const _axios = axios.create(config);
// 请求拦截
_axios.interceptors.request.use(
  function (config) {
    // 开启loading
    Toast.loading({
      message: '加载中...',
    });
    // token请求头
    let token = sessionStorage.getItem("token")
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    // devicetype
    config.headers.devicetype = "H5"
    // 设备ID
    config.headers.deviceid = deviceid
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
// 响应拦截
_axios.interceptors.response.use(
  function (response) {
    // 停止loading
    Toast.clear()
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default _axios;
