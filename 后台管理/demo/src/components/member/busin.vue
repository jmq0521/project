<template>
  <div class="busin">
    <div id="busin-top">
      <h4>事业部列表</h4>
      <mark>共有数据：101</mark>
      <div id="busin-btn">
        <el-button type="primary" icon="el-icon-circle-plus-outline" @click="dialogVisible = true">添加事业部分组</el-button>
      </div>
    </div>
    <el-table border style="width: 100%">
      <el-table-column prop="name" label="ID"></el-table-column>
      <el-table-column prop="date" label="名称"></el-table-column>
      <el-table-column prop="date" label="备注"></el-table-column>
      <el-table-column prop="name" label="本月总共的邀请名额"></el-table-column>
      <el-table-column prop="date" label="本月已使用名额"></el-table-column>
      <el-table-column prop="name" label="本月剩余名额"></el-table-column>
      <el-table-column prop="date" label="负责人名字"></el-table-column>
      <el-table-column prop="name" label="负责人电话"></el-table-column>
      <el-table-column prop="date" label="添加时间"></el-table-column>
      <el-table-column prop="name" label="操作"></el-table-column>
    </el-table>

     <el-dialog
      title="首页 > 事业部管理 > 添加事业部"
      top="200px"
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
      width="40%">
      <div class="pop">
        <span>事业部名称：</span>
        <input type="text" />
      </div>
      <div class="pop">
        <span>本月总共邀请名额：</span>
        <input type="text" />
      </div>
      <div class="pop">
        <span>负责人名字：</span>
        <input type="text" />
      </div>
       <div class="pop">
        <span>负责人电话：</span>
        <input type="text" />
      </div>
      <div class="pop">
        <span>备注：</span>
        <input type="text" />
      </div>
     
      <span slot="footer" class="dialog-footer">
        <div id="btn" @click="dialogVisible = false">提交并发布</div>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'busin',
  data () {
    return {
     dialogVisible: false,
    }
  },
  methods:{
     
  }
}
</script>


<style scoped>
#busin-top{
  height: 110px;
  background: #fff;
  border-radius: 10px;
  box-shadow:0px 0px 20px 0px rgba(48,115,248,0.1);
}
#busin-top h4{
  margin: 24px 0 0 28px;
  color: #53779D;
  font-size: 20px;
  margin-left:28px;
  float: left;
  cursor: pointer;
}
#busin-top mark{
  margin: 24px 28px 0 0;
  color: #53779D;
  font-size: 12px;
  margin-right: 28px;
  float: right;
  background: #fff;
}
#busin-top #busin-btn{
  width: 100%;
  float: left;
  padding-left: 28px;
  box-sizing: border-box;
  text-align: left;
  margin-top: 20px;
}

.pop{
  margin-left: 50px;
  font-size: 14px;
  color: #666;
  float: left;
  margin-top: 20px;
}

.pop span{
  width: 150px;
  float: left;
  text-align: right;
  margin-top: 2px;
}
.pop select{
  width:400px;
  height:24px;
  background:rgba(255,255,255,1);
  border:1px solid rgba(191, 208, 226, 1);
  border-radius:12px;
  outline: none;
  color: #797979;
  text-indent: 10px;
  box-shadow:0px 3px 5px 0px rgba(48,115,248,0.1);
}
.pop input{
  width:400px;
  height:24px;
  background:rgba(255,255,255,1);
  border:1px solid rgba(191, 208, 226, 1);
  box-shadow:0px 3px 5px 0px rgba(48,115,248,0.1);
  border-radius:12px;
  outline: none;
  text-indent: 15px;
}

#btn{
  width:120px;
  height:25px;
  line-height: 25px;
  background:rgba(255,255,255,1);
  border:1px solid rgba(191, 208, 226, 1);
  border-radius:12px;
  outline: none;
  box-shadow:0px 3px 5px 0px rgba(48,115,248,0.1);
  text-align: center;
  font-size: 14px;
  margin: 15px auto;
  cursor: pointer;
  color: #53779D;
}
#btn:hover{
  background: #53779D;
  color: #fff;
}

</style>
