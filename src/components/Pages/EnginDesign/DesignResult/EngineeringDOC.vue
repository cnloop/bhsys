<template>
  <section class="EngineeringDOC">
    <section class="EngineeringDOC-top">
      <span>时间选择：</span>
      <date-picker v-model="timeStart" placeholder="开始时间"></date-picker>
      <span class="desc">至</span>
      <date-picker v-model="timeEnd" placeholder="结束时间"></date-picker>
      <span class="projectSelectText">项目选择:</span>
      <san-select class="projectSelectedOne" :seletedOneItem.sync="projectSelectedOne" :projectData="projectData"></san-select>
      <span class="classSelectedText">类别选择:</span>
      <san-select class="classSelectedOne" :seletedOneItem.sync="classSelectedOne" :projectData="classData"></san-select>
      <san-button class="seatchBtn">
        <i slot="icon" class="iconfont">&#xeef7;</i>查询
      </san-button>
      <san-button @click.stop.native="addClass" class="addBtn">
        <i slot="icon" class="iconfont">&#xe602;</i>添加
      </san-button>
    </section>
    <section class="EngineeringDOC-center">
      <san-table :tableTheadData="tableTheadData" :tableTbodyData="tableTbodyData"></san-table>
    </section>
    <section class="EngineeringDOC-bottom">
      <div class="EngineeringDOC-bottom-wrap tb-center">
        <paginate :page-count="currentTotal" v-model="currentPage" :page-range="3" :margin-pages="2" :click-handler="paginateCallback" :prev-text="'上一页'" :next-text="'下一页'" :prev-class="'prev-item'" :prev-link-class="'prev-link-item'" :next-class="'next-item'" :next-link-class="'next-link-item'" :container-class="'pagination'" :page-class="'page-item'" :page-link-class="'page-link-item'" :active-class="'active-item'" :disabled-class="'disabled-item'">
        </paginate>
      </div>
    </section>
    <san-add-item :itemInfo="itemInfo" :isShowItemInfo="isShowItemInfo" @sanAddItemCallBack="sanAddItemCallBack"></san-add-item>
  </section>
