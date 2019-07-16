<template>
  <div class="rech">
     <div id="rech-top">
        <h4>充值保证金记录</h4>
        <mark>共有数据：101</mark>
        <div id="rech-form">
          <div class="classify">
            <span>用户ID：</span>
            <input type="text" placeholder="输入会员编号"/>
          </div>
          <div class="classify">
            <span>订单编号：</span>
            <input type="text" placeholder="输入会员手机号"/>
          </div>
        </div>
        <div id="rech-btn">
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
          <el-button type="primary" icon="el-icon-delete">清空</el-button>
        </div>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="name" label="ID"></el-table-column>
      <el-table-column prop="date" label="订单编号"></el-table-column>
      <el-table-column prop="date" label="充值保证金"></el-table-column>
      <el-table-column prop="name" label="订单状态"></el-table-column>
      <el-table-column prop="date" label="充值时间"></el-table-column>
      <el-table-column prop="name" label="保证金当前余额"></el-table-column>
      <el-table-column prop="date" label="保证金上一次余额"></el-table-column>
      <el-table-column prop="name" label="会员手机号"></el-table-column>
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
#rech-top{
  height: 120px;
  background: #fff;
  border-radius: 10px;
  box-shadow:0px 0px 20px 0px rgba(48,115,248,0.1);
}
#rech-top h4{
  color: #53779D;
  font-size: 18px;
  margin: 24px 0 0 28px;
  float: left;
}
#rech-top mark{
  color: #53779D;
  font-size: 12px;
  margin: 24px 28px 0 0;
  float: right;
  background: #fff;
}
#rech-top #rech-form{
  width: 100%;
  float: left;
  margin-top: 10px;
  padding-left: 28px;
  box-sizing: border-box;
}
#rech-form .classify{
  font-size: 14px;
  color: #666;
  float: left;
  margin-top: 15px;
}
#rech-form .classify:nth-of-type(2){margin-left: 30px;}
#rech-form .classify span{
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

#rech-top #rech-btn{
  width: 100%;
  float: left;
  margin-top: -25px;
  padding-left: 28px;
  box-sizing: border-box;
  text-align: right;
}


</style>
