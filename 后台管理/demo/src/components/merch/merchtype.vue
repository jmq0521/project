<template>
  <div class="merch">
    <div id="merch-top">
      <h4>商家类型</h4>
      <mark>共有数据：101</mark>
      <div id="merch-btn">
        <el-button type="primary" icon="el-icon-circle-plus-outline" @click="dialogVisible = true">添加分类</el-button>
        <el-button type="primary" icon="el-icon-circle-close">批量删除</el-button>
      </div>
    </div>
     <el-table ref="multipleTable"  tooltip-effect="dark"  style="width: 100%" @selection-change="handleSelectionChange" border>
      <el-table-column type="selection"></el-table-column>
      <el-table-column label="ID" width="100px"></el-table-column>
      <el-table-column label="分类名称"></el-table-column>
      <el-table-column label="分类图片"></el-table-column>
      <el-table-column label="操作" width="100px"></el-table-column>
    </el-table>

     <el-dialog
      title="首页 > 商家管理 > 添加分类"
      top="200px"
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
      width="40%">
      <div class="pop">
        <span>分类名称：</span>
        <input type="text" />
      </div>
      <div class="pop">
        <span>分类图片：</span>
        <div style="float:left;">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <div id="btn" @click="dialogVisible = false">提交并发布</div>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'merch',
  data () {
    return {
      multipleSelection: [],
      dialogVisible: false,
      imageUrl: '',
    }
  },
  methods:{
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
  }
}
</script>


<style scoped>
#merch-top{
  height: 110px;
  background: #fff;
  border-radius: 10px;
  box-shadow:0px 0px 20px 0px rgba(48,115,248,0.1);
}
#merch-top h4{
  margin: 24px 0 0 28px;
  color: #53779D;
  font-size: 20px;
  margin-left:28px;
  float: left;
  cursor: pointer;
}
#merch-top mark{
  margin: 24px 28px 0 0;
  color: #53779D;
  font-size: 12px;
  margin-right: 28px;
  float: right;
  background: #fff;
}
#merch-top #merch-btn{
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


.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
