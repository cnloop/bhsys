<template>
  <section class="enginDesign">
    <section class="enginDesign-left">
      <left-aside :navData="navData"></left-aside>
    </section>
    <section class="enginDesign-right">
      <router-view></router-view>
    </section>
  </section>
</template>
<script>
import LeftAside from "@/components/Layout/Aside/LeftAside";

export default {
  data() {
    return {
      navData: [
        {
          title: {
            icon: "&#xeb61;",
            text: "设计成果"
          },
          items: [
            {
              text: "设计管理",
              routerText: "design-mgt"
            },
            {
              text: "工程文档",
              routerText: "engineering-doc"
            }
          ],
          routerText: "design-result",
          parentRouterText: "engin-design"
        },
        {
          title: {
            icon: "&#xeb66;",
            text: "成果分类设置"
          },
          items: [
            {
              text: "成果分类设置",
              routerText: "class-setUp"
            }
          ],
          routerText: "design-setUp",
          parentRouterText: "engin-design"
        }
      ]
    };
  },
  components: {
    LeftAside
  }
};
</script>
<style scoped>
.enginDesign {
  height: 100%;
  position: relative;
  background-color: #f6f7f8;
}
.enginDesign-left {
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  width: 228px;
  background-color: #0c1e3d;
}
.enginDesign-right {
  position: absolute;
  top: 0px;
  right: 0px;
  left: 228px;
  bottom: 0px;
}
</style>

