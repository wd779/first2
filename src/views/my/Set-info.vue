<template>
  <div>
    <!-- 头部组件 -->
    <app-header>
      <template>
        <div slot="title">修改个人信息</div>
        <div slot="right" @click="userEdit" v-if="tag=='nickname'">保存姓名</div>
        <div slot="right" @click="sexEdit" v-if="tag=='sex'">保存性别</div>
        <div slot="right" @click="subjectsEdit" v-if="tag=='subjects'">保存学科</div>
      </template>
    </app-header>
    <!-- 用户名修改 -->
    <van-cell-group v-if="tag=='nickname'" style="margin-top:0.1rem">
      <van-field v-model="nickname" placeholder="请输入用户名" />
    </van-cell-group>
    <!-- 性别修改 -->
    <ul class="content" v-if="tag=='sex'">
      <li :class="active==0?'active':''" @click="active=0">男</li>
      <li :class="active==1?'active':''" @click="active=1">女</li>
    </ul>
    <!-- 学科修改 -->
    <div v-if="tag=='subjects'">
      <p class="p-box" v-for="item in subjects" :key="item.id">
        <input
          type="checkbox"
          :checked="str.includes(item.id)"
          @click="changeUpdate(item.id,$event)"
        />
        <span>{{ item.name}}</span>
      </p>
    </div>
  </div>
</template>

<script>
import { AjaxEditUser, AjaxEditAttribute } from "../../utils/myApi";
import appHeader from "../../components/AppHeader.vue";
export default {
  // 组件名称
  name: "",
  // 组件参数 接收来自父组件的数据
  props: [],
  // 局部注册的组件
  components: { appHeader },
  // 组件状态值
  data() {
    return {
      active: this.$route.query.value,
      nickname: this.$route.query.value,
      attr: this.$route.query.value,
      tag: this.$route.query.tag,
      subjects: [],
      id: [],
      user_attr: [],
      str: ""
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    // 用户名修改
    async userEdit() {
      await AjaxEditUser({ nickname: this.nickname });
      this.$router.push("/info");
      this.$toast.success("修改成功");
    },
    // 性别修改
    async sexEdit() {
      await AjaxEditUser({ sex: this.active });
      this.$router.push("/info");
      this.$toast.success("修改成功");
    },
    // 学科修改
    async subjectsEdit() {
      await AjaxEditUser({ user_attr: JSON.stringify(this.user_attr) });
      this.$router.push("/info");
      this.$toast.success("修改成功");
    },
    // 学科选中状态
    changeUpdate(id, e) {
      if (e.target.checked) {
        let obj = { attr_id: 2, attr_val_id: id };
        let index = this.user_attr.findIndex(item => {
          return item == obj;
        });
        if (index == -1) {
          this.user_attr.push(obj);
        }
      } else {
        let index = this.user_attr.findIndex(item => {
          return item.attr_val_id == id;
        });
        this.user_attr.splice(index, 1);
      }
    },
    // 学科默认渲染
    async subjectsA() {
      let { data } = await AjaxEditAttribute();
      this.subjects = data[1].value;
    }
  },
  /**
   * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
   */
  created() {},
  mounted() {
    // 学科默认渲染调用
    this.subjectsA();
    this.attr.map(item => {
      // 学科默认
      this.user_attr.push({ attr_id: 2, attr_val_id: item.attr_val_id });
      this.str += item.attr_val_id;
    });
  }
};
</script> 

<style scoped lang="scss">
.content {
  background: #fff;
  margin: 2.66667vw 0;
  padding: 1.33333vw 4vw;
  background-size: 0.4rem 0.4rem;
  li {
    height: 14.66667vw;
    line-height: 14.66667vw;
    font-size: 3.73333vw;
    color: #595959;
    position: relative;
  }
  .active {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAcCAYAAAAAwr0iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzlBMTk5NkVCNzRDMTFFOTlEMzU4OTdFRjlDNjMxNjEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzlBMTk5NkZCNzRDMTFFOTlEMzU4OTdFRjlDNjMxNjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDOUExOTk2Q0I3NEMxMUU5OUQzNTg5N0VGOUM2MzE2MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDOUExOTk2REI3NEMxMUU5OUQzNTg5N0VGOUM2MzE2MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvL8dXQAAAHGSURBVHjaYvz//z/DQALGP6F0t1MRiIOB+BEQr2ahs+UaQHwMiAWhfF0mOlrOA8RrkSwHAXt6OmAOEGuhic2ilwMKgDgcTWwuEC+hRyK0AeL9QIyc3s4BsTUQ/6C1AySglkkiib0DYmMgfgDi0DIKQD5eiWY5qNCJgVlOawd0ALEdmlgTEG+nR0EUAipk0MR2ALE3EP+jtQPUgfg0EPMiiT2Axvs7dMVMNChs1qFZ/hMaIu+waWCiQ2GTA8RncWkAOcAAiK8C8VcgngzEbFQsbOZBHYW3NtwJpN2QxECFRhAQf6BWYYNPIygEnqOJOQLxESCWI6GwWYVm+XtolfuDkGaQA4qA+DiauDYQnwBiPTILm2jkwoaQA0Cp0wmaepEByNBDWAoTkgsbYltEIMf0QhMTMgAFYyQQbyC3sCG1SVYCxF0gOSSxv0CcCcSz8RQ2D4HYCFd+J7VNGAetr9GbbLVAPAGIT6Ll95/QFH+Wmo1SL2gQc6GJgxKXAppYKqH8Tm6r2BKItwCxEB41oMImmZbNck0gBhVWsljkiCpsCGVDQuA6jvi9BMT+lFhOanXMDMQ+0EIKVHfsAuLvFPeMBrprBhBgADxzbshcfaUMAAAAAElFTkSuQmCC)
      no-repeat 100%;
    background-size: 4vw 4vw;
  }
}
.p-box {
  width: 100%;
  background-color: #fff;
  height: 0.55rem;
  padding: 0 0.15rem;
  box-sizing: border-box;
  display: flex;
  input {
    margin: 0.15rem 0.1rem 0.03rem 0.04rem;
    width: 0.25rem;
    height: 0.25rem;
  }
  span {
    height: 0.55rem;
    display: inline-block;
    line-height: 0.55rem;
    font-size: 0.16rem;
  }
}
</style>
