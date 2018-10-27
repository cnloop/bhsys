<template>
    <section class="base">
        <section class="nav-bar-current-wrap">
            <nav-bar-current></nav-bar-current>
        </section>
        <section class="nav-bar-tab-wrap">
            <nav-bar-tab></nav-bar-tab>
        </section>
        <section class="base-main-wrap">
            <router-view></router-view>
        </section>
    </section>
</template>
<script>
import NavBarCurrent from "@/components/Layout/NavBar/NavBarCurrent";
import NavBarTab from "@/components/Layout/NavBar/NavBarTab";
export default {
  components: {
    NavBarCurrent,
    NavBarTab
  }
};
</script>

<style scoped>
.base {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: auto;
}
.base > .nav-bar-current-wrap {
  height: 46px;
}
.base > .nav-bar-tab-wrap {
  height: 56px;
}
.base > .base-main-wrap {
  position: absolute;
  top: 124px;
  bottom: 0px;
  left: 12px;
  right: 12px;
}
</style>
