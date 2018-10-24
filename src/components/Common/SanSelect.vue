<template>
  <section v-selectItem class="sanSelect">
    <span>{{seletedOneItem}}</span>
    <i class="iconfont" ref="iconArrow">&#xe600;</i>
    <div class="DropDownMenu" v-show="isSelected">
      <span @click="selectOne(project)" v-for="project in projectData" :key="project">{{project}}</span>
    </div>
  </section>
</template>
<script>
export default {
  props: ["projectData", "seletedOneItem"],
  data() {
    return {
      isSelected: false
    };
  },
  methods: {
    selectOne(project) {
      this.$emit("update:seletedOneItem", project);
    }
  },
  watch: {
    isSelected: {
      handler: function(val) {
        this.$nextTick(function() {
          if (val) {
            this.$refs.iconArrow.style.transform =
              "translateY(-50%) rotate(-180deg)";
          } else {
            this.$refs.iconArrow.style.transform =
              "translateY(-50%) rotate(0deg)";
          }
        });
      },
      immediate: true
    }
  },
  directives: {
    selectItem: {
      inserted: async function(el, binding, vnode) {
        await vnode.context.$nextTick(function() {
          el.onclick = function(event) {
            event = event || window.event;
            if (event || event.stopPropagation) {
              event.stopPropagation();
            } else {
              event.cancelBubble = true;
            }
            vnode.context.isSelected = !vnode.context.isSelected;
          };
          document.addEventListener("click", function() {
            vnode.context.isSelected = false;
          });
        });
      }
    }
  }
};
</script>
<style scoped>
.sanSelect {
  width: 136px;
  height: 33px;
  border: 1px solid #d2cdcd;
  border-radius: 3px;
  display: inline-block;
  padding-left: 10px;
  padding-right: 10px;
  position: relative;
  font-size: 12px;
  color: #7f7f7f;
  background-color: #fff;
  cursor: pointer;
  box-sizing: border-box;
}
.sanSelect > i {
  font-size: 10px;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  transition: transform 0.2s;
}

.sanSelect > span {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  backface-visibility: hidden;
}

.DropDownMenu {
  position: absolute;
  top: 34px;
  left: 0px;
  min-width: 134px;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: 0px 1px 5px 0px #ccc;
}
.DropDownMenu span {
  display: block;
  padding: 0px 11px;
  line-height: 35px;
  cursor: pointer;
}
.DropDownMenu span:hover {
  background-color: #f5f7fa;
}
</style>

