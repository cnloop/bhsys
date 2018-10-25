<template>
    <section class="SanTable">
        <table>
            <thead>
                <tr>
                    <th class="allSelect">
                        <san-all-select iconFontSize="20px" :tableTbodyData="tableTbodyData" :checkedSets.sync="checkName"></san-all-select>
                    </th>
                    <th v-for="(item,index) in tableTheadData" :key="index">{{item}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in tableTbodyData" :key="item.id">
                    <td>
                        <san-checkbox iconFontSize="20px" :value="item.id" :checkedSets.sync="checkName"></san-checkbox>

                    </td>
                    <td>
                        <span>{{item.name}}</span>
                    </td>
                    <td>
                        <span>{{item.class}}</span>
                    </td>
                    <td>
                        <span>{{item.fileName}}</span>
                    </td>
                    <td>
                        <span>{{item.count}}</span>
                    </td>
                    <td>
                        <span>{{item.uploadDate}}</span>
                    </td>
                    <td>
                        <span>{{item.uploadPerson}}</span>
                    </td>
                    <td class="action">
                        <span>
                            <san-button class="btn">
                                <i slot="icon" class="iconfont">&#xeef7;</i>查询
                            </san-button>
                            <san-button bgc="#36b51d" class="btn">
                                <i slot="icon" class="iconfont">&#xeef7;</i>修改
                            </san-button>
                            <san-button bgc="#ff9f00" class="btn">
                                <i slot="icon" class="iconfont">&#xeef7;</i>编辑
                            </san-button>
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
</template>
<script>
import SanCheckbox from "@/components/Common/SanCheckbox";
import SanAllSelect from "@/components/Common/SanAllSelect";
import SanButton from "@/components/Common/SanButton";

export default {
  props: ["tableTheadData", "tableTbodyData"],
  data() {
    return {
      checkName: []
    };
  },
  components: {
    SanCheckbox,
    SanAllSelect,
    SanButton
  }
};
</script>
<style scoped>
.SanTable {
  padding-bottom: 20px;
}

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

/* .SanTable > table > thead > tr > .allSelect > .text {
  display: inline-block;
  margin-left: 2px;
  transform: translateY(-4px);
  backface-visibility: hidden;
} */
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
