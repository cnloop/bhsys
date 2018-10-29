<template>
  <section class="headerRight">
    <router-link to="/gis-map" class="headerRight-item-wrap">
      <div class="headerRight-item all-center">
        <img :src="require('@/assets/nav-1.png')">
        <span>GIS一张图</span>
      </div>
    </router-link>

    <router-link to="/engin-design" class="headerRight-item-wrap">
      <div class="headerRight-item all-center">
        <img :src="require('@/assets/nav-2.png')">
        <span>工程设计成果</span>
      </div>
    </router-link>

    <router-link to="/repair-curing" class="headerRight-item-wrap">
      <div class="headerRight-item all-center">
        <img :src="require('@/assets/nav-3.png')">
        <span>维修养护</span>
      </div>
    </router-link>

    <router-link to="/emergencies" class="headerRight-item-wrap">
      <div class="headerRight-item all-center">
        <img :src="require('@/assets/nav-4.png')">
        <span>突发事件</span>
      </div>
    </router-link>

    <router-link to="/engineering-info" class="headerRight-item-wrap">
      <div class="headerRight-item all-center">
        <img :src="require('@/assets/nav-5.png')">
        <span>工程信息</span>
      </div>
    </router-link>
    <router-link to="/system-manage" class="headerRight-item-wrap">
      <div class="headerRight-item all-center">
        <img :src="require('@/assets/nav-7.png')">
        <span>系统管理</span>
      </div>
    </router-link>

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

.headerRight-item-wrap.link-active {
  border-bottom: 2px solid #2be2ee;
}

.headerRight-item-wrap:hover {
  background-color: #0f2b5c;
}

.headerRight-item-wrap:nth-child(1) {
  width: 146px;
  border-left: 1px solid #233049;
}

.headerRight-item-wrap:nth-child(2) {
  width: 160px;
}

.headerRight-item {
  width: 98px;
}

.headerRight-item-wrap:nth-child(1) > .headerRight-item {
  width: 110px;
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

