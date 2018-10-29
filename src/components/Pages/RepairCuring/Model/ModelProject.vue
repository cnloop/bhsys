<template>
  <section class="modelProject">
    <section class="modelProject-top">
      <span class="descSpan">工作摘要：</span>
      <san-input></san-input>
      <span class="descSpan">故障摘要：</span>
      <san-input></san-input>
      <san-button class="searchBtn">
        <i slot="icon" class="iconfont">&#xeef7;</i>查询
      </san-button>
      <san-button @click.stop.native="addClass" class="addBtn">
        <i slot="icon" class="iconfont">&#xe602;</i>添加
      </san-button>
    </section>
    <section class="modelProject-center">
      <model-table :tableTheadData="tableTheadData" :tableTbodyData="tableTbodyData"></model-table>
    </section>
    <section class="modelProject-bottom">
      <div class="modelProject-bottom-wrap tb-center">
        <paginate :page-count="currentTotal" v-model="currentPage" :page-range="3" :margin-pages="2" :click-handler="paginateCallback" :prev-text="'上一页'" :next-text="'下一页'" :prev-class="'prev-item'" :prev-link-class="'prev-link-item'" :next-class="'next-item'" :next-link-class="'next-link-item'" :container-class="'pagination'" :page-class="'page-item'" :page-link-class="'page-link-item'" :active-class="'active-item'" :disabled-class="'disabled-item'">
        </paginate>
      </div>
    </section>
    <model-add-item :itemInfo="itemInfo" :isShowItemInfo="isShowItemInfo" @sanAddItemCallBack="sanAddItemCallBack"></model-add-item>
  </section>
</template>
<script>
import SanSelect from "@/components/Common/SanSelect";
import SanInput from "@/components/Common/SanInput";
import SanButton from "@/components/Common/SanButton";
import SanTable from "@/components/Common/SanTable";

import ModelAddItem from "@/components/ItemCom/RepairCuring/ModelAddItem";
import ModelTable from "@/components/ItemCom/RepairCuring/ModelTable";

