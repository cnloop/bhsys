<template>
  <section class="makeProject">
    <section class="makeProject-top">
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
    <section class="makeProject-center">
      <make-table :tableTheadData="tableTheadData" :tableTbodyData="tableTbodyData"></make-table>
    </section>
    <section class="makeProject-bottom">
      <div class="makeProject-bottom-wrap tb-center">
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
import MakeTable from "@/components/ItemCom/Emergencies/MakeTable";

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
        "方案名称",
        "方案类型",
        "印发时间",
        "工程",
        "印发（编制）单位",
        "操作"
      ],
      tableTbodyData: [
        {
          id: "u1",
          name: "防汛预案",
          type: "",
          date: "2018-10-20 11:00",
          projectName: "姚楼河闸",
          orgName: "山东税务局"
        },
        {
          id: "u2",
          name: "抗旱预案",
          type: "",
          date: "2018-10-20 11:00",
          projectName: "台儿庄泵站",
          orgName: "山东税务局"
        },
        {
          id: "u3",
          name: "突发事故预案",
          type: "姚楼河闸",
          date: "2018-10-20 11:00",
          projectName: "二级坝泵站",
          orgName: "山东税务局"
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
    MakeTable,
    SanClassSetUpAddItem
  }
};
</script>
<style>
.makeProject {
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
}
.makeProject-top {
  position: relative;
  width: 100%;
  font-size: 12px;
  color: #7f7f7f;
  box-sizing: border-box;
}
.makeProject-top .mx-datepicker {
  width: 180px;
  padding: 0px 8px;
}
.makeProject-top .mx-input {
  height: 32px;
  font-size: 12px;
}
.makeProject-top .classSelectedText {
  padding-left: 20px;
  padding-right: 8px;
}
.makeProject-top .classSelectedOne {
  vertical-align: middle;
}
.makeProject-top .seatchBtn {
  vertical-align: middle;
  margin: 0px 20px;
}
.makeProject-top .addBtn {
  vertical-align: middle;
}

.makeProject-center {
  width: 100%;
  margin-top: 20px;
}
.makeProject-bottom {
  position: relative;
  height: 100px;
}
.makeProject-bottom-wrap {
  right: 0px;
}

.makeProject-bottom-wrap .page-item {
  float: left;
  width: 60px;
  height: 40px;
  line-height: 40px;
  box-sizing: content-box;
}

.makeProject-bottom-wrap .page-link-item {
  height: 100%;
  display: inline-block;
  width: 100%;
  text-align: center;
  border: 1px solid #8fb3d0;
  border-right: none;
  color: #a9a1a1;
}

.makeProject-bottom-wrap .prev-item {
  float: left;
  height: 40px;
  line-height: 40px;
}
.makeProject-bottom-wrap .prev-link-item {
  height: 100%;
  display: inline-block;
  padding: 0 10px;
  text-align: center;
  border: 1px solid #8fb3d0;
  color: #a9a1a1;
  border-right: none;
}
.makeProject-bottom-wrap .next-item {
  display: inline-block;
  height: 40px;
  line-height: 40px;
}
.makeProject-bottom-wrap .next-link-item {
  height: 100%;
  display: inline-block;
  padding: 0 10px;
  text-align: center;
  color: #a9a1a1;
  border: 1px solid #8fb3d0;
}

.makeProject-bottom-wrap .active-item > .page-link-item {
  color: #fff !important;
  background-color: #2666e8;
}
.makeProject-bottom-wrap .active-item > .page-link-item {
  /* color: #337ab7; */
  color: red;
}
.makeProject-bottom-wrap .disabled-item {
  cursor: not-allowed;
}
.makeProject-bottom-wrap .disabled-item > .prev-link-item {
  color: #ddd;
  cursor: not-allowed;
}
.makeProject-bottom-wrap .disabled-item > .next-link-item {
  color: #ddd;
  cursor: not-allowed;
}
.makeProject-bottom {
  position: relative;
  height: 100px;
}
.makeProject-bottom-wrap {
  right: 0px;
}

.makeProject-bottom-wrap .page-item {
  float: left;
  width: 60px;
  height: 40px;
  line-height: 40px;
  box-sizing: content-box;
}

.makeProject-bottom-wrap .page-link-item {
  height: 100%;
  display: inline-block;
  width: 100%;
  text-align: center;
  border: 1px solid #8fb3d0;
  border-right: none;
  color: #a9a1a1;
}

.makeProject-bottom-wrap .prev-item {
  float: left;
  height: 40px;
  line-height: 40px;
}
.makeProject-bottom-wrap .prev-link-item {
  height: 100%;
  display: inline-block;
  padding: 0 10px;
  text-align: center;
  border: 1px solid #8fb3d0;
  color: #a9a1a1;
  border-right: none;
}
.makeProject-bottom-wrap .next-item {
  display: inline-block;
  height: 40px;
  line-height: 40px;
}
.makeProject-bottom-wrap .next-link-item {
  height: 100%;
  display: inline-block;
  padding: 0 10px;
  text-align: center;
  color: #a9a1a1;
  border: 1px solid #8fb3d0;
}

.makeProject-bottom-wrap .active-item > .page-link-item {
  color: #fff !important;
  background-color: #2666e8;
}
.makeProject-bottom-wrap .active-item > .page-link-item {
  /* color: #337ab7; */
  color: red;
}
.makeProject-bottom-wrap .disabled-item {
  cursor: not-allowed;
}
.makeProject-bottom-wrap .disabled-item > .prev-link-item {
  color: #ddd;
  cursor: not-allowed;
}
.makeProject-bottom-wrap .disabled-item > .next-link-item {
  color: #ddd;
  cursor: not-allowed;
}
</style>

