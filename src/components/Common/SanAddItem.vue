<template>
    <section class="sanAddItem" v-show="isShowItemInfo">
        <div class="sanAddItem-box">
            <!-- <san-input></san-input> -->
            <div class="sanAddItem-box-header">
                <span>项目信息</span>
                <i @click.stop="clickBox('cancel')" class="iconfont">&#xe622;</i>
            </div>
            <div class="sanAddItem-box-center">
                <table>
                    <tr>
                        <td>
                            <span>项目名称：</span>
                        </td>
                        <td>
                            <san-select class="sanSelectProject" :seletedOneItem.sync="projectSelectedOne" :projectData="projectData"></san-select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>所属类别：</span>
                        </td>
                        <td>
                            <san-select class="sanSelectProjectClass" :seletedOneItem.sync="classSelectedOne" :projectData="classData"></san-select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>文件名：</span>
                        </td>
                        <td>
                            <san-input :sanInputDisabled="false" :sanInputValue.sync="fileName"></san-input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>文件数量：</span>
                        </td>
                        <td>
                            <san-input :sanInputDisabled="false" :sanInputValue.sync="count"></san-input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>上传时间：</span>
                        </td>
                        <td>
                            <san-input :sanInputDisabled="false" :sanInputValue.sync="uploadDate"></san-input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>上传人：</span>
                        </td>
                        <td>
                            <san-input :sanInputDisabled="false" :sanInputValue.sync="uploadPerson"></san-input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>备注：</span>
                        </td>
                        <td>
                            <textarea rows="4" cols="35" placeholder="请输入备注信息"></textarea>
                        </td>
                    </tr>
                </table>
            </div>

            <div class="sanAddItem-box-bottom">
                <san-base-button class="btn" @click.native.stop="clickBox('cancel')">确认</san-base-button>
            </div>
        </div>
    </section>
</template>
<script>
import SanInput from "@/components/Common/SanInput";
import SanBaseButton from "@/components/Common/SanBaseButton";
import SanSelect from "@/components/Common/SanSelect";

export default {
  props: ["isShowItemInfo", "itemInfo"],
  data() {
    return {
      name: "",
      nClass: "",
      fileName: "",
      count: "",
      uploadDate: "",
      uploadPerson: "",
      projectSelectedOne: "请选择项目",
      projectData: ["唐河地下涵", "宿县枢纽", "符离闸", "灵璧枢纽"],
      classData: ["施工图", "设计图纸", "竣工图纸"],
      classSelectedOne: "请选择类别"
    };
  },
  created() {
    this.name = this.itemInfo.name;
    this.nClass = this.itemInfo.class;
    this.fileName = this.itemInfo.fileName;
    this.count = this.itemInfo.count;
    this.uploadDate = this.itemInfo.uploadDate;
    this.uploadPerson = this.itemInfo.uploadPerson;
  },
  components: {
    SanInput,
    SanBaseButton,
    SanSelect
  },
  methods: {
    clickBox(info) {
      this.$emit("sanAddItemCallBack", info);
      this.$emit("update:isShowItemInfo", !this.isShowItemInfo);
    }
  },
  watch: {
    itemInfo: {
      handler: function(val) {
        this.name = val.name;
        this.nClass = val.class;
        this.fileName = val.fileName;
        this.count = this.itemInfo.count;
        this.uploadDate = val.uploadDate;
        this.uploadPerson = val.uploadPerson;
      }
    }
  }
};
</script>
<style scoped>
.sanAddItem {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 999;
}
.sanAddItem-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-block;
  min-width: 500px;
  min-height: 100px;
  box-sizing: border-box;
  padding: 20px;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #ebeef5;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
.sanAddItem-box-header {
  color: #303133;
  height: 32px;
  line-height: 32px;
}

.sanAddItem-box-header > span {
  font-size: 18px;
  font-weight: 600;
}

.sanAddItem-box-header > i {
  cursor: pointer;
  float: right;
  font-size: 22px;
  transform: translateY(-4px);
  backface-visibility: hidden;
}
.sanAddItem-box-center {
  margin-top: 20px;
  padding-left: 90px;
  padding-right: 90px;
}
.sanAddItem-box-center table {
  width: 100%;
  font-size: 15px;
  white-space: nowrap;
}
.sanAddItem-box-center table td {
  padding-top: 10px;
  padding-bottom: 10px;
}
.sanAddItem-box-center table td .sanSelectProject {
  width: 180px;
}
.sanAddItem-box-center table td .sanSelectProjectClass {
  width: 180px;
}
.sanAddItem-box-center table td:nth-child(2) {
  padding-left: 25px;
}
.sanAddItem-box-bottom {
  margin-top: 12px;
}
.sanAddItem-box-bottom > .btn {
  float: right;
}
</style>
