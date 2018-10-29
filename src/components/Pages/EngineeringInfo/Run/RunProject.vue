<template>
  <section class="runProject">
    <section class="runProject-top">
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
    <section class="runProject-center">
      <run-table :tableTheadData="tableTheadData" :tableTbodyData="tableTbodyData"></run-table>
    </section>
    <section class="runProject-bottom">
      <div class="runProject-bottom-wrap tb-center">
        <paginate :page-count="currentTotal" v-model="currentPage" :page-range="3" :margin-pages="2" :click-handler="paginateCallback" :prev-text="'上一页'" :next-text="'下一页'" :prev-class="'prev-item'" :prev-link-class="'prev-link-item'" :next-class="'next-item'" :next-link-class="'next-link-item'" :container-class="'pagination'" :page-class="'page-item'" :page-link-class="'page-link-item'" :active-class="'active-item'" :disabled-class="'disabled-item'">
        </paginate>
      </div>
    </section>
    <san-class-set-up-add-item :itemInfo="itemInfo" :isShowItemInfo="isShowItemInfo" @sanAddItemCallBack="sanAddItemCallBack"></san-class-set-up-add-item>
  </section>
</template>
<script>
import SanSelect from "@/components/Common/SanSelect";
import SanButton from "@/components/Common/SanButton";
import SanTable from "@/components/Common/SanTable";
import RunTable from "@/components/ItemCom/EngineeringInfo/RunTable";

