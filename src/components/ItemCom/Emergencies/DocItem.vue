<template>
    <section class="sanItemInfo" v-show="isShowItemInfo">
        <div class="sanItemInfo-box">
            <!-- <san-input></san-input> -->
            <div class="sanItemInfo-box-header">
                <span>查看资料归档信息</span>
                <i @click.stop="clickBox('cancel')" class="iconfont">&#xe622;</i>
            </div>
            <div class="sanItemInfo-box-center">
                <table>
                    <tr>
                        <td>
                            <span>工程名称：</span>
                        </td>
                        <td>
                            <san-input :sanInputDisabled="true" :sanInputValue.sync="projectName"></san-input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>工程分类：</span>
                        </td>
                        <td>
                            <san-input :sanInputDisabled="true" :sanInputValue.sync="projectType"></san-input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>文档名称：</span>
                        </td>
                        <td>
                            <san-input :sanInputDisabled="true" :sanInputValue.sync="docName"></san-input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>上传时间：</span>
                        </td>
                        <td>
                            <san-input :sanInputDisabled="true" :sanInputValue.sync="uploadDate"></san-input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>上传人：</span>
                        </td>
                        <td>
                            <san-input :sanInputDisabled="true" :sanInputValue.sync="uploadPerson"></san-input>
                        </td>
                    </tr>
                </table>
            </div>

            <div class="sanItemInfo-box-bottom">
                <san-base-button class="btn" @click.native.stop="clickBox('cancel')">确认</san-base-button>
            </div>
        </div>
    </section>
</template>
<script>
import SanInput from "@/components/Common/SanInput";
import SanBaseButton from "@/components/Common/SanBaseButton";

export default {
  props: ["isShowItemInfo", "itemInfo"],
  data() {
    return {
      projectName: "",
      projectType: "",
      docName: "",
      uploadDate: "",
      uploadPerson: ""
    };
  },
  created() {
    this.projectName = this.itemInfo.projectName;
    this.projectType = this.itemInfo.projectType;
    this.docName = this.itemInfo.docName;
    this.uploadDate = this.itemInfo.uploadDate;
    this.uploadPerson = this.itemInfo.uploadPerson;
  },
  components: {
    SanInput,
    SanBaseButton
  },
  methods: {
    clickBox(info) {
      this.$emit("sanItemInfoCallBack", info);
      this.$emit("update:isShowItemInfo", !this.isShowItemInfo);
    }
  },
  watch: {
    itemInfo: {
      handler: function(val) {
        this.projectName = this.itemInfo.projectName;
        this.projectType = this.itemInfo.projectType;
        this.docName = this.itemInfo.docName;
        this.uploadDate = this.itemInfo.uploadDate;
        this.uploadPerson = this.itemInfo.uploadPerson;
      }
    }
  }
};
</script>
<style scoped>
.sanItemInfo {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 999;
}
.sanItemInfo-box {
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
.sanItemInfo-box-header {
  color: #303133;
  height: 32px;
  line-height: 32px;
}

.sanItemInfo-box-header > span {
  font-size: 18px;
  font-weight: 600;
}

.sanItemInfo-box-header > i {
  cursor: pointer;
  float: right;
  font-size: 22px;
  transform: translateY(-4px);
  backface-visibility: hidden;
}
.sanItemInfo-box-center {
  margin-top: 20px;
  padding-left: 90px;
  padding-right: 90px;
}
.sanItemInfo-box-center table {
  width: 100%;
  font-size: 15px;
  white-space: nowrap;
}
.sanItemInfo-box-center table td {
  padding-top: 10px;
  padding-bottom: 10px;

  /* width: 50%;
    text-align: center; */
}
.sanItemInfo-box-center table td:nth-child(2) {
  padding-left: 25px;
}
.sanItemInfo-box-bottom {
  margin-top: 12px;
}
.sanItemInfo-box-bottom > .btn {
  float: right;
}
</style>
