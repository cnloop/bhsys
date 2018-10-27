<template>
    <section class="repairCuring">
        <section class="repairCuring-left">
            <left-aside :navData="navData"></left-aside>
        </section>
        <section class="repairCuring-right">
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
            icon: "&#xe621;",
            text: "标准化模型"
          },
          routerText: "model",
          parentRouterText: "repair-curing",
          items: [
            {
              text: "维护方案模型",
              routerText: "model-project"
            }
          ]
        },
        {
          title: {
            icon: "&#xe621;",
            text: "维护方案及预算"
          },
          routerText: "budget",
          parentRouterText: "repair-curing",
          items: [
            {
              text: "方案及预算",
              routerText: "budget-project"
            }
          ]
        },
        {
          title: {
            icon: "&#xe621;",
            text: "重大工程辅助决策"
          },
          routerText: "decision",
          parentRouterText: "repair-curing",
          items: [
            {
              text: "辅助决策",
              routerText: "decision-project"
            }
          ]
        },
        {
          title: {
            icon: "&#xe621;",
            text: "维护过程实时记录"
          },
          routerText: "progress",
          parentRouterText: "repair-curing",
          items: [
            {
              text: "进度管理",
              routerText: "progress-project"
            }
          ]
        },
        {
          title: {
            icon: "&#xe621;",
            text: "工程维护验收"
          },
          routerText: "check",
          parentRouterText: "repair-curing",
          items: [
            {
              text: "工程验收",
              routerText: "check-project"
            }
          ]
        },
        {
          title: {
            icon: "&#xe621;",
            text: "文档资料归档"
          },
          routerText: "doc",
          parentRouterText: "repair-curing",
          items: [
            {
              text: "文档资料",
              routerText: "doc-project"
            },
            {
              text: "统计报表",
              routerText: "chart-project"
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
.repairCuring {
  height: 100%;
  position: relative;
  background-color: #f6f7f8;
}
.repairCuring-left {
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  width: 228px;
  background-color: #0c1e3d;
}
.repairCuring-right {
  position: absolute;
  top: 0px;
  right: 0px;
  left: 228px;
  bottom: 0px;
}
</style>
