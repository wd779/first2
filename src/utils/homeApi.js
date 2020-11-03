import axios from '../plugins/axios';

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} data [请求时携带的参数]
 */
export function get(url, data) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: data
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data)
        })
    });
}

/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} data [请求时携带的参数] 
 */
export function post(url, data) {
    return new Promise((resolve, reject) => {
        axios.post(url, data)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}



export function PUT(url) {
    return new Promise((resolve, reject) => {
        axios.put(url)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}
// 获取  api 接口
export const GetHomeList = data => get('/api/app/recommend/appIndex',data) 
export const GetTeacher = data => get('/api/app/teacher/'+data) 
export const GetTeacherInfo = data => get('api/app/teacher/info/'+data) //讲师信息详情
export const postCollect = data => post('/api/app/collect',data) //收藏接口
export const postCancel = data => PUT('/api/app/collect/cancel/'+data+'+/1') //取消收藏
export const GetCollect = data => get('api/app/collect?page=1&limit=10&type=1',data) // 所有我的收藏数据
