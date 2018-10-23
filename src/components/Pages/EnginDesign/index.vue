<template>
  <section class="enginDesign">
    <section class="enginDesign-left">
      <left-aside></left-aside>
    </section>
    <section class="enginDesign-right">
      <section class="nav-bar-current-wrap">
        <nav-bar-current></nav-bar-current>
      </section>
      <section class="nav-bar-tab-wrap">
        <nav-bar-tab></nav-bar-tab>
      </section>

    </section>
  </section>
</template>
<script>
import LeftAside from "@/components/Layout/Aside/LeftAside";
import NavBarCurrent from "@/components/Layout/NavBar/NavBarCurrent";
import NavBarTab from "@/components/Layout/NavBar/NavBarTab";

export default {
  components: {
    LeftAside,
    NavBarCurrent,
    NavBarTab
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
.enginDesign-right > .nav-bar-current-wrap {
  height: 46px;
}
.enginDesign-right > .nav-bar-tab-wrap {
  height: 56px;
}
</style>

