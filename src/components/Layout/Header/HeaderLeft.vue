<template>
  <section class="headerLeft">
    <img :src="require('@/assets/logo.png')">
    <h1>变更设计运行管理信息系统</h1>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
.headerLeft {
  line-height: 34px;
}
.headerLeft > img {
  height: 34px;
}
.headerLeft > h1 {
  display: inline;
  padding-left: 10px;
  color: #36c8ea;
  font-weight: 300;
  font-size: 22px;
  transform: translateY(-1px);
}
</style>

