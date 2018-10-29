<template>
  <section class="sanList">
    <div class="title">
      <span>{{$attrs.title}}</span>
      <i class="iconfont">&#xe601;</i>
    </div>
    <ul class="info">
      <li v-for="(item,index) in $attrs.listArr" :key="index">
        <span>{{item}}</span>
      </li>
    </ul>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
.sanList {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: #fff;
}

.sanList .title {
  height: 36px;
  line-height: 36px;
  background-color: #2666e8;
  padding-left: 23px;
  padding-right: 20px;
  cursor: pointer;
  color: #fff;
  box-sizing: border-box;
}

.sanList .title span {
  font-size: 12px;
}

.sanList .title i {
  float: right;
  font-size: 12px;
}

.sanList .info li {
  height: 42px;
  line-height: 40px;
  cursor: pointer;
  padding-left: 40px;
  font-size: 12px;
  color: #333;
}
.sanList .info li span {
  text-decoration: #2666e8;
}
.sanList .info li:hover {
  background-color: #ebebec;
}
</style>
