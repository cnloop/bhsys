<template>
  <section class="sanInput">
    <input ref="sanInput" :disabled="$attrs.sanInputDisabled" :value="sanInputValue" @input="updateInputValue" type="text" placeholder="请输入...">
  </section>
</template>
<script>
export default {
  props: ["sanInputValue"],
  created() {
    this.setStyle();
  },
  methods: {
    updateInputValue(event) {
      this.$emit("update:sanInputValue", event.target.value);
    },
    async setStyle() {
      await this.$nextTick(() => {
        this.setColor();
        this.setPlaceholder();
      });
    },
    setColor() {
      if (!this.$attrs.color) return;
      this.$refs.sanInput.style.color = this.$attrs.color;
    },
    setPlaceholder() {
      if (!this.$attrs.placeholder) return;
      this.$refs.sanInput.setAttribute = this.$attrs.placeholder;
    }
  }
};
</script>
<style scoped>
.sanInput {
  height: 30px;
  display: inline-block;
  line-height: 30px;
}
.sanInput input {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  height: 100%;
  outline: none;
  padding: 0 15px;
  font-size: 14px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.sanInput input::placeholder {
  color: #ccc;
  font-size: 1px;
}
.sanInput input:focus {
  border: 1px solid rgb(64, 158, 255);
}
</style>
