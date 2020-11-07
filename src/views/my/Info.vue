<template>
  <div class="info">
    <div class="header">
      <van-icon name="arrow-left" @click="$router.push('/mine')" />
      <p>个人信息</p>
      <p></p>
    </div>
    <ul class="ul-box">
      <li @click="toggle('img')">
        <span>头像</span>
        <span>
          <img :src="userinfo.avatar" alt />
        </span>
      </li>
      <li @click="toggle('nickname')">
        <span>昵称</span>
        <span>{{ userinfo.nickname }}</span>
      </li>
      <li>
        <span>手机号</span>
        <span>{{ userinfo.mobile }}</span>
      </li>
      <li @click="toggle('sex')">
        <span>性别</span>
        <span>{{ userinfo.sex==0?'男':'女' }}</span>
      </li>
      <li @click="toggle('birthday')">
        <span>出生日期</span>
        <span>{{ userinfo.birthday }}</span>
      </li>
      <li @click="toggle('city')">
        <span>所在城市</span>
        <span>{{userinfo.province_name}}-{{userinfo.city_name}}-{{userinfo.district_name}}</span>
      </li>
      <li @click="toggle('subjects')" id="attr">
        <span>学科</span>
        <p>
          <template v-if="userinfo.attr[0].attr_id==2">
          <span
            style="margin:0;"
            v-for="item in userinfo.attr"
            :key="item.attr_id"
          >{{item.attr_value }}</span>
          </template>
        </p>
      </li>
      <li @click="toggle('grade')">
        <span>年级</span>
        <span>{{ t }}</span>
      </li>
    </ul>

    <!-- 弹框 -->
    <van-popup position="bottom" v-model="show">
      <!-- 头像 -->
      <ul class="photo" v-if="tag == 'img'">
        <li>
          拍照
          <input type="file" accept="image/*" capture="camera" id="takePhoto" @change="takePhoto" />
        </li>
        <li>
          从手机相册中选择
          <input type="file" accept="image/*" id="takePhoto" @change="takePhoto" />
        </li>

        <li @click="show=false">取消</li>
      </ul>
      <!-- 城市信息 -->
      <van-area
        v-if="tag == 'city'"
        :area-list="areaList"
        :value="userinfo.district_id+''"
        @change="onChange"
        @confirm="queding"
      />
      <!-- 年级 -->
      <van-area :area-list="arrealist" columns-num="1" @confirm="onConfirm" v-if="tag == 'grade'" />
      <!-- 出生日期 -->
      <van-datetime-picker
        v-if="tag == 'birthday'"
        v-model="currentDate"
        type="date"
        :min-date="minDate"
        :max-date="maxDate"
        @confirm="onConfirm"
        @cancel="cancel"
      />
    </van-popup>
  </div>
</template>

