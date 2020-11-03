<template>
  <div id="app">
    <router-view></router-view>

  </div>
</template>

<script>
import { me } from "./utils/meiqia";
export default {
  name: "app",
  data() {
    return {
    };
  },
  components: {},
  methods: {

  }
};
</script>

<style lang="scss">
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
</style>
