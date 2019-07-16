<template>
  <div class="grade">
     <div id="grade-top">
        <span @click="$router.push('/num')">购买名额优惠方案</span>
        <mark>共有数据：101</mark>
    </div>
    <el-table ref="multipleTable"  tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection"></el-table-column>
      <el-table-column label="ID"></el-table-column>
      <el-table-column label="级别名称"></el-table-column>
      <el-table-column label="推荐名额价格"></el-table-column>
      <el-table-column label="年费金额"></el-table-column>
      <el-table-column label="会员折扣"></el-table-column>
      <el-table-column label="有效时间 (单位: 月)" ></el-table-column>
      <el-table-column label="操作"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'grade',
  data () {
    return {
      multipleSelection: []
    }
  },
  methods:{
     handleSelectionChange(val) {
        this.multipleSelection = val;
      }
  }
}
</script>


<style scoped>
#grade-top{
  height: 50px;
  background: #fff;
  border-radius: 10px;
  box-shadow:0px 0px 20px 0px rgba(48,115,248,0.1);
}
#grade-top span{
  height: 100%;
  line-height: 50px;
  color: #53779D;
  font-size: 16px;
  margin-left:28px;
  float: left;
  cursor: pointer;
}
#grade-top mark{
  height: 100%;
  line-height: 50px;
  color: #53779D;
  font-size: 12px;
  margin-right: 28px;
  float: right;
  background: #fff;
}
#grade-top #grade-form{
  width: 100%;
  float: left;
  margin-top: 10px;
  padding-left: 28px;
  box-sizing: border-box;
}

</style>
