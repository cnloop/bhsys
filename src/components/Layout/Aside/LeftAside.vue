<template>
  <section class="leftAside">
    <div v-for="item in navData" :key="item.routerText" class="leftAside-mainmenu" :ref="item.routerText" v-showMenuItems>
      <div class="mainmenu-title">
        <div class="left">
          <span>
            <i class="iconfont">&#xe621;</i>
          </span>
          <span>{{item.title.text}}</span>
        </div>
        <div class="right">
          <i class="iconfont arrow">&#xe634;</i>
        </div>
      </div>
      <div class="mainmenu-item-wrap">
        <router-link :to="`/${item.parentRouterText}/${item.routerText}/${val.routerText}`" v-for="val in item.items" :key="val.text" class="mainmenu-item">{{val.text}}</router-link>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ["navData", "currentPositon"],
  data() {
    return {
      // mainTitles: ["design-result", "design-setUp"]
    };
  },
  methods: {
    // 激活菜单，watch中调用
    async showItems(mainTitle) {
      await this.$nextTick(function() {
        this.$refs[mainTitle][0].style.height = `${
          this.$refs[mainTitle][0].actualHeight
        }px`;
        this.$refs[
          mainTitle
        ][0].firstChild.childNodes[2].firstChild.style.transform =
          "rotate(90deg)";
        this.$refs[mainTitle][0].isStretch = true;
      });
    },
    // 激活菜单，watch中调用
    activeMenu(val) {
      for (let i = 0; i < this.navData.length; i++) {
        if (val.path.indexOf(this.navData[i].routerText) > 0) {
          setTimeout(() => {
            this.showItems(this.navData[i].routerText);
          }, 0);
        }
      }
    },
  },
  directives: {
    showMenuItems: {
      inserted: async function(el, binding, vnode) {
        await vnode.context.$nextTick(function() {
          // 获取容器div高，并且注册到el属性中
          el.actualHeight = el.scrollHeight;
          // 获取标题div高，并且注册到el属性中
          el.titleHeight = el.firstChild.offsetHeight;
          // 设置容器高等于标题高
          el.style.height = `${el.titleHeight}px`;
        });
        // 为标题注册点击事件
        el.firstChild.onclick = function() {
          var arrowIcon = el.firstChild.childNodes[2].firstChild;
          // isStretch 是否展开
          if (el.isStretch) {
            // 判断已经展开，那么就折叠
            el.style.height = `${el.titleHeight}px`;
            arrowIcon.style.transform = "rotate(0deg)";
          } else {
            // 判读已经折叠，那么就展开
            // 展开前对其他其他菜单全部折叠
            var arrMenu = vnode.context.$refs;
            if (Object.keys(arrMenu).length !== 0) {
              for (const key in arrMenu) {
                if (arrMenu[key][0].isStretch) {
                  arrMenu[key][0].style.height = `${
                    arrMenu[key][0].titleHeight
                  }px`;
                  arrMenu[
                    key
                  ][0].firstChild.childNodes[2].firstChild.style.transform =
                    "rotate(0deg)";
                  arrMenu[key][0].isStretch = !arrMenu[key][0].isStretch;
                }
              }
            }
            el.style.height = `${el.actualHeight}px`;
            arrowIcon.style.transform = "rotate(90deg)";
          }
          // 取反设置
          el.isStretch = !el.isStretch;
        };
      },
      unbind: function(el) {
        el.onclick = null;
      }
    }
  },
  watch: {
    // 监听路由，激活路由指定菜单
    $route: {
      handler: function(val) {
        this.activeMenu(val);
      },
      immediate: true
    }
  }
};
</script>

<style scoped>
.leftAside-mainmenu {
  box-sizing: border-box;
  overflow: hidden;
  transition: height 0.15s ease-in-out;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
  user-select: none;
}
.leftAside-mainmenu > .mainmenu-title {
  width: 100%;
  cursor: pointer;
  height: 60px;
  line-height: 60px;
  padding: 0 10px;
  box-sizing: border-box;
}

.leftAside-mainmenu > .mainmenu-title > .left {
  float: left;
}
.leftAside-mainmenu > .mainmenu-title > .left > span {
  font-size: 16px;
  padding-left: 10px;
}
.leftAside-mainmenu > .mainmenu-title > .left i {
  font-size: 16px;
}
.leftAside-mainmenu > .mainmenu-title > .right {
  float: right;
}

.leftAside-mainmenu > .mainmenu-title > .right > .arrow {
  display: inline-block;
  font-size: 12px;
  color: #1de0f2;
  transform: rotate(0deg);
  transition: transform 0.15s ease-in-out;
}
.leftAside-mainmenu > .mainmenu-item-wrap {
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  background-color: rgb(7, 58, 96);
}
.leftAside-mainmenu > .mainmenu-item-wrap > .mainmenu-item {
  display: block;
  height: 50px;
  line-height: 50px;
  padding-left: 70px;
  border-left: 3px solid #2be2ee;
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  cursor: pointer;
}

.leftAside-mainmenu > .mainmenu-item-wrap > .mainmenu-item:hover {
  background-color: rgb(6, 46, 77);
}
.leftAside-mainmenu > .mainmenu-item-wrap > .mainmenu-item.link-active {
  background-color: rgb(6, 46, 77);
}
</style>


