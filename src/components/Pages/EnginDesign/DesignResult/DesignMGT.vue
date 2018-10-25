<template>
  <section class="designMGT">
    <section class="designMGT-top ignore">
      <div ref="timeSelectGroup" class="timeSelectGroup tb-center">
        <span class="desc">时间选择:</span>
        <date-picker v-model="timeStart" width="180" placeholder="开始时间"></date-picker>
        <span class="desc">至</span>
        <date-picker v-model="timeEnd" width="180" placeholder="结束时间"></date-picker>
      </div>
      <div ref="projectSelectGroup" class="projectSelectGroup tb-center">
        <span ref="projectSelectGroupSpan" class="tb-center">项目选择:</span>
        <san-select ref="projectSelectGroupSelect" class="tb-center" :seletedOneItem.sync="projectSelectedOne" :projectData="projectData"></san-select>
      </div>
      <div ref="classSelectGroup" class="classSelectGroup tb-center">
        <span ref="classSelectGroupSpan" class="tb-center">类别选择:</span>
        <san-select ref="classSelectGroupSelect" class="tb-center" :seletedOneItem.sync="classSelectedOne" :projectData="classData"></san-select>
      </div>
      <div ref="searchButtonWrap" class="searchButtonWrap tb-center">
        <san-button ref="searchButton" class="tb-center">
          <i slot="icon" class="iconfont">&#xeef7;</i>查询
        </san-button>
      </div>
      <div ref="uploadButtonWrap" class="uploadButtonWrap tb-center">
        <san-button ref="uploadButton" class="tb-center">
          <i slot="icon" class="iconfont">&#xe720;</i>上传
        </san-button>
      </div>
    </section>
    <section class="designMGT-center">
      <san-table :tableTheadData="tableTheadData" :tableTbodyData="tableTbodyData"></san-table>
    </section>
    <section class="designMGT-bottom"></section>
  </section>
</template>
<script>
import SanList from "@/components/Common/SanList";
import SanSelect from "@/components/Common/SanSelect";
import SanButton from "@/components/Common/SanButton";
import SanTable from "@/components/Common/SanTable";

import DatePicker from "vue2-datepicker";
export default {
  data() {
    return {
      timeStart: "",
      timeEnd: "",
      projectData: ["唐河地下涵", "宿县枢纽", "符离闸", "灵璧枢纽"],
      projectSelectedOne: "请选择项目",
      classData: ["施工图", "设计图纸", "竣工图纸"],
      classSelectedOne: "请选择类别",
      tableTheadData: [
        "项目名称",
        "所属类别",
        "文件名",
        "数量",
        "上传时间",
        "上传人",
        "操作"
      ],
      tableTbodyData: [
        {
          id: "u1",
          name: "唐河地下涵",
          class: "施工图纸",
          fileName: "唐河地下涵结构图",
          count: 3,
          uploadDate: "2018-10-20 12:00",
          uploadPerson: "张俊"
        },
        {
          id: "u2",
          name: "唐河地下涵",
          class: "施工图纸",
          fileName: "唐河地下涵结构图",
          count: 3,
          uploadDate: "2018-10-20 12:00",
          uploadPerson: "张俊"
        }
      ]
    };
  },
  created() {
    this.autoSetLayout();
  },
  methods: {
    async autoSetLayout() {
      await this.$nextTick(() => {
        var timeSelectGroupWidth = this.$refs.timeSelectGroup.offsetWidth;
        var projectSelectGroupWidth = this.getProjectSelectGroupWidth();
        this.$refs.projectSelectGroup.style.left = `${timeSelectGroupWidth +
          34}px`;
        this.$refs.projectSelectGroup.style.width = `${projectSelectGroupWidth}px`;
        this.$refs.classSelectGroup.style.left = `${parseInt(
          this.$refs.projectSelectGroup.style.width.split("px")[0]
        ) +
          parseInt(this.$refs.projectSelectGroup.style.left.split("px")[0]) +
          34}px`;
        this.$refs.classSelectGroup.style.width = `${this.getClassSelectGroupWidth()}px`;
        this.setSearchButtonWrap();
        this.setUploadButtonWrap();
      });
    },
    getProjectSelectGroupWidth() {
      // span 宽
      var projectSelectGroupSpanWidth = this.$refs.projectSelectGroupSpan
        .offsetWidth;
      // select 组件宽
      var projectSelectGroupSelectWidth = this.$refs.projectSelectGroupSelect
        .$el.offsetWidth;
      this.$refs.projectSelectGroupSelect.$el.style.left = `${projectSelectGroupSpanWidth +
        20}px`;

      return projectSelectGroupSpanWidth + projectSelectGroupSelectWidth + 20;
    },
    getClassSelectGroupWidth() {
      // span 宽
      var classSelectGroupSpanWidth = this.$refs.classSelectGroupSpan
        .offsetWidth;
      // select 组件宽
      var classSelectGroupSelectWidth = this.$refs.classSelectGroupSelect.$el
        .offsetWidth;
      this.$refs.classSelectGroupSelect.$el.style.left = `${classSelectGroupSpanWidth +
        20}px`;
      return classSelectGroupSpanWidth + classSelectGroupSelectWidth + 20;
    },
    setSearchButtonWrap() {
      var previousEleWidth = this.$refs.classSelectGroup.style.width.split(
        "px"
      )[0];
      var previousEleHeight = this.$refs.classSelectGroup.style.left.split(
        "px"
      )[0];
      this.$refs.searchButtonWrap.style.left = `${parseInt(previousEleWidth) +
        parseInt(previousEleHeight) +
        34}px`;
      this.$refs.searchButtonWrap.style.width = `${
        this.$refs.searchButton.$el.offsetWidth
      }px`;
    },
    setUploadButtonWrap() {
      var previousEleWidth = this.$refs.searchButtonWrap.style.width.split(
        "px"
      )[0];
      var previousEleHeight = this.$refs.searchButtonWrap.style.left.split(
        "px"
      )[0];
      this.$refs.uploadButtonWrap.style.left = `${parseInt(previousEleWidth) +
        parseInt(previousEleHeight) +
        34}px`;
      this.$refs.uploadButtonWrap.style.width = `${
        this.$refs.uploadButton.$el.offsetWidth
      }px`;
    }
  },
  components: {
    SanList,
    SanSelect,
    SanButton,
    SanTable,
    DatePicker
  }
};
</script>
<style scoped>
.designMGT {
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
}
.designMGT-top {
  position: relative;
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
}

.designMGT-top.ignore {
  z-index: 99;
}

.designMGT-top > .timeSelectGroup {
  display: inline-block;
}

.designMGT-top > .timeSelectGroup > span {
  font-size: 12px;
  color: #7f7f7f;
  padding: 0px 14px;
}
.designMGT-top > .timeSelectGroup > span:nth-child(1) {
  padding-left: 0px;
}

.designMGT-top > .projectSelectGroup {
  display: inline-block;
  height: 100%;
}
.designMGT-top > .projectSelectGroup > span {
  font-size: 12px;
  color: #7f7f7f;
}

.designMGT-top > .classSelectGroup {
  display: inline-block;
  height: 100%;
}
.designMGT-top > .classSelectGroup > span {
  font-size: 12px;
  color: #7f7f7f;
}
.designMGT-top > .searchButtonWrap {
  display: inline-block;
  height: 100%;
}
.designMGT-center {
  width: 100%;
  margin-top: 20px;
}
</style>

