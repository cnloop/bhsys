<template>
  <section class="navBarCurrent">
    <div class="navBarCurrent-wrap tb-center">
      <span>当前位置：</span>
      <span>首页</span>
      <span v-for="position in positionArr" :key="position">
        <span class="arrow">></span>
        <span>{{position}}</span>
      </span>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      positionArr: []
    };
  },
  methods: {
    // 监控路由，提交路由中的meta信息
    getCurrentPosition(val) {
      if (!val.matched.length) return;
      for (var i = 0; i < val.matched.length; i++) {
        this.positionArr.push(val.matched[i].meta);
      }
    }
  },
  watch: {
    $route: {
      handler: function(val) {
        this.positionArr = [];
        this.getCurrentPosition(val);
      },
      immediate: true
    }
  }
};
</script>
<style scoped>
.navBarCurrent {
  height: 100%;
  background-color: #0b1e41;
  position: relative;
}
.navBarCurrent-wrap {
  left: 20px;
}
.navBarCurrent-wrap > span {
  font-size: 13px;
  color: #999;
}
.navBarCurrent-wrap > span:last-child {
  color: #2be2ee;
}
.navBarCurrent-wrap .arrow {
  padding-left: 8px;
  padding-right: 8px;
  color: #999;
}
</style>

