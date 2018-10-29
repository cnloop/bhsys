<template>
    <section class="engineeringInfo">
        <section class="engineeringInfo-left">
            <left-aside :navData="navData"></left-aside>
        </section>
        <section class="engineeringInfo-right">
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
            icon: "&#xeb8f;",
            text: "工程基础信息"
          },
          routerText: "base",
          parentRouterText: "engineering-info",
          items: [
            {
              text: "工程基础信息",
              routerText: "base-project"
            }
          ]
        },
        {
          title: {
            icon: "&#xebb8;",
            text: "运行维护信息"
          },
          routerText: "run",
          parentRouterText: "engineering-info",
          items: [
            {
              text: "运行维护信息",
              routerText: "run-project"
            }
          ]
        },
        {
          title: {
            icon: "&#xec56;",
            text: "工程附属设施"
          },
          routerText: "other",
          parentRouterText: "engineering-info",
          items: [
            {
              text: "工程附属设施",
              routerText: "other-project"
            }
          ]
        },
        {
          title: {
            icon: "&#xeb95;",
            text: "运行维护管理报表"
          },
          routerText: "table",
          parentRouterText: "engineering-info",
          items: [
            {
              text: "运行维护管理报表",
              routerText: "table-project"
            }
          ]
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
.engineeringInfo {
  height: 100%;
  position: relative;
  background-color: #f6f7f8;
}
.engineeringInfo-left {
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  width: 228px;
  background-color: #0c1e3d;
}
.engineeringInfo-right {
  position: absolute;
  top: 0px;
  right: 0px;
  left: 228px;
  bottom: 0px;
}
</style>

