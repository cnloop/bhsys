<template>
  <section class="headerRight">
    <div class="headerRight-item-wrap">
      <div class="headerRight-item all-center">
        <img :src="require('@/assets/nav-1.png')">
        <span>一体化实时监测</span>
      </div>
    </div>

    <div class="headerRight-item-wrap">
      <div class="headerRight-item all-center">
        <img :src="require('@/assets/nav-2.png')">
        <span>工程设计成果</span>
      </div>
    </div>

    <div class="headerRight-item-wrap">
      <div class="headerRight-item all-center">
        <img :src="require('@/assets/nav-3.png')">
        <span>维修养护</span>
      </div>
    </div>

    <div class="headerRight-item-wrap">
      <div class="headerRight-item all-center">
        <img :src="require('@/assets/nav-4.png')">
        <span>突发事件</span>
      </div>
    </div>

    <div class="headerRight-item-wrap">
      <div class="headerRight-item all-center">
        <img :src="require('@/assets/nav-5.png')">
        <span>内网门户</span>
      </div>
    </div>

  </section>
</template>
<script>
export default {};
</script>
<style scoped>
.headerRight {
  height: 100%;
  position: relative;
}
.headerRight-item-wrap {
  float: left;
  width: 132px;
  height: 100%;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
  position: relative;
  border-right: 1px solid #233049;
}

.headerRight-item-wrap:hover {
  background-color: #0f2b5c;
}

.headerRight-item-wrap:nth-child(1) {
  width: 170px;
  border-bottom: 2px solid #2be2ee;
  border-left: 1px solid #233049;
}

.headerRight-item-wrap:nth-child(2) {
  width: 160px;
}

.headerRight-item {
  width: 98px;
}

.headerRight-item-wrap:nth-child(1) > .headerRight-item {
  width: 145px;
}

.headerRight-item-wrap:nth-child(2) > .headerRight-item {
  width: 130px;
}

.headerRight-item > img {
  height: 20px;
  float: left;
}
.headerRight-item > span {
  white-space: nowrap;
  float: right;
}
</style>

