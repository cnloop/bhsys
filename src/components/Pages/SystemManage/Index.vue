<template>
  <section class="systemManage">
    <section class="systemManage-left">
      <left-aside :navData="navData"></left-aside>
    </section>
    <section class="systemManage-right">
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
            icon: "&#xe614;",
            text: "系统设置"
          },
          routerText: "system-set",
          parentRouterText: "system-manage",
          items: [
            {
              text: "菜单管理",
              routerText: "menu"
            },
            {
              text: "角色管理",
              routerText: "role"
            },
            {
              text: "字典管理",
              routerText: "dic"
            },
            {
              text: "即时通讯群组",
              routerText: "group"
            },
            {
              text: "即时通讯成员",
              routerText: "member"
            },
            {
              text: "产品版本信息",
              routerText: "version"
            }
          ]
        },
        {
          title: {
            icon: "&#xe606;",
            text: "机构用户"
          },
          routerText: "org-set",
          parentRouterText: "system-manage",
          items: [
            {
              text: "账号管理",
              routerText: "account"
            },
            {
              text: "人员管理",
              routerText: "account1"
            },
            {
              text: "机构管理",
              routerText: "account2"
            }
          ]
        },
        {
          title: {
            icon: "&#xe618;",
            text: "数据监测"
          },
          routerText: "data-set",
          parentRouterText: "system-manage",
          items: [
            {
              text: "站点信息",
              routerText: "site"
            }
          ]
        },
        {
          title: {
            icon: "&#xe60f;",
            text: "工程管理"
          },
          routerText: "project-set",
          parentRouterText: "system-manage",
          items: [
            {
              text: "工程观测",
              routerText: "project"
            }
          ]
        },
        {
          title: {
            icon: "&#xe6fd;",
            text: "视频管理"
          },
          routerText: "video-set",
          parentRouterText: "system-manage",
          items: [
            {
              text: "视频集成",
              routerText: "video"
            }
          ]
        },
        {
          title: {
            icon: "&#xe615;",
            text: "流程管理"
          },
          routerText: "path-set",
          parentRouterText: "system-manage",
          items: [
            {
              text: "流程管理",
              routerText: "path"
            },
            {
              text: "模型管理",
              routerText: "path1"
            }
          ]
        },
        {
          title: {
            icon: "&#xe607;",
            text: "日志查询"
          },
          routerText: "log-set",
          parentRouterText: "system-manage",
          items: [
            {
              text: "日志查询",
              routerText: "log"
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
.systemManage {
  height: 100%;
  position: relative;
  background-color: #f6f7f8;
}
.systemManage-left {
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  width: 228px;
  background-color: #0c1e3d;
}
.systemManage-right {
  position: absolute;
  top: 0px;
  right: 0px;
  left: 228px;
  bottom: 0px;
}
</style>