import SanClassSetUpAddItem from "@/components/ItemCom/EnginDesign/SanClassSetUpAddItem";
import Paginate from "vuejs-paginate";
import DatePicker from "vue2-datepicker";
export default {
  data() {
    return {
      timeStart: "",
      timeEnd: "",
      classData: ["施工图", "设计图纸", "竣工图纸"],
      classSelectedOne: "请选择类别",
      tableTheadData: [
        "工程",
        "上游水位",
        "下游水位",
        "扬程",
        "工程总体运行情况",
        "操作"
      ],
      tableTbodyData: [
        {
          id: "u1",
          projectName: "唐河地下涵",
          upWaterLevel: "86.6m",
          downWaterLevel: "86.6m",
          yc: "0m",
          state: "良好"
        },
        {
          id: "u2",
          projectName: "团结涵",
          upWaterLevel: "80.2m",
          downWaterLevel: "79.3m",
          yc: "0.9m",
          state: "良好"
        },
        {
          id: "u3",
          projectName: "大余闸",
          upWaterLevel: "76.8m",
          downWaterLevel: "74.8m",
          yc: "2m",
          state: "正常"
        },
        {
          id: "u4",
          projectName: "大店闸",
          upWaterLevel: "78.3m",
          downWaterLevel: "76.8m",
          yc: "2m",
          state: "正常"
        },
        {
          id: "u5",
          projectName: "宿县闸",
          upWaterLevel: "76.4m",
          downWaterLevel: "60.3m",
          yc: "16.1m",
          state: "良好"
        },
        {
          id: "u6",
          projectName: "灵西闸",
          upWaterLevel: "78.7m",
          downWaterLevel: "75.7m",
          yc: "3m",
          state: "良好"
        },
        {
          id: "u7",
          projectName: "大王闸",
          upWaterLevel: "98.1m",
          downWaterLevel: "90.7m",
          yc: "8m",
          state: "正常"
        }
      ],
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
    Paginate,
    RunTable,
    SanClassSetUpAddItem
  }
};
</script>
<style>
.runProject {
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
}
.runProject-top {
  position: relative;
  width: 100%;
  font-size: 12px;
  color: #7f7f7f;
  box-sizing: border-box;
}
.runProject-top .mx-datepicker {
  width: 180px;
  padding: 0px 8px;
}
.runProject-top .mx-input {
  height: 32px;
  font-size: 12px;
}
.runProject-top .classSelectedText {
  padding-left: 20px;
  padding-right: 8px;
}
.runProject-top .classSelectedOne {
  vertical-align: middle;
}
.runProject-top .seatchBtn {
  vertical-align: middle;
  margin: 0px 20px;
}
.runProject-top .addBtn {
  vertical-align: middle;
}

.runProject-center {
  width: 100%;
  margin-top: 20px;
}
.runProject-bottom {
  position: relative;
  height: 100px;
}
.runProject-bottom-wrap {
  right: 0px;
}

.runProject-bottom-wrap .page-item {
  float: left;
  width: 60px;
  height: 40px;
  line-height: 40px;
  box-sizing: content-box;
}

.runProject-bottom-wrap .page-link-item {
  height: 100%;
  display: inline-block;
  width: 100%;
  text-align: center;
  border: 1px solid #8fb3d0;
  border-right: none;
  color: #a9a1a1;
}

.runProject-bottom-wrap .prev-item {
  float: left;
  height: 40px;
  line-height: 40px;
}
.runProject-bottom-wrap .prev-link-item {
  height: 100%;
  display: inline-block;
  padding: 0 10px;
  text-align: center;
  border: 1px solid #8fb3d0;
  color: #a9a1a1;
  border-right: none;
}
.runProject-bottom-wrap .next-item {
  display: inline-block;
  height: 40px;
  line-height: 40px;
}
.runProject-bottom-wrap .next-link-item {
  height: 100%;
  display: inline-block;
  padding: 0 10px;
  text-align: center;
  color: #a9a1a1;
  border: 1px solid #8fb3d0;
}

.runProject-bottom-wrap .active-item > .page-link-item {
  color: #fff !important;
  background-color: #2666e8;
}
.runProject-bottom-wrap .active-item > .page-link-item {
  /* color: #337ab7; */
  color: red;
}
.runProject-bottom-wrap .disabled-item {
  cursor: not-allowed;
}
.runProject-bottom-wrap .disabled-item > .prev-link-item {
  color: #ddd;
  cursor: not-allowed;
}
.runProject-bottom-wrap .disabled-item > .next-link-item {
  color: #ddd;
  cursor: not-allowed;
}
.runProject-bottom {
  position: relative;
  height: 100px;
}
.runProject-bottom-wrap {
  right: 0px;
}

.runProject-bottom-wrap .page-item {
  float: left;
  width: 60px;
  height: 40px;
  line-height: 40px;
  box-sizing: content-box;
}

.runProject-bottom-wrap .page-link-item {
  height: 100%;
  display: inline-block;
  width: 100%;
  text-align: center;
  border: 1px solid #8fb3d0;
  border-right: none;
  color: #a9a1a1;
}

.runProject-bottom-wrap .prev-item {
  float: left;
  height: 40px;
  line-height: 40px;
}
.runProject-bottom-wrap .prev-link-item {
  height: 100%;
  display: inline-block;
  padding: 0 10px;
  text-align: center;
  border: 1px solid #8fb3d0;
  color: #a9a1a1;
  border-right: none;
}
.runProject-bottom-wrap .next-item {
  display: inline-block;
  height: 40px;
  line-height: 40px;
}
.runProject-bottom-wrap .next-link-item {
  height: 100%;
  display: inline-block;
  padding: 0 10px;
  text-align: center;
  color: #a9a1a1;
  border: 1px solid #8fb3d0;
}

.runProject-bottom-wrap .active-item > .page-link-item {
  color: #fff !important;
  background-color: #2666e8;
}
.runProject-bottom-wrap .active-item > .page-link-item {
  /* color: #337ab7; */
  color: red;
}
.runProject-bottom-wrap .disabled-item {
  cursor: not-allowed;
}
.runProject-bottom-wrap .disabled-item > .prev-link-item {
  color: #ddd;
  cursor: not-allowed;
}
.runProject-bottom-wrap .disabled-item > .next-link-item {
  color: #ddd;
  cursor: not-allowed;
}
</style>