import Paginate from "vuejs-paginate";
export default {
  data() {
    return {
      timeStart: "",
      timeEnd: "",
      classData: ["施工图", "设计图纸", "竣工图纸"],
      classSelectedOne: "请选择类别",
      tableTheadData: [
        "设备类型",
        "维修级别",
        "工作摘要",
        "工作描述",
        "故障摘要",
        "故障描述",
        "计划摘要",
        "计划描述",
        "操作"
      ],
      tableTbodyData: [
        {
          id: "u1",
          className: "机械",
          grade: "大修",
          summary: "大修",
          desc: "测试",
          trouble: "检车网络故障",
          troubleDesc: "测试",
          plan: "通讯",
          planDesc: "修理通讯故障"
        },
        {
          id: "u2",
          className: "电气",
          grade: "大修",
          summary: "大修",
          desc: "测试",
          trouble: "检车网络故障",
          troubleDesc: "测试",
          plan: "通讯",
          planDesc: "修理通讯故障"
        },
        {
          id: "u3",
          className: "机械",
          grade: "大修",
          summary: "大修",
          desc: "测试",
          trouble: "检车网络故障",
          troubleDesc: "测试",
          plan: "通讯",
          planDesc: "修理通讯故障"
        },
        {
          id: "u4",
          className: "机械",
          grade: "大修",
          summary: "大修",
          desc: "测试",
          trouble: "检车网络故障",
          troubleDesc: "测试",
          plan: "通讯",
          planDesc: "修理通讯故障"
        },
        {
          id: "u5",
          className: "机械",
          grade: "大修",
          summary: "大修",
          desc: "测试",
          trouble: "检车网络故障",
          troubleDesc: "测试",
          plan: "通讯",
          planDesc: "修理通讯故障"
        },
        {
          id: "u6",
          className: "机械",
          grade: "大修",
          summary: "大修",
          desc: "测试",
          trouble: "检车网络故障",
          troubleDesc: "测试",
          plan: "通讯",
          planDesc: "修理通讯故障"
        },
        {
          id: "u7",
          className: "机械",
          grade: "大修",
          summary: "大修",
          desc: "测试",
          trouble: "检车网络故障",
          troubleDesc: "测试",
          plan: "通讯",
          planDesc: "修理通讯故障"
        },
        {
          id: "u8",
          className: "网络",
          grade: "大修",
          summary: "大修",
          desc: "测试",
          trouble: "检车网络故障",
          troubleDesc: "测试",
          plan: "通讯",
          planDesc: "修理通讯故障"
        },
        {
          id: "u9",
          className: "通信",
          grade: "大修",
          summary: "大修",
          desc: "测试",
          trouble: "检车网络故障",
          troubleDesc: "测试",
          plan: "通讯",
          planDesc: "修理通讯故障"
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
    SanInput,
    SanSelect,
    SanButton,
    SanTable,
    Paginate,
    ModelAddItem,
    ModelTable
  }
};
</script>
<style>
.modelProject {
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
}
.modelProject-top {
  position: relative;
  width: 100%;
  font-size: 12px;
  color: #7f7f7f;
  box-sizing: border-box;
}
.modelProject-top .descSpan {
  padding: 0px 20px;
}
.modelProject-top .descSpan:nth-child(1) {
  padding: 0px 0px;
}
.modelProject-top .searchBtn {
  margin: 0px 20px;
}

.modelProject-center {
  width: 100%;
  margin-top: 20px;
}
.modelProject-bottom {
  position: relative;
  height: 100px;
}
.modelProject-bottom-wrap {
  right: 0px;
}

.modelProject-bottom-wrap .page-item {
  float: left;
  width: 60px;
  height: 40px;
  line-height: 40px;
  box-sizing: content-box;
}

.modelProject-bottom-wrap .page-link-item {
  height: 100%;
  display: inline-block;
  width: 100%;
  text-align: center;
  border: 1px solid #8fb3d0;
  border-right: none;
  color: #a9a1a1;
}

.modelProject-bottom-wrap .prev-item {
  float: left;
  height: 40px;
  line-height: 40px;
}
.modelProject-bottom-wrap .prev-link-item {
  height: 100%;
  display: inline-block;
  padding: 0 10px;
  text-align: center;
  border: 1px solid #8fb3d0;
  color: #a9a1a1;
  border-right: none;
}
.modelProject-bottom-wrap .next-item {
  display: inline-block;
  height: 40px;
  line-height: 40px;
}
.modelProject-bottom-wrap .next-link-item {
  height: 100%;
  display: inline-block;
  padding: 0 10px;
  text-align: center;
  color: #a9a1a1;
  border: 1px solid #8fb3d0;
}

.modelProject-bottom-wrap .active-item > .page-link-item {
  color: #fff !important;
  background-color: #2666e8;
}
.modelProject-bottom-wrap .active-item > .page-link-item {
  /* color: #337ab7; */
  color: red;
}
.modelProject-bottom-wrap .disabled-item {
  cursor: not-allowed;
}
.modelProject-bottom-wrap .disabled-item > .prev-link-item {
  color: #ddd;
  cursor: not-allowed;
}
.modelProject-bottom-wrap .disabled-item > .next-link-item {
  color: #ddd;
  cursor: not-allowed;
}
.modelProject-bottom {
  position: relative;
  height: 100px;
}
.modelProject-bottom-wrap {
  right: 0px;
}

.modelProject-bottom-wrap .page-item {
  float: left;
  width: 60px;
  height: 40px;
  line-height: 40px;
  box-sizing: content-box;
}

.modelProject-bottom-wrap .page-link-item {
  height: 100%;
  display: inline-block;
  width: 100%;
  text-align: center;
  border: 1px solid #8fb3d0;
  border-right: none;
  color: #a9a1a1;
}

.modelProject-bottom-wrap .prev-item {
  float: left;
  height: 40px;
  line-height: 40px;
}
.modelProject-bottom-wrap .prev-link-item {
  height: 100%;
  display: inline-block;
  padding: 0 10px;
  text-align: center;
  border: 1px solid #8fb3d0;
  color: #a9a1a1;
  border-right: none;
}
.modelProject-bottom-wrap .next-item {
  display: inline-block;
  height: 40px;
  line-height: 40px;
}
.modelProject-bottom-wrap .next-link-item {
  height: 100%;
  display: inline-block;
  padding: 0 10px;
  text-align: center;
  color: #a9a1a1;
  border: 1px solid #8fb3d0;
}

.modelProject-bottom-wrap .active-item > .page-link-item {
  color: #fff !important;
  background-color: #2666e8;
}
.modelProject-bottom-wrap .active-item > .page-link-item {
  /* color: #337ab7; */
  color: red;
}
.modelProject-bottom-wrap .disabled-item {
  cursor: not-allowed;
}
.modelProject-bottom-wrap .disabled-item > .prev-link-item {
  color: #ddd;
  cursor: not-allowed;
}
.modelProject-bottom-wrap .disabled-item > .next-link-item {
  color: #ddd;
  cursor: not-allowed;
}
</style>

