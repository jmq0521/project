<template>
  <div class="order">
     <div id="order-top">
        <h4>推荐名额订单列表</h4>
        <mark>共有数据：101</mark>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="name" label="ID"></el-table-column>
      <el-table-column prop="date" label="UID"></el-table-column>
      <el-table-column prop="date" label="订单编号"></el-table-column>
      <el-table-column prop="name" label="用户类别"></el-table-column>
      <el-table-column prop="date" label="购买名额数量"></el-table-column>
      <el-table-column prop="name" label="名额单价"></el-table-column>
      <el-table-column prop="date" label="订单金额"></el-table-column>
      <el-table-column prop="name" label="订单状态"></el-table-column>
      <el-table-column prop="date" label="订单类型"></el-table-column>
      <el-table-column prop="name" label="支付方式"></el-table-column>
      <el-table-column prop="date" label="购买名额类型" width="150px"></el-table-column>
      <el-table-column prop="name" label="线下支付凭证"></el-table-column>
      <el-table-column prop="date" label="支付来源"></el-table-column>
      <el-table-column prop="date" label="付款时间"></el-table-column>
      <el-table-column prop="name" label="操作"></el-table-column>
    </el-table>
    <el-pagination
    background
    layout="prev, pager, next"
    :total="100">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'order',
  data () {
    return {
      
    }
  },
  methods:{
    
  }
}
</script>


<style scoped>
#order-top{
  height: 50px;
  background: #fff;
  border-radius: 10px;
  box-shadow:0px 0px 20px 0px rgba(48,115,248,0.1);
}
#order-top h4{
  height: 100%;
  line-height: 50px;
  color: #53779D;
  font-size: 15px;
  margin-left:28px;
  float: left;
  cursor: pointer;
}
#order-top mark{
  height: 100%;
  line-height: 50px;
  color: #53779D;
  font-size: 12px;
  margin-right: 28px;
  float: right;
  background: #fff;
}
#order-top #order-form{
  width: 100%;
  float: left;
  margin-top: 10px;
  padding-left: 28px;
  box-sizing: border-box;
}

</style>
