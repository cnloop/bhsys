<template>
  <section class="tableProject">
    <section class="tableProject-top">
      <span class="projectSelectText">项目选择:</span>
      <san-select class="projectSelectedOne" :seletedOneItem.sync="projectSelectedOne" :projectData="projectData"></san-select>
      <san-button class="seatchBtn">
        <i slot="icon" class="iconfont">&#xeef7;</i>查询
      </san-button>
      <img :src="require('@/assets/projectTable.png')" alt="">
    </section>
  </section>
</template>
<script>
import SanSelect from "@/components/Common/SanSelect";
import SanButton from "@/components/Common/SanButton";
export default {
  data() {
    return {
      projectData: ["唐河地下涵", "宿县枢纽", "符离闸", "灵璧枢纽"],
      projectSelectedOne: "请选择项目",
      itemInfo: "",
      isShowItemInfo: false,
      currentPage: 1,
      currentTotal: 3
    };
  },
  methods: {
    sanAddItemCallBack(info) {
      if (info === "cancel") {
        this.isShowItemInfo = false;
      } else {
        this.isShowItemInfo = true;
      }
    },
    addClass() {
      this.isShowItemInfo = true;
    },
    paginateCallback() {}
  },
  components: {
    SanSelect,
    SanButton
  }
};
</script>
<style>
.tableProject {
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
}
.tableProject-top {
  position: relative;
  width: 100%;
  font-size: 12px;
  color: #7f7f7f;
  box-sizing: border-box;
}
.tableProject-top .mx-datepicker {
  width: 180px;
  padding: 0px 8px;
}
.tableProject-top .mx-input {
  height: 32px;
  font-size: 12px;
}
.tableProject-top .projectSelectText {
  padding-left: 10px;
  padding-right: 8px;
}
.tableProject-top .projectSelectedOne {
  vertical-align: middle;
}
.tableProject-top .seatchBtn {
  vertical-align: middle;
  margin: 0px 20px;
}
.tableProject-top .addBtn {
  vertical-align: middle;
}
.tableProject-top > img {
  margin-top: 20px;
  width: 100%;
}
</style>

