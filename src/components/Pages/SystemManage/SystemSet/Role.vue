<template>
    <section class="RoleSystem">
        <section class="RoleSystem-top">
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
        <section class="RoleSystem-center">
            <role-table :tableTheadData="tableTheadData" :tableTbodyData="tableTbodyData"></role-table>
        </section>
        <section class="RoleSystem-bottom">
            <div class="RoleSystem-bottom-wrap tb-center">
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
import RoleTable from "@/components/ItemCom/SystemManage/RoleTable";
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
      tableTheadData: ["角色名称", "英文名称", "归属机构", "数据范围", "操作"],
      tableTbodyData: [
        {
          id: "u1",
          roleName: "普通用户",
          engName: "d",
          org: "江苏省灌溉总渠管理处",
          rang: "仅本人数据"
        },
        {
          id: "u2",
          roleName: "本部门管理员",
          engName: "c",
          org: "江苏省灌溉总渠管理处",
          rang: "所有数据"
        },
        {
          id: "u3",
          roleName: "超级管理员",
          engName: "dept",
          org: "江苏省灌溉总渠管理处",
          rang: "所在机构及以下数据"
        },
        {
          id: "u4",
          roleName: "一站管理员",
          engName: "YZS",
          org: "淮安第一抽水站管理所",
          rang: "所在机构及以下数据"
        },
        {
          id: "u5",
          roleName: "二站管理员",
          engName: "YZsystem",
          org: "淮安第二抽水站管理所",
          rang: "所在机构及以下数据"
        },
        {
          id: "u6",
          roleName: "三站管理员",
          engName: "YZSBGLCK",
          org: "淮安第三抽水站管理所",
          rang: "所在机构及以下数据"
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
    RoleTable,
    SanClassSetUpAddItem
  }
};
</script>
<style>
.RoleSystem {
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
}
.RoleSystem-top {
  position: relative;
  width: 100%;
  font-size: 12px;
  color: #7f7f7f;
  box-sizing: border-box;
}
.RoleSystem-top .mx-datepicker {
  width: 180px;
  padding: 0px 8px;
}
.RoleSystem-top .mx-input {
  height: 32px;
  font-size: 12px;
}
.RoleSystem-top .classSelectedText {
  padding-left: 20px;
  padding-right: 8px;
}
.RoleSystem-top .classSelectedOne {
  vertical-align: middle;
}
.RoleSystem-top .seatchBtn {
  vertical-align: middle;
  margin: 0px 20px;
}
.RoleSystem-top .addBtn {
  vertical-align: middle;
}

.RoleSystem-center {
  width: 100%;
  margin-top: 20px;
}
.RoleSystem-bottom {
  position: relative;
  height: 100px;
}
.RoleSystem-bottom-wrap {
  right: 0px;
}

.RoleSystem-bottom-wrap .page-item {
  float: left;
  width: 60px;
  height: 40px;
  line-height: 40px;
  box-sizing: content-box;
}

.RoleSystem-bottom-wrap .page-link-item {
  height: 100%;
  display: inline-block;
  width: 100%;
  text-align: center;
  border: 1px solid #8fb3d0;
  border-right: none;
  color: #a9a1a1;
}

.RoleSystem-bottom-wrap .prev-item {
  float: left;
  height: 40px;
  line-height: 40px;
}
.RoleSystem-bottom-wrap .prev-link-item {
  height: 100%;
  display: inline-block;
  padding: 0 10px;
  text-align: center;
  border: 1px solid #8fb3d0;
  color: #a9a1a1;
  border-right: none;
}
.RoleSystem-bottom-wrap .next-item {
  display: inline-block;
  height: 40px;
  line-height: 40px;
}
.RoleSystem-bottom-wrap .next-link-item {
  height: 100%;
  display: inline-block;
  padding: 0 10px;
  text-align: center;
  color: #a9a1a1;
  border: 1px solid #8fb3d0;
}

.RoleSystem-bottom-wrap .active-item > .page-link-item {
  color: #fff !important;
  background-color: #2666e8;
}
.RoleSystem-bottom-wrap .active-item > .page-link-item {
  /* color: #337ab7; */
  color: red;
}
.RoleSystem-bottom-wrap .disabled-item {
  cursor: not-allowed;
}
.RoleSystem-bottom-wrap .disabled-item > .prev-link-item {
  color: #ddd;
  cursor: not-allowed;
}
.RoleSystem-bottom-wrap .disabled-item > .next-link-item {
  color: #ddd;
  cursor: not-allowed;
}
.RoleSystem-bottom {
  position: relative;
  height: 100px;
}
.RoleSystem-bottom-wrap {
  right: 0px;
}

.RoleSystem-bottom-wrap .page-item {
  float: left;
  width: 60px;
  height: 40px;
  line-height: 40px;
  box-sizing: content-box;
}

.RoleSystem-bottom-wrap .page-link-item {
  height: 100%;
  display: inline-block;
  width: 100%;
  text-align: center;
  border: 1px solid #8fb3d0;
  border-right: none;
  color: #a9a1a1;
}

.RoleSystem-bottom-wrap .prev-item {
  float: left;
  height: 40px;
  line-height: 40px;
}
.RoleSystem-bottom-wrap .prev-link-item {
  height: 100%;
  display: inline-block;
  padding: 0 10px;
  text-align: center;
  border: 1px solid #8fb3d0;
  color: #a9a1a1;
  border-right: none;
}
.RoleSystem-bottom-wrap .next-item {
  display: inline-block;
  height: 40px;
  line-height: 40px;
}
.RoleSystem-bottom-wrap .next-link-item {
  height: 100%;
  display: inline-block;
  padding: 0 10px;
  text-align: center;
  color: #a9a1a1;
  border: 1px solid #8fb3d0;
}

.RoleSystem-bottom-wrap .active-item > .page-link-item {
  color: #fff !important;
  background-color: #2666e8;
}
.RoleSystem-bottom-wrap .active-item > .page-link-item {
  /* color: #337ab7; */
  color: red;
}
.RoleSystem-bottom-wrap .disabled-item {
  cursor: not-allowed;
}
.RoleSystem-bottom-wrap .disabled-item > .prev-link-item {
  color: #ddd;
  cursor: not-allowed;
}
.RoleSystem-bottom-wrap .disabled-item > .next-link-item {
  color: #ddd;
  cursor: not-allowed;
}
</style>

