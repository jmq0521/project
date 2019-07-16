<template>
  <div class="goods">
     <div id="goods-top">
        <h4>商品分类</h4>
        <mark>共有数据：101</mark>
        <div id="goods-form">
          <div class="classify">
            <span>从当前数据中检索：</span>
            <input type="text" />
          </div>
        </div>
        <div id="goods-btn">
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
          <el-button type="primary" icon="el-icon-circle-plus-outline">添加商品分类</el-button>
        </div>
    </div>
    <el-table  border style="width: 100%">
      <el-table-column prop="date" label="排序" width="100px"></el-table-column>
      <el-table-column prop="name" label="ID" width="100px"></el-table-column>
      <el-table-column prop="date" label="分类名称"></el-table-column>
      <el-table-column prop="name" label="状态" width="100px"></el-table-column>
      <el-table-column prop="date" label="操作" width="100px"></el-table-column>
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
#goods-top{
  height: 170px;
  background: #fff;
  border-radius: 10px;
  box-shadow:0px 0px 20px 0px rgba(48,115,248,0.1);
}
#goods-top h4{
  color: #53779D;
  font-size: 18px;
  margin: 24px 0 0 28px;
  float: left;
}
#goods-top mark{
  color: #53779D;
  font-size: 12px;
  margin: 24px 28px 0 0;
  float: right;
  background: #fff;
}
#goods-top #goods-form{
  width: 100%;
  float: left;
  margin-top: 10px;
  padding-left: 28px;
  box-sizing: border-box;
}
#goods-form .classify{
  font-size: 14px;
  color: #666;
  float: left;
  margin-top: 15px;
}
#goods-form .classify span{
  width: 130px;
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

#goods-top #goods-btn{
  width: 100%;
  float: left;
  margin-top: 20px;
  padding-left: 28px;
  box-sizing: border-box;
  text-align: left;
}


</style>