<script>
import {
  AjaxInfo,
  AjaxEditUser,
  AjaxEditSonArea,
  AjaxEditImg,
  AjaxEditAttribute
} from "../../utils/myApi";
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
      id: "",
      cityShow: false,
      show: false,
      nickname: "",
      userinfo: [],
      cityEdit: [],
      path: "",
      nianji: [],
      tag: "",
      arrealist: {
        province_list: {}
      },
      arr: [],
      t: "",
      currentDate: new Date(),
      minDate: new Date(1890, 0, 1),
      maxDate: new Date(),
      user: [],
      areaList: {
        city_list: {},
        province_list: {},
        county_list: {}
      }, //城市列表
      cityEdit: [], //保存data
      attr:""
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    showPopup() {
      this.show = true;
    },
    // 个人信息获取
    async info() {
      let res = await AjaxInfo();
      this.userinfo = res.data;
      console.log(this.userinfo);
      this.t = res.data.attr[0].attr_value;
    },
    // 头像
    async takePhoto(e) {
      let formData = new FormData();
      formData.append("file", e.target.files[0]);
      let data = await AjaxEditImg(formData);
      console.log(data);
      if (data.code == 200) {
        this.path = data.data.path;
        await AjaxEditUser({ avatar: this.path });
        this.info();
        this.show = false;
      } else {
        this.$toast(data.msg);
        this.show = false;
      }
    },
    toggle(tag) {
      this.tag = tag;
      // 头像
      if (tag == "img") {
        this.show = true;
      }
      // 用户名
      else if (tag == "nickname") {
        this.$router.push({
          path: "/set-info",
          query: { tag: "nickname", value: this.userinfo.nickname }
        });
      }
      // 性别
      else if (tag == "sex") {
        this.$router.push({
          path: "/set-info",
          query: { tag: "sex", value: this.userinfo.sex }
        });
      }
      // 生日
      else if (tag == "birthday") {
        this.show = true;
      }
      // 城市
      else if (tag == "city") {
        this.show = true;
        this.city();
      }
      // 学科
      else if (tag == "subjects") {
        this.$router.push({
          path: "/set-info",
          query: { tag: "subjects", value: this.userinfo.attr }
        });
      }
      // 年级
      else if (tag == "grade") {
        this.show = true;
      }
    },
    // 城市信息
    async city() {
      //省
      let { data: sheng } = await AjaxEditSonArea();
      this.cityShow = true;
      // this.cityEdit = data;
      // console.log(data);
      console.log(sheng);
      this.areaList.province_list = this.zhuanghuan(sheng);

      //市
      let { data: shi } = await AjaxEditSonArea(
        this.userinfo.province_id ? this.userinfo.province_id : data[0].id
      );
      console.log(shi);
      // this.$set(this.areaList,"city_list",this.zhuanghuan(shi))
      this.areaList.city_list = this.zhuanghuan(shi);
      console.log(this.areaList.city_list);
      // 区
      let { data: qu } = await AjaxEditSonArea(
        this.userinfo.city_id ? this.userinfo.city_id : shi[0].id
      );
      this.areaList.county_list = this.zhuanghuan(qu);
      // console.log(qu);
    },

    async onChange(str, data, index) {
      console.log(data);
      console.log(index);

      switch (index) {
        case 0:
          let { data: shi } = await AjaxEditSonArea(data[index].code);
          // this.$set(this.areaList,"city_list",this.zhuanghuan(shi))
          this.areaList.city_list = this.zhuanghuan(shi);

          let { data: qu } = await AjaxEditSonArea(shi[0].id);
          this.areaList.county_list = this.zhuanghuan(qu);
          // console.log(this.areaList);
          break;

        case 1:
          let { data: shiqu } = await AjaxEditSonArea(data[1].code);
          this.areaList.county_list = this.zhuanghuan(shiqu);
          break;
      }
    },
    // 年级
    async attribute() {
      let { data } = await AjaxEditAttribute();
      // console.log(data);
      this.nianji = data[0].value;
      data[0].value.map(item => {
        this.$set(this.arrealist.province_list, item.id, item.name);
      });
    },
    // 点击完成触发的函数
    async onConfirm(val) {
      if (this.tag == "grade") {
        this.arr = [];
        val.map(item => {
          this.arr.push({ attr_id: 1, attr_val_id: item.code });
        });
        let { data: res } = AjaxEditUser({
          user_attr: JSON.stringify(this.arr)
        });
        this.info();
        this.show = false;
      } else if (this.tag == "birthday") {
        // 时间
        console.log(val);
        if (val.toLocaleDateString() == this.nowdate) {
          this.$toast("出生日期最少是当前日期的前一天");
        } else {
          this.birthdate = val
            .toLocaleDateString()
            .split("/")
            .join("-");
          let { data } = await AjaxEditUser({ birthday: this.birthdate });
          this.show = false;
          this.info();
        }
      }
    },
    // 时间取消
    cancel() {
      this.show = false;
    },
    // 转换函数
    zhuanghuan(arr) {
      let obj = {};
      for (let i = 0; i < arr.length; i++) {
        obj[arr[i].id] = arr[i].area_name;
      }
      // console.log(obj);
      return obj;
    },

    async queding(arr) {
      let obj = {
        city_id: arr[1].code,
        district_id: arr[2].code,
        province_id: arr[0].code
      };

      let res = await AjaxEditUser(obj);
      if (res.code == 200) {
        this.show = false;
        this.info();
      }
      console.log(res);
    }
  },
  /**
   * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
   */
  created() {},
  mounted() {
    
    this.info();
    this.attribute();
  }
};
</script> 

<style scoped lang="scss">
.info {
  width: 100%;
  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 0.1rem;
    box-sizing: border-box;
    height: 0.45rem;
    align-items: center;
    font-size: 0.18rem;
    background-color: #fff;
  }
  .ul-box {
    background: #fff;
    margin: 2.66667vw 0;
    padding: 1.33333vw 4vw;
    li:before {
      content: "";
      display: block;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
      width: 2.66667vw;
      height: 2.66667vw;
      border-top: 1px solid #b7b7b7;
      border-right: 1px solid #b7b7b7;
    }
    li:after {
      content: "";
      display: block;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      height: 1px;
      background-color: #f5f5f5;
    }
    li:last-child::after {
      display: none;
    }
    li:nth-child(3)::before {
      display: none;
    }
    li {
      height: 14.66667vw;
      line-height: 14.66667vw;
      display: flex;
      justify-content: space-between;
      position: relative;
      span:first-child {
        font-size: 3.73333vw;
        color: #595959;
      }
      img {
        width: 9.86667vw;
        height: 9.86667vw;
        border-radius: 50%;
        vertical-align: middle;
      }
      span:nth-child(2) {
        color: #8c8c8c;
        font-size: 3.73333vw;
        margin-right: 6.66667vw;
      }
    }
    #attr {
      p {
        display: flex;
        width: 100%;
        width: 2rem;
        justify-content: space-between;
        margin-right: 6.66667vw;
        span {
          color: #8c8c8c;
          font-size: 3.73333vw;
        }
      }
    }
  }
  .photo {
    width: 100%;
    height: 1.5rem;
    background: #fff;
    li {
      position: relative;
      width: 100%;
      display: block;
      text-align: center;
      line-height: 0.5rem;
      color: #030303;
      font-weight: 300;
      input {
        position: absolute;
        opacity: 0;
        left: 0;
        top: 0;
      }
    }
  }
}
</style>
