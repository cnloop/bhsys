<template>
  <section class="progressProject">
    <section class="progressProject-top">
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
    <section class="progressProject-center">
      <progress-table :tableTheadData="tableTheadData" :tableTbodyData="tableTbodyData"></progress-table>
    </section>
    <section class="progressProject-bottom">
      <div class="progressProject-bottom-wrap tb-center">
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

import ProgressTable from "@/components/ItemCom/RepairCuring/ProgressTable";


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
        "维修进度",
        "报修时间",
        "报修人",
        "维修状态",
        "操作"
      ],
      tableTbodyData: [
        {
          id: "u1",
          number: "WXDH-2303-9807",
          machine: "叶调机构",
          grade: "小修",
          progress: "0%",
          reportDate: "2018-10-20 11:00",
          reportPerson: "王俊龙",
          state: "未开始"
        },
        {
          id: "u2",
          number: "WXDH-2303-9806",
          machine: "励磁系统",
          grade: "小修",
          progress: "20%",
          reportDate: "2018-10-20 11:00",
          reportPerson: "曹成",
          state: "进行中"
        },
        {
          id: "u3",
          number: "WXDH-2303-9805",
          machine: "液压启闭机",
          grade: "大修",
          progress: "60%",
          reportDate: "2018-10-20 11:00",
          reportPerson: "王俊龙",
          state: "已完成"
        },
        {
          id: "u4",
          number: "WXDH-2303-9804",
          machine: "分水闸",
          grade: "专项",
          progress: "100%",
          reportDate: "2018-10-20 11:00",
          reportPerson: "王俊龙",
          state: "已完成"
        },
        {
          id: "u5",
          number: "WXDH-2303-9803",
          machine: "压力传感器",
          grade: "专项",
          progress: "100%",
          reportDate: "2018-10-20 11:00",
          reportPerson: "王俊龙",
          state: "已完成"
        },
        {
          id: "u6",
          number: "WXDH-2303-9803",
          machine: "出口液压闸门",
          grade: "专项",
          progress: "100%",
          reportDate: "2018-10-20 11:00",
          reportPerson: "王俊龙",
          state: "已完成"
        },
        {
          id: "u7",
          number: "WXDH-2303-9803",
          machine: "脚踏阀",
          grade: "专项",
          progress: "100%",
          reportDate: "2018-10-20 11:00",
          reportPerson: "曹成",
          state: "已完成"
        },
        {
          id: "u8",
          number: "WXDH-2303-9803",
          machine: "电压表",
          grade: "专项",
          progress: "100%",
          reportDate: "2018-10-20 11:00",
          reportPerson: "曹成",
          state: "已完成"
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
    ProgressTable,
    SanClassSetUpAddItem
  }
};
</script>
<style>
.progressProject {
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
}
.progressProject-top {
  position: relative;
  width: 100%;
  font-size: 12px;
  color: #7f7f7f;
  box-sizing: border-box;
}
.progressProject-top .mx-datepicker {
  width: 180px;
  padding: 0px 8px;
}
.progressProject-top .mx-input {
  height: 32px;
  font-size: 12px;
}
.progressProject-top .classSelectedText {
  padding-left: 20px;
  padding-right: 8px;
}
.progressProject-top .classSelectedOne {
  vertical-align: middle;
}
.progressProject-top .seatchBtn {
  vertical-align: middle;
  margin: 0px 20px;
}
.progressProject-top .addBtn {
  vertical-align: middle;
}

.progressProject-center {
  width: 100%;
  margin-top: 20px;
}
.progressProject-bottom {
  position: relative;
  height: 100px;
}
.progressProject-bottom-wrap {
  right: 0px;
}

.progressProject-bottom-wrap .page-item {
  float: left;
  width: 60px;
  height: 40px;
  line-height: 40px;
  box-sizing: content-box;
}

.progressProject-bottom-wrap .page-link-item {
  height: 100%;
  display: inline-block;
  width: 100%;
  text-align: center;
  border: 1px solid #8fb3d0;
  border-right: none;
  color: #a9a1a1;
}

.progressProject-bottom-wrap .prev-item {
  float: left;
  height: 40px;
  line-height: 40px;
}
.progressProject-bottom-wrap .prev-link-item {
  height: 100%;
  display: inline-block;
  padding: 0 10px;
  text-align: center;
  border: 1px solid #8fb3d0;
  color: #a9a1a1;
  border-right: none;
}
.progressProject-bottom-wrap .next-item {
  display: inline-block;
  height: 40px;
  line-height: 40px;
}
.progressProject-bottom-wrap .next-link-item {
  height: 100%;
  display: inline-block;
  padding: 0 10px;
  text-align: center;
  color: #a9a1a1;
  border: 1px solid #8fb3d0;
}

.progressProject-bottom-wrap .active-item > .page-link-item {
  color: #fff !important;
  background-color: #2666e8;
}
.progressProject-bottom-wrap .active-item > .page-link-item {
  /* color: #337ab7; */
  color: red;
}
.progressProject-bottom-wrap .disabled-item {
  cursor: not-allowed;
}
.progressProject-bottom-wrap .disabled-item > .prev-link-item {
  color: #ddd;
  cursor: not-allowed;
}
.progressProject-bottom-wrap .disabled-item > .next-link-item {
  color: #ddd;
  cursor: not-allowed;
}
.progressProject-bottom {
  position: relative;
  height: 100px;
}
.progressProject-bottom-wrap {
  right: 0px;
}

.progressProject-bottom-wrap .page-item {
  float: left;
  width: 60px;
  height: 40px;
  line-height: 40px;
  box-sizing: content-box;
}

.progressProject-bottom-wrap .page-link-item {
  height: 100%;
  display: inline-block;
  width: 100%;
  text-align: center;
  border: 1px solid #8fb3d0;
  border-right: none;
  color: #a9a1a1;
}

.progressProject-bottom-wrap .prev-item {
  float: left;
  height: 40px;
  line-height: 40px;
}
.progressProject-bottom-wrap .prev-link-item {
  height: 100%;
  display: inline-block;
  padding: 0 10px;
  text-align: center;
  border: 1px solid #8fb3d0;
  color: #a9a1a1;
  border-right: none;
}
.progressProject-bottom-wrap .next-item {
  display: inline-block;
  height: 40px;
  line-height: 40px;
}
.progressProject-bottom-wrap .next-link-item {
  height: 100%;
  display: inline-block;
  padding: 0 10px;
  text-align: center;
  color: #a9a1a1;
  border: 1px solid #8fb3d0;
}

.progressProject-bottom-wrap .active-item > .page-link-item {
  color: #fff !important;
  background-color: #2666e8;
}
.progressProject-bottom-wrap .active-item > .page-link-item {
  /* color: #337ab7; */
  color: red;
}
.progressProject-bottom-wrap .disabled-item {
  cursor: not-allowed;
}
.progressProject-bottom-wrap .disabled-item > .prev-link-item {
  color: #ddd;
  cursor: not-allowed;
}
.progressProject-bottom-wrap .disabled-item > .next-link-item {
  color: #ddd;
  cursor: not-allowed;
}
</style>
