<template>
  <section class="docRepairProject">
    <section class="docRepairProject-top">
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
    <section class="docRepairProject-center">
      <doc-table  :tableTheadData="tableTheadData" :tableTbodyData="tableTbodyData"></doc-table>
    </section>
    <section class="docRepairProject-bottom">
      <div class="docRepairProject-bottom-wrap tb-center">
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
import SanClassSetUpTable from "@/components/ItemCom/EnginDesign/SanClassSetUpTable";
import DocTable from "@/components/ItemCom/RepairCuring/DocTable";


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
        "维护项目",
        "维护设备",
        "文档名称",
        "文档数量",
        "上传时间",
        "上传人",
        "操作"
      ],
      tableTbodyData: [
        {
          id: "u1",
          projectName: "唐河地下涵",
          machine: "叶调机构",
          docName: "叶调机构维护记录文档",
          docCount: 3,
          uploadDate: "2018-10-20 11:00",
          uploadPerson: "王俊"
        },
        {
          id: "u2",
          projectName: "符离闸",
          machine: "励磁系统",
          docName: "励磁系统维护文档",
          docCount: 6,
          uploadDate: "2018-10-20 11:00",
          uploadPerson: "曹成"
        },
        {
          id: "u3",
          projectName: "宿县闸",
          machine: "液压启闭机",
          docName: "液压启闭机维护文档",
          docCount: 1,
          uploadDate: "2018-10-20 11:00",
          uploadPerson: "王俊龙"
        },
        {
          id: "u4",
          projectName: "新北沱河地下涵",
          machine: "分水闸",
          docName: "分水闸维护过程文档",
          docCount: 1,
          uploadDate: "2018-10-20 11:00",
          uploadPerson: "王俊龙"
        },
        {
          id: "u5",
          projectName: "石梁河地下涵",
          machine: "压力传感器",
          docName: "压力传感器维护文档",
          docCount: 3,
          uploadDate: "2018-10-20 11:00",
          uploadPerson: "曹成"
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
    DocTable,
    SanClassSetUpAddItem
  }
};
</script>
<style>
.docRepairProject {
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
}
.docRepairProject-top {
  position: relative;
  width: 100%;
  font-size: 12px;
  color: #7f7f7f;
  box-sizing: border-box;
}
.docRepairProject-top .mx-datepicker {
  width: 180px;
  padding: 0px 8px;
}
.docRepairProject-top .mx-input {
  height: 32px;
  font-size: 12px;
}
.docRepairProject-top .classSelectedText {
  padding-left: 20px;
  padding-right: 8px;
}
.docRepairProject-top .classSelectedOne {
  vertical-align: middle;
}
.docRepairProject-top .seatchBtn {
  vertical-align: middle;
  margin: 0px 20px;
}
.docRepairProject-top .addBtn {
  vertical-align: middle;
}

.docRepairProject-center {
  width: 100%;
  margin-top: 20px;
}
.docRepairProject-bottom {
  position: relative;
  height: 100px;
}
.docRepairProject-bottom-wrap {
  right: 0px;
}

.docRepairProject-bottom-wrap .page-item {
  float: left;
  width: 60px;
  height: 40px;
  line-height: 40px;
  box-sizing: content-box;
}

.docRepairProject-bottom-wrap .page-link-item {
  height: 100%;
  display: inline-block;
  width: 100%;
  text-align: center;
  border: 1px solid #8fb3d0;
  border-right: none;
  color: #a9a1a1;
}

.docRepairProject-bottom-wrap .prev-item {
  float: left;
  height: 40px;
  line-height: 40px;
}
.docRepairProject-bottom-wrap .prev-link-item {
  height: 100%;
  display: inline-block;
  padding: 0 10px;
  text-align: center;
  border: 1px solid #8fb3d0;
  color: #a9a1a1;
  border-right: none;
}
.docRepairProject-bottom-wrap .next-item {
  display: inline-block;
  height: 40px;
  line-height: 40px;
}
.docRepairProject-bottom-wrap .next-link-item {
  height: 100%;
  display: inline-block;
  padding: 0 10px;
  text-align: center;
  color: #a9a1a1;
  border: 1px solid #8fb3d0;
}

.docRepairProject-bottom-wrap .active-item > .page-link-item {
  color: #fff !important;
  background-color: #2666e8;
}
.docRepairProject-bottom-wrap .active-item > .page-link-item {
  /* color: #337ab7; */
  color: red;
}
.docRepairProject-bottom-wrap .disabled-item {
  cursor: not-allowed;
}
.docRepairProject-bottom-wrap .disabled-item > .prev-link-item {
  color: #ddd;
  cursor: not-allowed;
}
.docRepairProject-bottom-wrap .disabled-item > .next-link-item {
  color: #ddd;
  cursor: not-allowed;
}
.docRepairProject-bottom {
  position: relative;
  height: 100px;
}
.docRepairProject-bottom-wrap {
  right: 0px;
}

.docRepairProject-bottom-wrap .page-item {
  float: left;
  width: 60px;
  height: 40px;
  line-height: 40px;
  box-sizing: content-box;
}

.docRepairProject-bottom-wrap .page-link-item {
  height: 100%;
  display: inline-block;
  width: 100%;
  text-align: center;
  border: 1px solid #8fb3d0;
  border-right: none;
  color: #a9a1a1;
}

.docRepairProject-bottom-wrap .prev-item {
  float: left;
  height: 40px;
  line-height: 40px;
}
.docRepairProject-bottom-wrap .prev-link-item {
  height: 100%;
  display: inline-block;
  padding: 0 10px;
  text-align: center;
  border: 1px solid #8fb3d0;
  color: #a9a1a1;
  border-right: none;
}
.docRepairProject-bottom-wrap .next-item {
  display: inline-block;
  height: 40px;
  line-height: 40px;
}
.docRepairProject-bottom-wrap .next-link-item {
  height: 100%;
  display: inline-block;
  padding: 0 10px;
  text-align: center;
  color: #a9a1a1;
  border: 1px solid #8fb3d0;
}

.docRepairProject-bottom-wrap .active-item > .page-link-item {
  color: #fff !important;
  background-color: #2666e8;
}
.docRepairProject-bottom-wrap .active-item > .page-link-item {
  /* color: #337ab7; */
  color: red;
}
.docRepairProject-bottom-wrap .disabled-item {
  cursor: not-allowed;
}
.docRepairProject-bottom-wrap .disabled-item > .prev-link-item {
  color: #ddd;
  cursor: not-allowed;
}
.docRepairProject-bottom-wrap .disabled-item > .next-link-item {
  color: #ddd;
  cursor: not-allowed;
}
</style>
