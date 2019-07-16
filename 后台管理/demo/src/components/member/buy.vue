<template>
  <div class="buy">
    <div id="buy-top">
      <h4>名额购买记录</h4>
      <mark>共有数据：101</mark>
      <div id="buy-form">
        <div class="classify">
          <span>用户ID：</span>
          <input type="text" placeholder="输入会员编号"/>
        </div>
        <div class="classify">
          <span>订单编号：</span>
          <input type="text" placeholder="输入会员手机号"/>
        </div>
      </div>
      <div id="buy-btn">
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
        <el-button type="primary" icon="el-icon-delete">清空</el-button>
      </div>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="订单编号"></el-table-column>
      <el-table-column prop="name" label="用户ID"></el-table-column>
      <el-table-column prop="date" label="购买类型"></el-table-column>
      <el-table-column prop="name" label="购买数量"></el-table-column>
      <el-table-column prop="date" label="单价"></el-table-column>
      <el-table-column prop="name" label="总价"></el-table-column>
      <el-table-column prop="date" label="订单状态"></el-table-column>
      <el-table-column prop="name" label="订单类型"></el-table-column>
      <el-table-column prop="date" label="支付方式"></el-table-column>
      <el-table-column prop="name" label="支付时间"></el-table-column>
      <el-table-column prop="name" label="下单时间"></el-table-column>
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
  name: 'list',
  data () {
    return {
      
    }
  },
  methods:{
    
  }
}
</script>


<style scoped>
#buy-top{
  height: 120px;
  background: #fff;
  border-radius: 10px;
  box-shadow:0px 0px 20px 0px rgba(48,115,248,0.1);
}
#buy-top h4{
  color: #53779D;
  font-size: 18px;
  margin: 24px 0 0 28px;
  float: left;
}
#buy-top mark{
  color: #53779D;
  font-size: 12px;
  margin: 24px 28px 0 0;
  float: right;
  background: #fff;
}
#buy-top #buy-form{
  width: 100%;
  float: left;
  margin-top: 10px;
  padding-left: 28px;
  box-sizing: border-box;
}
#buy-form .classify{
  font-size: 14px;
  color: #666;
  float: left;
  margin-top: 15px;
}
#buy-form .classify:nth-of-type(2){margin-left: 30px;}
#buy-form .classify span{
  min-width: 60px;
  margin-top: 3px;
  float: left;
}
.classify input{
  width:189px;
  height:24px;
  background:rgba(255,255,255,1);
  border:1px solid rgba(191, 208, 226, 1);
  box-shadow:0px 3px 5px 0px rgba(48,115,248,0.1);
  border-radius:12px;
  outline: none;
  text-indent: 15px;
}

#buy-top #buy-btn{
  width: 100%;
  float: left;
  margin-top: -25px;
  padding-left: 28px;
  box-sizing: border-box;
  text-align: right;
}


</style>
