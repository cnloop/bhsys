<template>
  <div id="app">

    <vue-topprogress ref="topProgress"></vue-topprogress>
    <!-- height 66px -->
    <section class="header">
      <div class="header-left-wrap tb-center">
        <header-left></header-left>
      </div>
      <div class="header-center-wrap tb-center">
        <header-center></header-center>
      </div>
      <div class="header-right-wrap tb-center">
        <header-right></header-right>
      </div>
    </section>

    <section class="container">
      <router-view />
    </section>
  </div>
</template>

<script>
// 头部组件
import HeaderLeft from "@/components/Layout/Header/HeaderLeft";
import HeaderCenter from "@/components/Layout/Header/HeaderCenter";
import HeaderRight from "@/components/Layout/Header/HeaderRight";
import { vueTopprogress } from "vue-top-progress";

export default {
  name: "App",
  mounted() {
    this.$refs.topProgress.start();
    setTimeout(() => {
      this.$refs.topProgress.done();
    }, 600);
  },
  watch: {
    $route: {
      handler: function(val) {
        this.$refs.topProgress.start();
        setTimeout(() => {
          this.$refs.topProgress.done();
        }, 600);
      }
    }
  },
  components: {
    HeaderLeft,
    HeaderCenter,
    HeaderRight,
    vueTopprogress
  }
};
</script>

<style>
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
body,
form,
fieldset,
input,
textarea,
blockquote,
p {
  padding: 0;
  margin: 0;
}
a {
  color: #000;
  text-decoration: none;
}
li {
  list-style-type: none;
}
img {
  vertical-align: top;
  border: 0;
}
ol,
ul {
  list-style: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

th,
td {
  padding: 0px;
}

.clearfix:after {
  content: "";
  display: block;
  height: 0;
  line-height: 0;
  visibility: hidden;
  clear: both;
}

@font-face {
  font-family: "iconfont"; /* project id 858289 */
  src: url("//at.alicdn.com/t/font_858289_d1mu9vgsyel.woff") format("woff");
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

/* 上下居中 */
.tb-center {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.lr-center {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

/* 垂直居中 */
.all-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* ---------------------------------------------------------- */

html {
  font-family: Helvetica, Arial, sans-serif;
}
html,
body {
  height: 100%;
  background: url(./assets/bg.png) left top;
}
#app {
  height: 100%;
  overflow: hidden;
  position: relative;
}

.header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 66px;
  border-bottom: 2px solid #262f49;
  box-sizing: border-box;
  background-color: #0a1938;
}
.header > .header-left-wrap {
  left: 22px;
}
.header > .header-center-wrap {
  right: 448px;
  height: 100%;
}
.header > .header-right-wrap {
  width: 290px;
  right: 20px;
}
.container {
  position: absolute;
  top: 66px;
  left: 0;
  right: 0;
  bottom: 0;
  box-sizing: border-box;
}
</style>
