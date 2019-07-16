<template>
  <div class="reco">
     <div id="reco-top">
        <h4>推荐名额流水</h4>
        <mark>共有数据：101</mark>
        <div id="reco-form">
          <div class="classify">
            <span>用户ID：</span>
            <input type="text" placeholder="输入会员编号"/>
          </div>
        </div>
        <div id="reco-btn">
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
          <el-button type="primary" icon="el-icon-delete">清空</el-button>
        </div>
    </div>
    <el-table  border style="width: 100%">
      <el-table-column prop="date" label="会员编号"></el-table-column>
      <el-table-column prop="name" label="流水类别"></el-table-column>
      <el-table-column prop="date" label="名额数量"></el-table-column>
      <el-table-column prop="name" label="名额余额"></el-table-column>
      <el-table-column prop="date" label="备注"></el-table-column>
      <el-table-column prop="name" label="时间"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'list',
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
#reco-top{
  height: 120px;
  background: #fff;
  border-radius: 10px;
  box-shadow:0px 0px 20px 0px rgba(48,115,248,0.1);
}
#reco-top h4{
  color: #53779D;
  font-size: 18px;
  margin: 24px 0 0 28px;
  float: left;
}
#reco-top mark{
  color: #53779D;
  font-size: 12px;
  margin: 24px 28px 0 0;
  float: right;
  background: #fff;
}
#reco-top #reco-form{
  width: 100%;
  float: left;
  margin-top: 10px;
  padding-left: 28px;
  box-sizing: border-box;
}
#reco-form .classify{
  font-size: 14px;
  color: #666;
  float: left;
  margin-top: 15px;
}
#reco-form .classify span{
  width: 60px;
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

#reco-top #reco-btn{
  width: 100%;
  float: left;
  margin-top: -25px;
  padding-left: 28px;
  box-sizing: border-box;
  text-align: right;
}


</style>
