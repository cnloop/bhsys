<template>
    <section class="SanTable">
        <table>
            <thead>
                <tr>
                    <th class="allSelect">
                        <san-all-select :tableTbodyData="tableTbodyData" :checkedSets.sync="checkName"></san-all-select>
                    </th>
                    <th>序号</th>
                    <th v-for="(item,index) in tableTheadData" :key="index">{{item}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in tableTbodyData" :key="item.id">

                    <td>
                        <san-checkbox :value="item.id" :checkedSets.sync="checkName"></san-checkbox>
                    </td>
                    <td>
                        {{index+1}}
                    </td>
                    <td>
                        <span>{{item.projectName}}</span>
                    </td>
                    <td>
                        <span>{{item.machine}}</span>
                    </td>
                    <td>
                        <span>{{item.docName}}</span>
                    </td>
                    <td>
                        <span>{{item.docCount}}</span>
                    </td>
                    <td>
                        <span>{{item.uploadDate}}</span>
                    </td>
                    <td>
                        <span>{{item.uploadPerson}}</span>
                    </td>
                    <td class="action">
                        <span>
                            <san-button @click.native="searchItem(item)" class="btn">
                                <i slot="icon" class="iconfont">&#xeef7;</i>查看
                            </san-button>
                            <san-button @click.native="searchItem(item)" bgc="#36b51d" class="btn">
                                <i slot="icon" class="iconfont">&#xe623;</i>修改
                            </san-button>
                            <san-button @click.native="deleteItem" bgc="#ff9f00" class="btn">
                                <i slot="icon" class="iconfont">&#xe616;</i>删除
                            </san-button>
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
        <doc-item :itemInfo="itemInfo" :isShowItemInfo="isShowItemInfo" @sanItemInfoCallBack="sanItemInfoCallBack"></doc-item>
    </section>
</template>
<script>
import SanCheckbox from "@/components/Common/SanCheckbox";
import SanAllSelect from "@/components/Common/SanAllSelect";
import SanButton from "@/components/Common/SanButton";
import DocItem from "@/components/ItemCom/RepairCuring/DocItem";
export default {
  props: ["tableTheadData", "tableTbodyData"],
  data() {
    return {
      checkName: [],
      itemInfo: "",
      isShowItemInfo: false
    };
  },
  methods: {
    searchItem(item) {
      this.itemInfo = item;
      this.isShowItemInfo = true;
    },
    updateItem(item) {},
    deleteItem(item) {},
    sanItemInfoCallBack(info) {
      if (info === "cancel") {
        this.isShowItemInfo = false;
      } else {
        this.isShowItemInfo = true;
      }
    }
  },
  components: {
    SanCheckbox,
    SanAllSelect,
    SanButton,
    DocItem
  }
};
</script>
<style scoped>
.SanTable > table {
  width: 100%;
}

.SanTable > table > thead {
  border-top: 2px solid #538cff;
  border-bottom: 1px solid #ddd;
  background-color: #f0f3fd;
}

.SanTable table > thead > tr > th {
  padding: 16px 18px;
  text-align: center;
  border-right: 1px solid #ddd;
  white-space: nowrap;
  font-size: 14px;
  color: #333;
  user-select: none;
}
.SanTable > table > thead > tr > th:first-child {
  border-left: 1px solid #ddd;
}

.SanTable table tbody tr td {
  padding: 16px 18px;
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  white-space: nowrap;
  font-size: 12px;
  color: #666;
  text-align: center;
  user-select: none;
}
.SanTable table tbody tr td:first-child {
  border-left: 1px solid #ddd;
  font-weight: 700;
  font-size: 14px;
}
.SanTable table tbody tr:nth-child(2n-1) {
  background-color: rgb(248, 250, 255);
}
.SanTable table tbody tr:nth-child(2n) {
  background-color: rgb(253, 253, 253);
}
.SanTable table tbody tr:nth-child(2n):hover {
  background-color: #fff5e5;
}
.SanTable table tbody tr .action {
  padding: 16px 0px;
}
.SanTable table tbody tr .action .btn {
  margin: 0px 5px;
}
</style>
