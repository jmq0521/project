<template>
  <div class="line">
     <div id="line-top">
        <h4>线下支付列表</h4>
        <mark>共有数据：101</mark>
    </div>
    <el-table border style="width: 100%">
      <el-table-column prop="name" label="ID"></el-table-column>
      <el-table-column prop="date" label="UID"></el-table-column>
      <el-table-column prop="date" label="订单编号"></el-table-column>
      <el-table-column prop="name" label="保证金消费额" width="150px"></el-table-column>
      <el-table-column prop="date" label="状态"></el-table-column>
      <el-table-column prop="name" label="类型"></el-table-column>
      <el-table-column prop="date" label="保证金当前余额" width="150px"></el-table-column>
      <el-table-column prop="name" label="保证金上一次余额" width="150px"></el-table-column>
      <el-table-column prop="date" label="手机号"></el-table-column>
      <el-table-column prop="name" label="备注"></el-table-column>
      <el-table-column prop="date" label="线下支付凭证" width="150px"></el-table-column>
      <el-table-column prop="name" label="支付类型"></el-table-column>
      <el-table-column prop="date" label="创建时间"></el-table-column>
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
  name: 'linee',
  data () {
    return {
      
    }
  },
  methods:{
    
  }
}
</script>


<style scoped>
#line-top{
  height: 50px;
  background: #fff;
  border-radius: 10px;
  box-shadow:0px 0px 20px 0px rgba(48,115,248,0.1);
}
#line-top h4{
  height: 100%;
  line-height: 50px;
  color: #53779D;
  font-size: 15px;
  margin-left:28px;
  float: left;
  cursor: pointer;
}
#line-top mark{
  height: 100%;
  line-height: 50px;
  color: #53779D;
  font-size: 12px;
  margin-right: 28px;
  float: right;
  background: #fff;
}
#line-top #line-form{
  width: 100%;
  float: left;
  margin-top: 10px;
  padding-left: 28px;
  box-sizing: border-box;
}

</style>
