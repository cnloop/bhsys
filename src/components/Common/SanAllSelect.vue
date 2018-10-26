<template>
  <section @click.stop="selecedItem" :class="{sanAllSelectByChecked:isAll,sanAllSelect:true}">
    <i class="iconfont" v-show="isAll">&#xe603;</i>
  </section>
</template>
<script>
export default {
  props: ["checkedSets", "tableTbodyData"],

  data() {
    return {
      allItem: [],
      isAll: false
    };
  },
  created() {
    this.getAllItem();
    this.checkSelected();
  },
  methods: {
    // 检查是否被选中
    checkSelected() {
      if (!this.checkSelected.length) return;
      if (this.checkedSets.length == this.allItem.length) {
        this.isAll = true;
      }
    },
    selecedItem() {
      this.isAll = !this.isAll;
      if (this.isAll) {
        this.$emit("update:checkedSets", this.allItem.concat());
      } else {
        this.$emit("update:checkedSets", []);
      }
    },
    getAllItem() {
      if (!this.tableTbodyData.length) return;
      for (var i = 0; i < this.tableTbodyData.length; i++) {
        this.allItem.push(this.tableTbodyData[i].id);
      }
    }
  },
  watch: {
    checkedSets: {
      handler: function(newVal, oldVal) {
        if (!newVal.length) return (this.isAll = false);
        if (newVal.length == this.tableTbodyData.length) {
          this.isAll = true;
        } else {
          this.isAll = false;
        }
      }
    }
  }
};
</script>
<style scoped>
.sanAllSelect {
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
.sanAllSelect > i {
  color: #fff;
  position: absolute;
  font-size: 15px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  transition: transform 0.15s ease-in 0.05s;
  transform-origin: center;
}
.sanAllSelect > input {
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

.sanAllSelectByChecked {
  background-color: #ff9f00;
  border-color: #ff9f00;
}
</style>
