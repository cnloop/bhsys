<template>
    <section class="emergencies">
        <section class="emergencies-left">
            <left-aside :navData="navData"></left-aside>
        </section>
        <section class="emergencies-right">
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
            icon: "&#xeb92;",
            text: "预案管理编制"
          },
          routerText: "manage",
          parentRouterText: "emergencies",
          items: [
            {
              text: "预案管理编制",
              routerText: "manage-project"
            }
          ]
        },
        {
          title: {
            icon: "&#xec6b;",
            text: "方案制定"
          },
          routerText: "make",
          parentRouterText: "emergencies",
          items: [
            {
              text: "方案制定",
              routerText: "make-project"
            }
          ]
        },
        {
          title: {
            icon: "&#xeb62;",
            text: "方案实施计划"
          },
          routerText: "start",
          parentRouterText: "emergencies",
          items: [
            {
              text: "方案实施计划",
              routerText: "start-project"
            }
          ]
        },
        {
          title: {
            icon: "&#xebd8;",
            text: "实施情况记录"
          },
          routerText: "note",
          parentRouterText: "emergencies",
          items: [
            {
              text: "实施情况记录",
              routerText: "note-project"
            }
          ]
        },
        {
          title: {
            icon: "&#xec24;",
            text: "文档资料"
          },
          routerText: "doc",
          parentRouterText: "emergencies",
          items: [
            {
              text: "资料归档",
              routerText: "doc-project"
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
.emergencies {
  height: 100%;
  position: relative;
  background-color: #f6f7f8;
}
.emergencies-left {
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  width: 228px;
  background-color: #0c1e3d;
}
.emergencies-right {
  position: absolute;
  top: 0px;
  right: 0px;
  left: 228px;
  bottom: 0px;
}
</style>