</template>
<script>
import SanSelect from "@/components/Common/SanSelect";
import SanButton from "@/components/Common/SanButton";
import SanTable from "@/components/Common/SanTable";
import SanAddItem from "@/components/Common/SanAddItem";
import Paginate from "vuejs-paginate";
import DatePicker from "vue2-datepicker";
export default {
  data() {
    return {
      timeStart: "",
      timeEnd: "",
      projectData: ["唐河地下涵", "宿县枢纽", "符离闸", "灵璧枢纽"],
      projectSelectedOne: "请选择项目",
      classData: [
        "设施设备资料",
        "项目信息资料",
        "培训资料",
        "操作规程",
        "设计变更",
        "工程大事记",
        "会议纪要"
      ],
      classSelectedOne: "请选择类别",
      tableTheadData: [
        "项目名称",
        "所属类别",
        "文件名",
        "附件",
        "上传时间",
        "上传人",
        "操作"
      ],
      tableTbodyData: [
        {
          id: "u1",
          name: "唐河地下涵",
          class: "设施设备资料",
          fileName: "唐河地下涵结构图",
          count: 3,
          uploadDate: "2018-10-20 12:00",
          uploadPerson: "张俊"
        },
        {
          id: "u2",
          name: "宿县闸",
          class: "项目信息资料",
          fileName: "宿县闸施工图",
          count: 6,
          uploadDate: "2018-10-20 11:00",
          uploadPerson: "张俊"
        },
        {
          id: "u3",
          name: "刘卫涵",
          class: "设施设备资料",
          fileName: "刘卫涵施工图",
          count: 3,
          uploadDate: "2018-10-19 16:00",
          uploadPerson: "李超群"
        },
        {
          id: "u4",
          name: "大余闸",
          class: "操作规程",
          fileName: "大余闸机构图",
          count: 6,
          uploadDate: "2018-10-19 15:20",
          uploadPerson: "李超群"
        },
        {
          id: "u5",
          name: "团结涵",
          class: "设计变更",
          fileName: "团结涵结构图",
          count: 8,
          uploadDate: "2018-10-19 13:35",
          uploadPerson: "李超群"
        },
        {
          id: "u6",
          name: "大郑涵",
          class: "培训资料",
          fileName: "大郑涵结构图",
          count: 4,
          uploadDate: "2018-10-18 16:32",
          uploadPerson: "王梓"
        },
        {
          id: "u7",
          name: "唐赵涵",
          class: "工程大事记",
          fileName: "唐赵涵竣工图纸",
          count: 6,
          uploadDate: "2018-10-17 14:32",
          uploadPerson: "王梓"
        },
        {
          id: "u8",
          name: "唐河地下涵",
          class: "工程大事记",
          fileName: "唐河地下涵竣工图纸",
          count: 11,
          uploadDate: "2018-10-17 9:32",
          uploadPerson: "王梓"
        },
        {
          id: "u9",
          name: "团结涵",
          class: "项目信息资料",
          fileName: "团结涵竣工图纸",
          count: 9,
          uploadDate: "2018-10-13 9:24",
          uploadPerson: "李超群"
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
    SanAddItem,
    DatePicker,
    Paginate
  }
};
</script>
<style>
.EngineeringDOC {
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
}
.EngineeringDOC-top {
  position: relative;
  width: 100%;
  font-size: 12px;
  color: #7f7f7f;
  box-sizing: border-box;
}
.EngineeringDOC-top .mx-datepicker {
  width: 180px;
  padding: 0px 8px;
}
.EngineeringDOC-top .mx-input {
  height: 32px;
  font-size: 12px;
}
.EngineeringDOC-top .projectSelectText {
  padding-left: 20px;
  padding-right: 8px;
}
.EngineeringDOC-top .projectSelectedOne {
  vertical-align: middle;
}
.EngineeringDOC-top .classSelectedText {
  padding-left: 20px;
  padding-right: 8px;
}
.EngineeringDOC-top .classSelectedOne {
  vertical-align: middle;
}
.EngineeringDOC-top .seatchBtn {
  vertical-align: middle;
  margin: 0px 20px;
}
.EngineeringDOC-top .addBtn {
  vertical-align: middle;
}

.EngineeringDOC-center {
  width: 100%;
  margin-top: 20px;
}
.EngineeringDOC-bottom {
  position: relative;
  height: 100px;
}
.EngineeringDOC-bottom-wrap {
  right: 0px;
}

.EngineeringDOC-bottom-wrap .page-item {
  float: left;
  width: 60px;
  height: 40px;
  line-height: 40px;
  box-sizing: content-box;
}

.EngineeringDOC-bottom-wrap .page-link-item {
  height: 100%;
  display: inline-block;
  width: 100%;
  text-align: center;
  border: 1px solid #8fb3d0;
  border-right: none;
  color: #a9a1a1;
}

.EngineeringDOC-bottom-wrap .prev-item {
  float: left;
  height: 40px;
  line-height: 40px;
}
.EngineeringDOC-bottom-wrap .prev-link-item {
  height: 100%;
  display: inline-block;
  padding: 0 10px;
  text-align: center;
  border: 1px solid #8fb3d0;
  color: #a9a1a1;
  border-right: none;
}
.EngineeringDOC-bottom-wrap .next-item {
  display: inline-block;
  height: 40px;
  line-height: 40px;
}
.EngineeringDOC-bottom-wrap .next-link-item {
  height: 100%;
  display: inline-block;
  padding: 0 10px;
  text-align: center;
  color: #a9a1a1;
  border: 1px solid #8fb3d0;
}

.EngineeringDOC-bottom-wrap .active-item > .page-link-item {
  color: #fff !important;
  background-color: #2666e8;
}
.EngineeringDOC-bottom-wrap .active-item > .page-link-item {
  /* color: #337ab7; */
  color: red;
}
.EngineeringDOC-bottom-wrap .disabled-item {
  cursor: not-allowed;
}
.EngineeringDOC-bottom-wrap .disabled-item > .prev-link-item {
  color: #ddd;
  cursor: not-allowed;
}
.EngineeringDOC-bottom-wrap .disabled-item > .next-link-item {
  color: #ddd;
  cursor: not-allowed;
}
.EngineeringDOC-bottom {
  position: relative;
  height: 100px;
}
.EngineeringDOC-bottom-wrap {
  right: 0px;
}

.EngineeringDOC-bottom-wrap .page-item {
  float: left;
  width: 60px;
  height: 40px;
  line-height: 40px;
  box-sizing: content-box;
}

.EngineeringDOC-bottom-wrap .page-link-item {
  height: 100%;
  display: inline-block;
  width: 100%;
  text-align: center;
  border: 1px solid #8fb3d0;
  border-right: none;
  color: #a9a1a1;
}

.EngineeringDOC-bottom-wrap .prev-item {
  float: left;
  height: 40px;
  line-height: 40px;
}
.EngineeringDOC-bottom-wrap .prev-link-item {
  height: 100%;
  display: inline-block;
  padding: 0 10px;
  text-align: center;
  border: 1px solid #8fb3d0;
  color: #a9a1a1;
  border-right: none;
}
.EngineeringDOC-bottom-wrap .next-item {
  display: inline-block;
  height: 40px;
  line-height: 40px;
}
.EngineeringDOC-bottom-wrap .next-link-item {
  height: 100%;
  display: inline-block;
  padding: 0 10px;
  text-align: center;
  color: #a9a1a1;
  border: 1px solid #8fb3d0;
}

.EngineeringDOC-bottom-wrap .active-item > .page-link-item {
  color: #fff !important;
  background-color: #2666e8;
}
.EngineeringDOC-bottom-wrap .active-item > .page-link-item {
  /* color: #337ab7; */
  color: red;
}
.EngineeringDOC-bottom-wrap .disabled-item {
  cursor: not-allowed;
}
.EngineeringDOC-bottom-wrap .disabled-item > .prev-link-item {
  color: #ddd;
  cursor: not-allowed;
}
.EngineeringDOC-bottom-wrap .disabled-item > .next-link-item {
  color: #ddd;
  cursor: not-allowed;
}
</style>


