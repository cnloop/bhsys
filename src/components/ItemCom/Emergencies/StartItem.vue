<template>
    <section class="sanItemInfo" v-show="isShowItemInfo">
        <div class="sanItemInfo-box">
            <!-- <san-input></san-input> -->
            <div class="sanItemInfo-box-header">
                <span>查看方案实施计划信息</span>
                <i @click.stop="clickBox('cancel')" class="iconfont">&#xe622;</i>
            </div>
            <div class="sanItemInfo-box-center">
                <table>
                    <tr>
                        <td>
                            <span>名称：</span>
                        </td>
                        <td>
                            <san-input :sanInputDisabled="true" :sanInputValue.sync="name"></san-input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>类型：</span>
                        </td>
                        <td>
                            <san-input :sanInputDisabled="true" :sanInputValue.sync="type"></san-input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>印发时间：</span>
                        </td>
                        <td>
                            <san-input :sanInputDisabled="true" :sanInputValue.sync="date"></san-input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>工程：</span>
                        </td>
                        <td>
                            <san-input :sanInputDisabled="true" :sanInputValue.sync="projectName"></san-input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>印发（编制）单位：</span>
                        </td>
                        <td>
                            <san-input :sanInputDisabled="true" :sanInputValue.sync="orgName"></san-input>
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
      name: "",
      type: "",
      date: "",
      projectName: "",
      orgName: ""
    };
  },
  created() {
    this.name = this.itemInfo.name;
    this.type = this.itemInfo.type;
    this.date = this.itemInfo.date;
    this.projectName = this.itemInfo.projectName;
    this.orgName = this.itemInfo.orgName;
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
        this.name = this.itemInfo.name;
        this.type = this.itemInfo.type;
        this.date = this.itemInfo.date;
        this.projectName = this.itemInfo.projectName;
        this.orgName = this.itemInfo.orgName;
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
