<template>
  <section @click.stop="selecedItem" v-setCustomStyle :class="{sanCheckboxByChecked:isSelect,sanCheckbox:true}">
    <i v-setIconCustomStyle class="iconfont" v-show="isSelect">&#xe603;</i>
  </section>
</template>
<script>
export default {
  props: ["checkedSets"],
  created() {
    this.checkSelected();
  },
  data() {
    return {
      isSelect: false
    };
  },

  methods: {
    // 检查是否被选中
    checkSelected() {
      if (!this.checkedSets.length) return;
      for (var i = 0; i < this.checkedSets.length; i++) {
        if (this.checkedSets[i] === this.$attrs.value) {
          return (this.isSelect = true);
        }
      }
    },
    // 点击事件
    selecedItem() {
      this.isSelect = !this.isSelect;
      if (this.isSelect) {
        for (var i = 0; i < this.checkedSets.length; i++) {
          if (this.checkedSets[i] == this.$attrs.value) return;
        }
        this.checkedSets.push(this.$attrs.value);
        this.$emit("update:checkedSets", this.checkedSets);
      } else {
        for (var i = 0; i < this.checkedSets.length; i++) {
          if (this.checkedSets[i] == this.$attrs.value) {
            this.checkedSets.splice(i, 1);
            return this.$emit("update:checkedSets", this.checkedSets);
          }
        }
      }
    },
    setFontSize(el, _attrs) {
      if (!_attrs.fontSize) return;
      el.style.fontSize = _attrs.fontSize;
    },
    setWith(el, _attrs) {
      if (!_attrs.width) return;
      el.style.width = _attrs.width;
    },
    setHeight(el, _attrs) {
      if (!_attrs.height) return;
      el.style.height = _attrs.height;
    },
    setBorderRadius(el, _attrs) {
      if (!_attrs.borderRadius) return;
      el.style.borderRadius = _attrs.borderRadius;
    },
    setIconFontSize(el, _attrs) {
      if (!_attrs.iconFontSize) return;
      el.style.fontSize = _attrs.iconFontSize;
    }
  },
  directives: {
    setCustomStyle: {
      inserted: async function(el, binding, vnode) {
        vnode.context.$nextTick(function() {
          var _attrs = vnode.context.$attrs;
          vnode.context.setFontSize(el, _attrs);
          vnode.context.setWith(el, _attrs);
          vnode.context.setHeight(el, _attrs);
          vnode.context.setBorderRadius(el, _attrs);
        });
      }
    },
    setIconCustomStyle: {
      inserted: async function(el, binding, vnode) {
        vnode.context.$nextTick(function() {
          var _attrs = vnode.context.$attrs;
          vnode.context.setIconFontSize(el, _attrs);
        });
      }
    }
  },
  watch: {
    checkedSets: {
      handler: function(newVal, oldVal) {
        if (!newVal.length) return (this.isSelect = false);
        for (var i = 0; i < newVal.length; i++) {
          if (newVal[i] == this.$attrs.value) {
            return (this.isSelect = true);
          }
        }
        this.isSelect = false;
      }
    }
  }
};
</script>
<style scoped>
.sanCheckbox {
  display: inline-block;
  position: relative;
  z-index: 0;
  border: 1px solid #dcdfe6;
  border-radius: 2px;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
    background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
  background-color: #fff;
  cursor: pointer;
}
.sanCheckbox > i {
  color: #fff;
  position: absolute;
  font-size: 15px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  transition: transform 0.15s ease-in 0.05s;
  transform-origin: center;
}
.sanCheckbox > input {
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  outline: none;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}

.sanCheckboxByChecked {
  background-color: #409eff;
  border-color: #409eff;
}
</style>
