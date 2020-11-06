import axios from '../plugins/axios';

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} data [请求时携带的参数]
 */
export function get(url, data) {
    // console.log(data);
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
// limit=10&page=1&course_type=0&keywords='+data
export const GetData = data => get('api/app/courseClassify',data) // 课程信息
export const GetDataList = data => get('api/app/courseBasis',data) // 课程列表
export const GetCurriculum = data => get('api/app/courseInfo/basis_id='+data) // 课程单页数据
export const Search = data => get('api/app/courseBasis',data) // 搜索课程
export const GetTeacherInfo = data => get('/api/app/teacher/'+data) //获取教师数据
export const GetTeacherDetailed = data => get('/api/app/teacher/info/'+data) //获取教师详情数据
export const collectTeacher = data => get('api/app/teacher/collect/'+data) //关注教师
export const cancelCollectTeacher = collect_id => get(`api/app/teacher/collect/${collect_id}`); // 取消关注
export const collectTeacherList = data => get("/api/app/collect", data); // 关注列表
export const cancelCollect = collect_id => put(`api/app/collect/cancel/${collect_id}/2`); // 取消关注
export const SignUp = data => post(`api/app/order/downOrder`,data); // 报名课程
export const GetComment = data => post(`api/app/courseComment`,data); // 获取该课程的评论
export const GetOutline = data => post(`api/app/courseChapter`,data); // 获取老师的课程列表
export const GetCourses = data => get(`api/app/myStudy/course/${data}`); // 获取视频列表
export const QuertIsSee = (data,data1) => get(`api/app/getPcRoomCode/course_id=${data}/chapter_id=${data1}`); // 查询是否可观看
export const Re = data => get(`api/app/myStudy/course/${data}`); // 
export const Publish = data => post(`api/app/myStudy/comment`,data); // 发布评论
// 


