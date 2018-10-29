<template>
  <section class="chartProject">
    <section class="chartProject-top">
      <span>时间选择：</span>
      <date-picker v-model="timeStart" placeholder="开始时间"></date-picker>
      <span class="desc">至</span>
      <date-picker v-model="timeEnd" placeholder="结束时间"></date-picker>
      <span class="classSelectedText">类别选择:</span>
      <san-select class="classSelectedOne" :seletedOneItem.sync="classSelectedOne" :projectData="classData"></san-select>
      <san-button class="seatchBtn">
        <i slot="icon" class="iconfont">&#xeef7;</i>查询
      </san-button>
      <san-button @click.stop.native="addClass" class="addBtn">
        <i slot="icon" class="iconfont">&#xe602;</i>添加
      </san-button>
    </section>
    <section class="chartProject-center">
      <img class="chartImg" :src="require('@/assets/chart-1.png')" alt="">
      <img class="chartImg" :src="require('@/assets/chart-2.png')" alt="">
      <img class="chartImg" :src="require('@/assets/chart-3.png')" alt="">
      <img class="chartImg" :src="require('@/assets/chart-4.png')" alt="">
    </section>
    <san-class-set-up-add-item :itemInfo="itemInfo" :isShowItemInfo="isShowItemInfo" @sanAddItemCallBack="sanAddItemCallBack"></san-class-set-up-add-item>
  </section>
</template>
<script>
import SanSelect from "@/components/Common/SanSelect";
import SanButton from "@/components/Common/SanButton";
import SanTable from "@/components/Common/SanTable";
import SanClassSetUpAddItem from "@/components/ItemCom/EnginDesign/SanClassSetUpAddItem";
import DatePicker from "vue2-datepicker";
export default {
  data() {
    return {
      timeStart: "",
      timeEnd: "",
      classData: ["施工图", "设计图纸", "竣工图纸"],
      classSelectedOne: "请选择类别",
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
    SanButton,
    SanTable,
    DatePicker,
    SanClassSetUpAddItem
  }
};
</script>
<style>
.chartProject {
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
}
.chartProject-top {
  position: relative;
  width: 100%;
  font-size: 12px;
  color: #7f7f7f;
  box-sizing: border-box;
}
.chartProject-top .mx-datepicker {
  width: 180px;
  padding: 0px 8px;
}
.chartProject-top .mx-input {
  height: 32px;
  font-size: 12px;
}
.chartProject-top .classSelectedText {
  padding-left: 20px;
  padding-right: 8px;
}
.chartProject-top .classSelectedOne {
  vertical-align: middle;
}
.chartProject-top .seatchBtn {
  vertical-align: middle;
  margin: 0px 20px;
}
.chartProject-top .addBtn {
  vertical-align: middle;
}

.chartProject-center {
  width: 100%;
  /* margin-top: 20px; */
}

.chartProject-center > .chartImg {
  width: 100%;
  height: auto;
  display: block;
  margin-top: 20px;
}
.chartProject-center > .chartImg:last-child {
  margin-bottom: 20px;
}
</style>
