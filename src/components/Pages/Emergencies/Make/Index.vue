<template>
     <section class="make">
        <section class="nav-bar-current-wrap">
            <nav-bar-current></nav-bar-current>
        </section>
        <section class="nav-bar-tab-wrap">
            <nav-bar-tab></nav-bar-tab>
        </section>
        <section class="make-main-wrap">
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
.make {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: auto;
}
.make > .nav-bar-current-wrap {
  height: 46px;
}
.make > .nav-bar-tab-wrap {
  height: 56px;
}
.make > .make-main-wrap {
  position: absolute;
  top: 124px;
  bottom: 0px;
  left: 12px;
  right: 12px;
}
</style>