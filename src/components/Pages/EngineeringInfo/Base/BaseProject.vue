<template>
  <section class="baseProject">
    <div class="left">
      <san-list :title="title" :listArr="listArr"></san-list>
    </div>
    <div class="right">
      <img :src="require('@/assets/project-1.jpg')" alt="">
      <img :src="require('@/assets/project-2.png')" alt="">

    </div>
  </section>
</template>
<script>
import SanList from "@/components/Common/SanList";

export default {
  data() {
    return {
      title: "工程",
      listArr: [
        "二级坝泵站",
        "灰埠泵站",
        "东宋泵站",
        "辛庄泵站",
        "黄水河泵站",
        "温石汤泵站",
        "高瞳泵站",
        "星石泊泵站",
        "米山水库"
      ]
    };
  },
  components: {
    SanList
  }
};
</script>
<style>
.baseProject {
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
}
.baseProject > .left {
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  width: 192px;
}
.baseProject > .right {
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 202px;
}
.baseProject > .right > img {
  width: 100%;
}

.baseProject > .right > img:nth-child(2) {
  margin-top: 20px;
  padding-bottom: 20px;
}
</style>

