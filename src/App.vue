<template>
  <div id="app">
    <router-view></router-view>
    <div class="box1" @click="$router.push('/email')">
      <div class="lo">
        <label for class="icon">
          <span type="call-button-1" width="32px" height="32px" class="base-icon"></span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
  list-style: none;
  font-size: 0.16rem;
  background-color: #f0f2f5;
}
* {
  margin: 0;
  padding: 0;
}

.box1 {
  height: 0.5rem;
  width: 0.5rem;
  background-color: rgb(0, 122, 255);
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 5px 14px;
  text-align: center;
  cursor: pointer;
  position: fixed;
  z-index: 999;
  top:0.5rem;

}
.lo {
  padding-top: 0.14rem;
}
.icon {
  display: inline-block;
  vertical-align: middle;
}
.base-icon {
  vertical-align: middle;
  padding-right: 0.32rem;
  height: 0.3rem;
  display: inline-block;
  background: url(https://static.meiqia.com/widget/static/icon-mq-round@2x.png) -0.32rem -0.03rem /
    0.64rem no-repeat;
}
</style>
