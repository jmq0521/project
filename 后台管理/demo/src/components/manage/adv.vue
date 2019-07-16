<template>
  <div class="adv">
     <div id="adv-top">
        <h4>广告分组</h4>
        <mark>共有数据：101</mark>
    </div>
    <el-table border style="width: 100%" :data="tableData">
      <el-table-column prop="name" label="ID" width="100px"></el-table-column>
      <el-table-column prop="date" label="分类名称"></el-table-column>
      <el-table-column prop="date" label="添加时间"></el-table-column>
      <el-table-column prop="name" label="修改时间"></el-table-column>
      <el-table-column prop="name" label="操作" width="100px">
        <template slot-scope="scope">
          <span style="display:block;">
            <el-button type="primary" icon="el-icon-edit" @click="dialogVisible = true"></el-button>
          </span>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
    background
    layout="prev, pager, next"
    :total="100">
    </el-pagination>

    <el-dialog
      title="编辑分组"
      top="200px"
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
      width="40%">
      <div class="pop">
        <span>分组名称：</span>
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
  name: 'adve',
  data () {
    return {
      dialogVisible: false,
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods:{
    
  }
}
</script>


<style scoped>
#adv-top{
  height: 50px;
  background: #fff;
  border-radius: 10px;
  box-shadow:0px 0px 20px 0px rgba(48,115,248,0.1);
}
#adv-top h4{
  height: 100%;
  line-height: 50px;
  color: #53779D;
  font-size: 15px;
  margin-left:28px;
  float: left;
  cursor: pointer;
}
#adv-top mark{
  height: 100%;
  line-height: 50px;
  color: #53779D;
  font-size: 12px;
  margin-right: 28px;
  float: right;
  background: #fff;
}
#adv-top #adv-form{
  width: 100%;
  float: left;
  margin-top: 10px;
  padding-left: 28px;
  box-sizing: border-box;
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
