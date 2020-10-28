<template>
  <div>
    <div class="teacher_con">
      <div class="teacher_warpper">

        <div class="teacher_content">
          <div class="teacher_content_warpper">
            <!-- 左侧图片盒子 -->
            <div class="teacher_content_left">
              <van-image
                round
                width="10rem"
                height="10rem"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
                style="width: 40px; height: 40px"
              />
            </div>
            <!-- 描述盒子 -->
            <div class="teacher_content_right">
              <div class="right_title">杨德胜</div>

              <div class="right_msg">
                杨老师,特级教师,多次被中国数学会评为...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.teacher_con {
  width: 100%;
}
.teacher_warpper {
  width: 100%;
  /* height: 3.5rem; */
  /* border: 1px solid #000; */
}

.teacher_content {
  width: 100%;
  height: 0.8rem;
}
.teacher_content_warpper {
  width: 95%;
  height: 0.8rem;
  background-color: #fff;
  margin: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.right_msg {
  color: #b7b7b7;
}
.right_title {
  color: #595959;
}
</style>