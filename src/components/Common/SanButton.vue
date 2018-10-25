<template>
    <section ref="sanButton" class="sanButton">
        <span>
            <slot name="icon"></slot>
        </span>
        <span>
            <slot></slot>
        </span>
    </section>
</template>
<script>
export default {
  created() {
    this.setBgc();
  },
  methods: {
    async setBgc() {
      await this.$nextTick(() => {
        if (!this.$attrs.bgc) return;
        this.$refs.sanButton.style.backgroundColor = this.$attrs.bgc;
      });
    }
  }
};
</script>
<style scoped>
.sanButton {
  box-sizing: border-box;
  background-color: #2666e8;
  padding: 7px 12px;
  color: #fff;
  font-size: 12px;
  border-radius: 2px;
  cursor: pointer;
  white-space: nowrap;
  display: inline-block;
}
.sanButton > span:nth-child(1) > i {
  font-size: 16px;
  display: inline-block;
  transform: translateY(2px);
  backface-visibility: hidden;
}
</style>

