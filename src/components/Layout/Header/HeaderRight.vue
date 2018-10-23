<template>
  <section class="headerRight">
    <div class="headerRight-left tb-center">
      <div class="file">
        <span class="tips">6</span>
      </div>
      <div class="message">
        <span class="tips">2</span>
      </div>
    </div>
    <div class="headerRight-right tb-center">
      <div class="headerRight-right-wrap tb-center">
        <img :src="require('@/assets/admin_icon.png')">
        <span>欢迎您，张爱华</span>
        <i class="iconfont">&#xe600;</i>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
.headerRight {
  width: 100%;
  height: 50px;
  line-height: 50px;
  color: #fff;
  font-size: 12px;
  box-sizing: border-box;
  position: relative;
}
.headerRight-left {
  width: 66px;
  left: 0px;
}

.headerRight-left > .file {
  float: left;
  width: 18px;
  height: 18px;
  background: url("../../../assets/nav-file.png") center center;
  background-repeat: no-repeat;
  background-size: 100% auto;
  position: relative;
}

.headerRight-left .tips {
  position: absolute;
  top: -10px;
  right: -9px;
  width: 16px;
  height: 16px;
  border-radius: 100%;
  background-color: red;
  color: #fff;
  text-align: center;
  line-height: 16px;
}

.headerRight-left > .message {
  float: right;
  width: 18px;
  height: 18px;
  background: url("../../../assets/nav-msg.png") center center;
  background-repeat: no-repeat;
  background-size: 100% auto;
}

.headerRight-right {
  width: 190px;
  right: 0px;
  box-sizing: border-box;
}

.headerRight-right-wrap {
  width: 190px;
  position: absolute;
  right: 0px;
}
.headerRight-right-wrap img {
  height: 36px;
  vertical-align: middle;
  transform: translateY(-3px);
  margin-right: 5px;
}

.headerRight-right-wrap i {
  font-size: 12px;
  float: right;
}
</style>

