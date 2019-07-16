<template>
  <div class="inform">
     <div id="inform-top">
        <h4>资讯展示</h4>
        <mark>共有数据：101</mark>
        <div id="inform-btn">
          <el-button type="primary" icon="el-icon-circle-plus-outline" @click="dialogVisible = true">添加展示区域</el-button>
          <el-button type="primary" icon="el-icon-circle-close">批量删除</el-button>
        </div>
    </div>
     <el-table ref="multipleTable"  tooltip-effect="dark"  style="width: 100%" @selection-change="handleSelectionChange" border>
      <el-table-column type="selection"></el-table-column>
      <el-table-column label="ID" width="100px"></el-table-column>
      <el-table-column label="展示区域"></el-table-column>
      <el-table-column label="备注说明"></el-table-column>
      <el-table-column label="操作" width="100px"></el-table-column>
    </el-table>

    <el-dialog
      title="首页 > 资讯管理 > 添加资讯分类"
      top="200px" 
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
      width="40%">
      <div class="pop">
        <span>展示位置：</span>
        <input type="text" />
      </div>
      <div class="pop">
        <span>备注：</span>
        <textarea></textarea>
      </div>
      <span slot="footer" class="dialog-footer">
        <div id="btn" @click="dialogVisible = false">提交并发布</div>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'inform',
  data () {
    return {
      multipleSelection: [],
      dialogVisible: false,
     
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
#inform-top{
  height: 110px;
  background: #fff;
  border-radius: 10px;
  box-shadow:0px 0px 20px 0px rgba(48,115,248,0.1);
}
#inform-top h4{
  margin: 24px 0 0 28px;
  color: #53779D;
  font-size: 20px;
  margin-left:28px;
  float: left;
  cursor: pointer;
}
#inform-top mark{
  margin: 24px 28px 0 0;
  color: #53779D;
  font-size: 12px;
  margin-right: 28px;
  float: right;
  background: #fff;
}
#inform-top #inform-btn{
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
.pop textarea{
  width:400px;
  height:120px;
  background:rgba(255,255,255,1);
  border:1px solid rgba(191, 208, 226, 1);
  border-radius:12px;
  outline: none;
  color: #797979;
  text-indent: 10px;
  box-shadow:0px 3px 5px 0px rgba(48,115,248,0.1);
  resize:none;
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
