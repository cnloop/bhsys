<template>
  <section class="classSetUp">
    <section class="classSetUp-top">
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
    <section class="classSetUp-center">
      <san-class-set-up-table :tableTheadData="tableTheadData" :tableTbodyData="tableTbodyData"></san-class-set-up-table>
    </section>
    <san-class-set-up-add-item :itemInfo="itemInfo" :isShowItemInfo="isShowItemInfo" @sanAddItemCallBack="sanAddItemCallBack"></san-class-set-up-add-item>
  </section>
</template>
<script>
import SanSelect from "@/components/Common/SanSelect";
import SanButton from "@/components/Common/SanButton";
import SanTable from "@/components/Common/SanTable";
import SanClassSetUpTable from "@/components/ItemCom/EnginDesign/SanClassSetUpTable";

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
      tableTheadData: ["类别名称", "所属类别", "操作时间", "操作人", "操作"],
      tableTbodyData: [
        {
          id: "u1",
          className: "施工图纸",
          classNameClass: "设计管理",
          actionDate: "2018-10-20 11:00",
          actionPerson: "张俊"
        },
        {
          id: "u2",
          className: "设计图纸",
          classNameClass: "设计管理",
          actionDate: "2018-10-20 11:00",
          actionPerson: "张俊"
        },
        {
          id: "u3",
          className: "文件资料",
          classNameClass: "文档管理",
          actionDate: "2018-10-20 11:00",
          actionPerson: "张俊"
        },
        {
          id: "u4",
          className: "来往资料",
          classNameClass: "文档管理",
          actionDate: "2018-10-20 11:00",
          actionPerson: "张俊"
        },
        {
          id: "u5",
          className: "计划文件",
          classNameClass: "文档管理",
          actionDate: "2018-10-20 11:00",
          actionPerson: "张俊"
        },
        {
          id: "u6",
          className: "设计变更",
          classNameClass: "设计管理",
          actionDate: "2018-10-20 11:00",
          actionPerson: "张俊"
        },
        {
          id: "u7",
          className: "工程大事记",
          classNameClass: "文档管理",
          actionDate: "2018-10-20 11:00",
          actionPerson: "张俊"
        },
        {
          id: "u8",
          className: "会议纪要",
          classNameClass: "文档管理",
          actionDate: "2018-10-20 11:00",
          actionPerson: "张俊"
        },
        {
          id: "u9",
          className: "设计变更",
          classNameClass: "文档管理",
          actionDate: "2018-10-20 11:00",
          actionPerson: "张俊"
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
    }
  },
  components: {
    SanSelect,
    SanButton,
    SanTable,
    DatePicker,
    Paginate,
    SanClassSetUpTable,
    SanClassSetUpAddItem
  }
};
</script>
<style>
.classSetUp {
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
}
.classSetUp-top {
  position: relative;
  width: 100%;
  font-size: 12px;
  color: #7f7f7f;
  box-sizing: border-box;
}
.classSetUp-top .mx-datepicker {
  width: 180px;
  padding: 0px 8px;
}
.classSetUp-top .mx-input {
  height: 32px;
  font-size: 12px;
}
.classSetUp-top .classSelectedText {
  padding-left: 20px;
  padding-right: 8px;
}
.classSetUp-top .classSelectedOne {
  vertical-align: middle;
}
.classSetUp-top .seatchBtn {
  vertical-align: middle;
  margin: 0px 20px;
}
.classSetUp-top .addBtn {
  vertical-align: middle;
}

.classSetUp-center {
  width: 100%;
  margin-top: 20px;
}

.classSetUp-bottom {
  position: relative;
  height: 100px;
}
.classSetUp-bottom-wrap {
  right: 0px;
}

.classSetUp-bottom-wrap .page-item {
  float: left;
  width: 60px;
  height: 40px;
  line-height: 40px;
  box-sizing: content-box;
}

.classSetUp-bottom-wrap .page-link-item {
  height: 100%;
  display: inline-block;
  width: 100%;
  text-align: center;
  border: 1px solid #8fb3d0;
  border-right: none;
  color: #a9a1a1;
}

.classSetUp-bottom-wrap .prev-item {
  float: left;
  height: 40px;
  line-height: 40px;
}
.classSetUp-bottom-wrap .prev-link-item {
  height: 100%;
  display: inline-block;
  padding: 0 10px;
  text-align: center;
  border: 1px solid #8fb3d0;
  color: #a9a1a1;
  border-right: none;
}
.classSetUp-bottom-wrap .next-item {
  display: inline-block;
  height: 40px;
  line-height: 40px;
}
.classSetUp-bottom-wrap .next-link-item {
  height: 100%;
  display: inline-block;
  padding: 0 10px;
  text-align: center;
  color: #a9a1a1;
  border: 1px solid #8fb3d0;
}

.classSetUp-bottom-wrap .active-item > .page-link-item {
  color: #fff !important;
  background-color: #2666e8;
}
.classSetUp-bottom-wrap .active-item > .page-link-item {
  /* color: #337ab7; */
  color: red;
}
.classSetUp-bottom-wrap .disabled-item {
  cursor: not-allowed;
}
.classSetUp-bottom-wrap .disabled-item > .prev-link-item {
  color: #ddd;
  cursor: not-allowed;
}
.classSetUp-bottom-wrap .disabled-item > .next-link-item {
  color: #ddd;
  cursor: not-allowed;
}
</style>
