<template>
  <section class="navBarTab">
    <h3 ref="navBarTabWrap">
      <span class="all-center" ref="navBarTabText">{{currentPosition}}</span>
    </h3>
  </section>
</template>
<script>
export default {
  data() {
    return {
      currentPosition: ""
    };
  },
  methods: {
    // 设置父容器宽度，并使自容器垂直水平居中
    async setWidth() {
      await this.$nextTick(() => {
        this.$refs.navBarTabWrap.style.width = `${this.$refs.navBarTabText
          .offsetWidth + 50}px`;
        // this.$refs.navBarTabText.style.position = "absolute";
        // this.$refs.navBarTabText.style.top = "50%";
        // this.$refs.navBarTabText.style.left = "50%";
        // this.$refs.navBarTabText.style.transform = "translate(-50%,-50%)";
      });
    },
    // 显示当前位置
    showCurrentPosition(val) {
      if (!val.matched.length) return;
      for (var i = 0; i < val.matched.length; i++) {
        this.currentPosition = val.matched[i].meta;
      }
    }
  },
  watch: {
    $route: {
      handler: function(val) {
        this.showCurrentPosition(val);
        this.setWidth();
      },
      immediate: true
    }
  }
};
</script>
<style scoped>
.navBarTab {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-top: 4px solid #2666e8;
  border-bottom: 1px solid #cfcfcf;
  background-color: #deecf9;
}
.navBarTab > h3 {
  position: relative;
  height: 100%;
  color: #2666e8;
  margin-top: 1px;
  border-right: 1px solid #cfcfcf;
  background-color: #f6f7f8;
  font-size: 14px;
}
.navBarTab > h3 > span {
  white-space: nowrap;
}
</style>
