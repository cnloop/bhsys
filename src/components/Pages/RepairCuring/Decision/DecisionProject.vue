<template>
  <section class="decisionProject">
    <section class="decisionProject-top">
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
    <section class="decisionProject-center">
      <decision-table :tableTheadData="tableTheadData" :tableTbodyData="tableTbodyData"></decision-table>
    </section>
    <section class="decisionProject-bottom">
      <div class="decisionProject-bottom-wrap tb-center">
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
import DecisionTable from "@/components/ItemCom/RepairCuring/DecisionTable";
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
        "维护工程",
        "维护级别",
        "预算",
        "上传时间",
        "上传人",
        "审核意见",
        "审核人",
        "操作"
      ],
      tableTbodyData: [
        {
          id: "u1",
          projectName: "唐河地下涵",
          grade: "大修",
          budget: "5000",
          uploadDate: "2018-10-20 12:00",
          uploadPerson: "王强",
          checkResult: "通过",
          checkPerson: "张俊"
        },
        {
          id: "u2",
          projectName: "宿县枢纽",
          grade: "大修",
          budget: "4560",
          uploadDate: "2018-10-19 12:00",
          uploadPerson: "石强",
          checkResult: "未通过",
          checkPerson: "张俊"
        },
        {
          id: "u3",
          projectName: "新北沱河地下涵",
          grade: "日常维护",
          budget: "5946",
          uploadDate: "2018-10-18 12:00",
          uploadPerson: "张群",
          checkResult: "通过",
          checkPerson: "李艳"
        },
        {
          id: "u4",
          projectName: "符离闸",
          grade: "日常维护",
          budget: "12354",
          uploadDate: "2018-10-16 12:00",
          uploadPerson: "张群",
          checkResult: "通过",
          checkPerson: "李艳"
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
    DatePicker,
    Paginate,
    DecisionTable,
    SanClassSetUpAddItem
  }
};
</script>
<style>
.decisionProject {
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
}
.decisionProject-top {
  position: relative;
  width: 100%;
  font-size: 12px;
  color: #7f7f7f;
  box-sizing: border-box;
}
.decisionProject-top .mx-datepicker {
  width: 180px;
  padding: 0px 8px;
}
.decisionProject-top .mx-input {
  height: 32px;
  font-size: 12px;
}
.decisionProject-top .classSelectedText {
  padding-left: 20px;
  padding-right: 8px;
}
.decisionProject-top .classSelectedOne {
  vertical-align: middle;
}
.decisionProject-top .seatchBtn {
  vertical-align: middle;
  margin: 0px 20px;
}
.decisionProject-top .addBtn {
  vertical-align: middle;
}

.decisionProject-center {
  width: 100%;
  margin-top: 20px;
}
.decisionProject-bottom {
  position: relative;
  height: 100px;
}
.decisionProject-bottom-wrap {
  right: 0px;
}

.decisionProject-bottom-wrap .page-item {
  float: left;
  width: 60px;
  height: 40px;
  line-height: 40px;
  box-sizing: content-box;
}

.decisionProject-bottom-wrap .page-link-item {
  height: 100%;
  display: inline-block;
  width: 100%;
  text-align: center;
  border: 1px solid #8fb3d0;
  border-right: none;
  color: #a9a1a1;
}

.decisionProject-bottom-wrap .prev-item {
  float: left;
  height: 40px;
  line-height: 40px;
}
.decisionProject-bottom-wrap .prev-link-item {
  height: 100%;
  display: inline-block;
  padding: 0 10px;
  text-align: center;
  border: 1px solid #8fb3d0;
  color: #a9a1a1;
  border-right: none;
}
.decisionProject-bottom-wrap .next-item {
  display: inline-block;
  height: 40px;
  line-height: 40px;
}
.decisionProject-bottom-wrap .next-link-item {
  height: 100%;
  display: inline-block;
  padding: 0 10px;
  text-align: center;
  color: #a9a1a1;
  border: 1px solid #8fb3d0;
}

.decisionProject-bottom-wrap .active-item > .page-link-item {
  color: #fff !important;
  background-color: #2666e8;
}
.decisionProject-bottom-wrap .active-item > .page-link-item {
  /* color: #337ab7; */
  color: red;
}
.decisionProject-bottom-wrap .disabled-item {
  cursor: not-allowed;
}
.decisionProject-bottom-wrap .disabled-item > .prev-link-item {
  color: #ddd;
  cursor: not-allowed;
}
.decisionProject-bottom-wrap .disabled-item > .next-link-item {
  color: #ddd;
  cursor: not-allowed;
}
.decisionProject-bottom {
  position: relative;
  height: 100px;
}
.decisionProject-bottom-wrap {
  right: 0px;
}

.decisionProject-bottom-wrap .page-item {
  float: left;
  width: 60px;
  height: 40px;
  line-height: 40px;
  box-sizing: content-box;
}

.decisionProject-bottom-wrap .page-link-item {
  height: 100%;
  display: inline-block;
  width: 100%;
  text-align: center;
  border: 1px solid #8fb3d0;
  border-right: none;
  color: #a9a1a1;
}

.decisionProject-bottom-wrap .prev-item {
  float: left;
  height: 40px;
  line-height: 40px;
}
.decisionProject-bottom-wrap .prev-link-item {
  height: 100%;
  display: inline-block;
  padding: 0 10px;
  text-align: center;
  border: 1px solid #8fb3d0;
  color: #a9a1a1;
  border-right: none;
}
.decisionProject-bottom-wrap .next-item {
  display: inline-block;
  height: 40px;
  line-height: 40px;
}
.decisionProject-bottom-wrap .next-link-item {
  height: 100%;
  display: inline-block;
  padding: 0 10px;
  text-align: center;
  color: #a9a1a1;
  border: 1px solid #8fb3d0;
}

.decisionProject-bottom-wrap .active-item > .page-link-item {
  color: #fff !important;
  background-color: #2666e8;
}
.decisionProject-bottom-wrap .active-item > .page-link-item {
  /* color: #337ab7; */
  color: red;
}
.decisionProject-bottom-wrap .disabled-item {
  cursor: not-allowed;
}
.decisionProject-bottom-wrap .disabled-item > .prev-link-item {
  color: #ddd;
  cursor: not-allowed;
}
.decisionProject-bottom-wrap .disabled-item > .next-link-item {
  color: #ddd;
  cursor: not-allowed;
}
</style>
