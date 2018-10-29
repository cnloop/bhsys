<template>
  <section class="checkProject">
    <section class="checkProject-top">
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
    <section class="checkProject-center">
      <img :src="require('@/assets/check.jpg')" alt="">
      <!-- <check-table :tableTheadData="tableTheadData" :tableTbodyData="tableTbodyData"></check-table> -->
    </section>
    <section class="checkProject-bottom">
      <div class="checkProject-bottom-wrap tb-center">
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
import CheckTable from "@/components/ItemCom/RepairCuring/CheckTable";

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
        "维修单号",
        "维修设备",
        "维修级别",
        "报修时间",
        "归档状态",
        "操作"
      ],
      tableTbodyData: [
        {
          id: "u1",
          number: "WXDH-2303-9807",
          machine: "叶调机构",
          grade: "小修",
          reportDate: "2018-10-20 12:00",
          state: "未归档"
        },
        {
          id: "u2",
          number: "WXDH-2303-9806",
          machine: "励磁系统",
          grade: "小修",
          reportDate: "2018-10-20 12:00",
          state: "未归档"
        },
        {
          id: "u3",
          number: "WXDH-2303-9805",
          machine: "液压启闭机",
          grade: "大修",
          reportDate: "2018-10-29 12:00",
          state: "已归档"
        },
        {
          id: "u4",
          number: "WXDH-2303-9804",
          machine: "分水闸",
          grade: "专项",
          reportDate: "2018-10-29 12:00",
          state: "已归档"
        },
        {
          id: "u5",
          number: "WXDH-2303-9803",
          machine: "压力传感器",
          grade: "小修",
          reportDate: "2018-10-29 12:00",
          state: "已归档"
        },
        {
          id: "u6",
          number: "WXDH-2303-9802",
          machine: "出口液压闸门",
          grade: "小修",
          reportDate: "2018-10-29 12:00",
          state: "已归档"
        },
        {
          id: "u7",
          number: "WXDH-2303-9801",
          machine: "脚踏阀",
          grade: "小修",
          reportDate: "2018-10-29 12:00",
          state: "已归档"
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
    CheckTable,
    SanClassSetUpAddItem
  }
};
</script>
<style>
.checkProject {
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
}
.checkProject-top {
  position: relative;
  width: 100%;
  font-size: 12px;
  color: #7f7f7f;
  box-sizing: border-box;
}
.checkProject-top .mx-datepicker {
  width: 180px;
  padding: 0px 8px;
}
.checkProject-top .mx-input {
  height: 32px;
  font-size: 12px;
}
.checkProject-top .classSelectedText {
  padding-left: 20px;
  padding-right: 8px;
}
.checkProject-top .classSelectedOne {
  vertical-align: middle;
}
.checkProject-top .seatchBtn {
  vertical-align: middle;
  margin: 0px 20px;
}
.checkProject-top .addBtn {
  vertical-align: middle;
}

.checkProject-center {
  width: 100%;
  margin-top: 20px;
}
.checkProject-center > img {
  width: 100%;
}
.checkProject-bottom {
  position: relative;
  height: 100px;
}
.checkProject-bottom-wrap {
  right: 0px;
}

.checkProject-bottom-wrap .page-item {
  float: left;
  width: 60px;
  height: 40px;
  line-height: 40px;
  box-sizing: content-box;
}

.checkProject-bottom-wrap .page-link-item {
  height: 100%;
  display: inline-block;
  width: 100%;
  text-align: center;
  border: 1px solid #8fb3d0;
  border-right: none;
  color: #a9a1a1;
}

.checkProject-bottom-wrap .prev-item {
  float: left;
  height: 40px;
  line-height: 40px;
}
.checkProject-bottom-wrap .prev-link-item {
  height: 100%;
  display: inline-block;
  padding: 0 10px;
  text-align: center;
  border: 1px solid #8fb3d0;
  color: #a9a1a1;
  border-right: none;
}
.checkProject-bottom-wrap .next-item {
  display: inline-block;
  height: 40px;
  line-height: 40px;
}
.checkProject-bottom-wrap .next-link-item {
  height: 100%;
  display: inline-block;
  padding: 0 10px;
  text-align: center;
  color: #a9a1a1;
  border: 1px solid #8fb3d0;
}

.checkProject-bottom-wrap .active-item > .page-link-item {
  color: #fff !important;
  background-color: #2666e8;
}
.checkProject-bottom-wrap .active-item > .page-link-item {
  /* color: #337ab7; */
  color: red;
}
.checkProject-bottom-wrap .disabled-item {
  cursor: not-allowed;
}
.checkProject-bottom-wrap .disabled-item > .prev-link-item {
  color: #ddd;
  cursor: not-allowed;
}
.checkProject-bottom-wrap .disabled-item > .next-link-item {
  color: #ddd;
  cursor: not-allowed;
}
.checkProject-bottom {
  position: relative;
  height: 100px;
}
.checkProject-bottom-wrap {
  right: 0px;
}

.checkProject-bottom-wrap .page-item {
  float: left;
  width: 60px;
  height: 40px;
  line-height: 40px;
  box-sizing: content-box;
}

.checkProject-bottom-wrap .page-link-item {
  height: 100%;
  display: inline-block;
  width: 100%;
  text-align: center;
  border: 1px solid #8fb3d0;
  border-right: none;
  color: #a9a1a1;
}

.checkProject-bottom-wrap .prev-item {
  float: left;
  height: 40px;
  line-height: 40px;
}
.checkProject-bottom-wrap .prev-link-item {
  height: 100%;
  display: inline-block;
  padding: 0 10px;
  text-align: center;
  border: 1px solid #8fb3d0;
  color: #a9a1a1;
  border-right: none;
}
.checkProject-bottom-wrap .next-item {
  display: inline-block;
  height: 40px;
  line-height: 40px;
}
.checkProject-bottom-wrap .next-link-item {
  height: 100%;
  display: inline-block;
  padding: 0 10px;
  text-align: center;
  color: #a9a1a1;
  border: 1px solid #8fb3d0;
}

.checkProject-bottom-wrap .active-item > .page-link-item {
  color: #fff !important;
  background-color: #2666e8;
}
.checkProject-bottom-wrap .active-item > .page-link-item {
  /* color: #337ab7; */
  color: red;
}
.checkProject-bottom-wrap .disabled-item {
  cursor: not-allowed;
}
.checkProject-bottom-wrap .disabled-item > .prev-link-item {
  color: #ddd;
  cursor: not-allowed;
}
.checkProject-bottom-wrap .disabled-item > .next-link-item {
  color: #ddd;
  cursor: not-allowed;
}
</style>
