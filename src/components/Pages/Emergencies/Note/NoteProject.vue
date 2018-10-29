<template>
  <section class="NoteProject">
    <section class="NoteProject-top">
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
    <section class="NoteProject-center">
      <note-table :tableTheadData="tableTheadData" :tableTbodyData="tableTbodyData"></note-table>
    </section>
    <section class="NoteProject-bottom">
      <div class="NoteProject-bottom-wrap tb-center">
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
import NoteTable from "@/components/ItemCom/Emergencies/NoteTable";

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
        "工程名称",
        "突发事件",
        "实施方案",
        "处理情况",
        "上传时间",
        "上传人",
        "操作"
      ],
      tableTbodyData: [
        {
          id: "u1",
          projectName: "唐河地下涵",
          emergencies: "防洪抗灾",
          planName: "防洪预案计划实稿",
          result: "进行中",
          uploadDate: "208-10-20 12:00",
          uploadPerson: "张俊"
        },
        {
          id: "u2",
          projectName: "唐河地下涵",
          emergencies: "防洪抗灾",
          planName: "防洪预案计划实稿",
          result: "完成",
          uploadDate: "208-10-20 12:00",
          uploadPerson: "张俊"
        },
        {
          id: "u3",
          projectName: "唐河地下涵",
          emergencies: "抗旱",
          planName: "抗旱预案计划实稿1号",
          result: "完成",
          uploadDate: "208-10-20 12:00",
          uploadPerson: "张俊"
        },
        {
          id: "u4",
          projectName: "唐河地下涵",
          emergencies: "抗旱",
          planName: "抗旱预案计划实稿2号",
          result: "完成",
          uploadDate: "208-10-20 12:00",
          uploadPerson: "张俊"
        },
        {
          id: "u5",
          projectName: "唐河地下涵",
          emergencies: "抗旱",
          planName: "抗旱预案计划实稿3号",
          result: "完成",
          uploadDate: "208-10-20 12:00",
          uploadPerson: "张俊"
        },
        {
          id: "u6",
          projectName: "唐河地下涵",
          emergencies: "抗旱",
          planName: "抗旱预案计划实稿4号",
          result: "完成",
          uploadDate: "208-10-20 12:00",
          uploadPerson: "张俊"
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
    NoteTable,
    SanClassSetUpAddItem
  }
};
</script>
<style>
.NoteProject {
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
}
.NoteProject-top {
  position: relative;
  width: 100%;
  font-size: 12px;
  color: #7f7f7f;
  box-sizing: border-box;
}
.NoteProject-top .mx-datepicker {
  width: 180px;
  padding: 0px 8px;
}
.NoteProject-top .mx-input {
  height: 32px;
  font-size: 12px;
}
.NoteProject-top .classSelectedText {
  padding-left: 20px;
  padding-right: 8px;
}
.NoteProject-top .classSelectedOne {
  vertical-align: middle;
}
.NoteProject-top .seatchBtn {
  vertical-align: middle;
  margin: 0px 20px;
}
.NoteProject-top .addBtn {
  vertical-align: middle;
}

.NoteProject-center {
  width: 100%;
  margin-top: 20px;
}
.NoteProject-bottom {
  position: relative;
  height: 100px;
}
.NoteProject-bottom-wrap {
  right: 0px;
}

.NoteProject-bottom-wrap .page-item {
  float: left;
  width: 60px;
  height: 40px;
  line-height: 40px;
  box-sizing: content-box;
}

.NoteProject-bottom-wrap .page-link-item {
  height: 100%;
  display: inline-block;
  width: 100%;
  text-align: center;
  border: 1px solid #8fb3d0;
  border-right: none;
  color: #a9a1a1;
}

.NoteProject-bottom-wrap .prev-item {
  float: left;
  height: 40px;
  line-height: 40px;
}
.NoteProject-bottom-wrap .prev-link-item {
  height: 100%;
  display: inline-block;
  padding: 0 10px;
  text-align: center;
  border: 1px solid #8fb3d0;
  color: #a9a1a1;
  border-right: none;
}
.NoteProject-bottom-wrap .next-item {
  display: inline-block;
  height: 40px;
  line-height: 40px;
}
.NoteProject-bottom-wrap .next-link-item {
  height: 100%;
  display: inline-block;
  padding: 0 10px;
  text-align: center;
  color: #a9a1a1;
  border: 1px solid #8fb3d0;
}

.NoteProject-bottom-wrap .active-item > .page-link-item {
  color: #fff !important;
  background-color: #2666e8;
}
.NoteProject-bottom-wrap .active-item > .page-link-item {
  /* color: #337ab7; */
  color: red;
}
.NoteProject-bottom-wrap .disabled-item {
  cursor: not-allowed;
}
.NoteProject-bottom-wrap .disabled-item > .prev-link-item {
  color: #ddd;
  cursor: not-allowed;
}
.NoteProject-bottom-wrap .disabled-item > .next-link-item {
  color: #ddd;
  cursor: not-allowed;
}
.NoteProject-bottom {
  position: relative;
  height: 100px;
}
.NoteProject-bottom-wrap {
  right: 0px;
}

.NoteProject-bottom-wrap .page-item {
  float: left;
  width: 60px;
  height: 40px;
  line-height: 40px;
  box-sizing: content-box;
}

.NoteProject-bottom-wrap .page-link-item {
  height: 100%;
  display: inline-block;
  width: 100%;
  text-align: center;
  border: 1px solid #8fb3d0;
  border-right: none;
  color: #a9a1a1;
}

.NoteProject-bottom-wrap .prev-item {
  float: left;
  height: 40px;
  line-height: 40px;
}
.NoteProject-bottom-wrap .prev-link-item {
  height: 100%;
  display: inline-block;
  padding: 0 10px;
  text-align: center;
  border: 1px solid #8fb3d0;
  color: #a9a1a1;
  border-right: none;
}
.NoteProject-bottom-wrap .next-item {
  display: inline-block;
  height: 40px;
  line-height: 40px;
}
.NoteProject-bottom-wrap .next-link-item {
  height: 100%;
  display: inline-block;
  padding: 0 10px;
  text-align: center;
  color: #a9a1a1;
  border: 1px solid #8fb3d0;
}

.NoteProject-bottom-wrap .active-item > .page-link-item {
  color: #fff !important;
  background-color: #2666e8;
}
.NoteProject-bottom-wrap .active-item > .page-link-item {
  /* color: #337ab7; */
  color: red;
}
.NoteProject-bottom-wrap .disabled-item {
  cursor: not-allowed;
}
.NoteProject-bottom-wrap .disabled-item > .prev-link-item {
  color: #ddd;
  cursor: not-allowed;
}
.NoteProject-bottom-wrap .disabled-item > .next-link-item {
  color: #ddd;
  cursor: not-allowed;
}
</style>
