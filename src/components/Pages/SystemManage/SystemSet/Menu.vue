<template>
  <section class="MenuSystem">
    <section class="MenuSystem-top">
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
    <section class="MenuSystem-center">
      <menu-table :tableTheadData="tableTheadData" :tableTbodyData="tableTbodyData"></menu-table>
    </section>
    <section class="MenuSystem-bottom">
      <div class="MenuSystem-bottom-wrap tb-center">
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
import MenuTable from "@/components/ItemCom/SystemManage/MenuTable";

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
      tableTheadData: ["名称", "链接", "排序", "可见", "权限标识", "操作"],
      tableTbodyData: [
        {
          id: "u1",
          name: "总体概况",
          link: "/homePage/index/general",
          sort: 0,
          show: "显示",
          auth: ""
        },
        {
          id: "u2",
          name: "系统首页",
          link: "/homePage/index/list",
          sort: 1,
          show: "显示",
          auth: ""
        },
        {
          id: "u3",
          name: "一张图",
          link: "/map/mapData",
          sort: 2,
          show: "显示",
          auth: ""
        },
        {
          id: "u4",
          name: "我的信息",
          link: "",
          sort: 3,
          show: "隐藏",
          auth: ""
        },
        {
          id: "u5",
          name: "设备管理",
          link: "",
          sort: 4,
          show: "显示",
          auth: ""
        },
        {
          id: "u6",
          name: "工作台",
          link: "",
          sort: 5,
          show: "显示",
          auth: ""
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
    MenuTable,
    SanClassSetUpAddItem
  }
};
</script>
<style>
.MenuSystem {
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
}
.MenuSystem-top {
  position: relative;
  width: 100%;
  font-size: 12px;
  color: #7f7f7f;
  box-sizing: border-box;
}
.MenuSystem-top .mx-datepicker {
  width: 180px;
  padding: 0px 8px;
}
.MenuSystem-top .mx-input {
  height: 32px;
  font-size: 12px;
}
.MenuSystem-top .classSelectedText {
  padding-left: 20px;
  padding-right: 8px;
}
.MenuSystem-top .classSelectedOne {
  vertical-align: middle;
}
.MenuSystem-top .seatchBtn {
  vertical-align: middle;
  margin: 0px 20px;
}
.MenuSystem-top .addBtn {
  vertical-align: middle;
}

.MenuSystem-center {
  width: 100%;
  margin-top: 20px;
}
.MenuSystem-bottom {
  position: relative;
  height: 100px;
}
.MenuSystem-bottom-wrap {
  right: 0px;
}

.MenuSystem-bottom-wrap .page-item {
  float: left;
  width: 60px;
  height: 40px;
  line-height: 40px;
  box-sizing: content-box;
}

.MenuSystem-bottom-wrap .page-link-item {
  height: 100%;
  display: inline-block;
  width: 100%;
  text-align: center;
  border: 1px solid #8fb3d0;
  border-right: none;
  color: #a9a1a1;
}

.MenuSystem-bottom-wrap .prev-item {
  float: left;
  height: 40px;
  line-height: 40px;
}
.MenuSystem-bottom-wrap .prev-link-item {
  height: 100%;
  display: inline-block;
  padding: 0 10px;
  text-align: center;
  border: 1px solid #8fb3d0;
  color: #a9a1a1;
  border-right: none;
}
.MenuSystem-bottom-wrap .next-item {
  display: inline-block;
  height: 40px;
  line-height: 40px;
}
.MenuSystem-bottom-wrap .next-link-item {
  height: 100%;
  display: inline-block;
  padding: 0 10px;
  text-align: center;
  color: #a9a1a1;
  border: 1px solid #8fb3d0;
}

.MenuSystem-bottom-wrap .active-item > .page-link-item {
  color: #fff !important;
  background-color: #2666e8;
}
.MenuSystem-bottom-wrap .active-item > .page-link-item {
  /* color: #337ab7; */
  color: red;
}
.MenuSystem-bottom-wrap .disabled-item {
  cursor: not-allowed;
}
.MenuSystem-bottom-wrap .disabled-item > .prev-link-item {
  color: #ddd;
  cursor: not-allowed;
}
.MenuSystem-bottom-wrap .disabled-item > .next-link-item {
  color: #ddd;
  cursor: not-allowed;
}
.MenuSystem-bottom {
  position: relative;
  height: 100px;
}
.MenuSystem-bottom-wrap {
  right: 0px;
}

.MenuSystem-bottom-wrap .page-item {
  float: left;
  width: 60px;
  height: 40px;
  line-height: 40px;
  box-sizing: content-box;
}

.MenuSystem-bottom-wrap .page-link-item {
  height: 100%;
  display: inline-block;
  width: 100%;
  text-align: center;
  border: 1px solid #8fb3d0;
  border-right: none;
  color: #a9a1a1;
}

.MenuSystem-bottom-wrap .prev-item {
  float: left;
  height: 40px;
  line-height: 40px;
}
.MenuSystem-bottom-wrap .prev-link-item {
  height: 100%;
  display: inline-block;
  padding: 0 10px;
  text-align: center;
  border: 1px solid #8fb3d0;
  color: #a9a1a1;
  border-right: none;
}
.MenuSystem-bottom-wrap .next-item {
  display: inline-block;
  height: 40px;
  line-height: 40px;
}
.MenuSystem-bottom-wrap .next-link-item {
  height: 100%;
  display: inline-block;
  padding: 0 10px;
  text-align: center;
  color: #a9a1a1;
  border: 1px solid #8fb3d0;
}

.MenuSystem-bottom-wrap .active-item > .page-link-item {
  color: #fff !important;
  background-color: #2666e8;
}
.MenuSystem-bottom-wrap .active-item > .page-link-item {
  /* color: #337ab7; */
  color: red;
}
.MenuSystem-bottom-wrap .disabled-item {
  cursor: not-allowed;
}
.MenuSystem-bottom-wrap .disabled-item > .prev-link-item {
  color: #ddd;
  cursor: not-allowed;
}
.MenuSystem-bottom-wrap .disabled-item > .next-link-item {
  color: #ddd;
  cursor: not-allowed;
}
</style>

