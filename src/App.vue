<template>
  <div id="app">
    <router-view></router-view>
    <!-- 小球 -->
    <div id="default_drag_comp" @touchstart="down" @touchmove="move" @touchend="end">
      <div class="lo">
        <label for class="icon">
          <span type="call-button-1" width="32px" height="32px" class="base-icon"></span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
// 鼠标位置和div的左上角位置 差值
var dx, dy;
var screenWidth = window.screen.width;
var screenHeight = window.screen.height;
export default {
  name: "app",
  data() {
    return {
      flags: false,
      position: { x: 0, y: 0 },
      nx: "",
      ny: "",
      dx: "",
      dy: "",
      xPum: "",
      yPum: ""
    };
  },
  components: {},
  methods: {
    down() {
      let default_drag_comp = document.querySelector("#default_drag_comp");
      this.flags = true;
      var touch;
      if (event.touches) {
        touch = event.touches[0];
      } else {
        touch = event;
      }
      this.maxW = document.body.clientWidth - default_drag_comp.offsetWidth;
      this.maxH = document.body.clientHeight - default_drag_comp.offsetHeight;

      this.position.x = touch.clientX - default_drag_comp.offsetLeft;
      this.position.y = touch.clientY - default_drag_comp.offsetTop;
      this.dx = touch.clientX;
      this.dy = touch.clientY;
    },
    move(event) {
      event.preventDefault();
      let default_drag_comp = document.querySelector("#default_drag_comp");
      if (this.flags) {
        var touch;
        if (event.touches) {
          touch = event.touches[0];
        } else {
          touch = event;
        }
        this.nx = touch.clientX - this.position.x;
        this.ny = touch.clientY - this.position.y;

        if (this.nx < 0) {
          this.nx = 0;
        } else if (this.nx > this.maxW) {
          this.nx = this.maxW;
        }

        if (this.ny < 0) {
          this.ny = 0;
        } else if (this.ny >= this.maxH) {
          this.ny = this.maxH;
        }

        default_drag_comp.style.left = this.nx + "px";
        default_drag_comp.style.top = this.ny + "px";
        //阻止页面的滑动默认事件；如果碰到滑动问题，1.2 请注意是否获取到 touchmove
        document.addEventListener(
          "touchmove",
          function() {
            // event.preventDefault();
          },
          false
        );
      }
    },
    //鼠标释放时候的函数
    end() {
      this.flags = false;
    }
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

#default_drag_comp {
  height: 0.5rem;
  width: 0.5rem;
  background-color: rgb(0, 122, 255);
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 5px 14px;
  text-align: center;
  cursor: pointer;
  z-index: 999;
  position: fixed;
  right: 20px;
  bottom: 70px;
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
