<template>
  <div class="goods">
     <div id="goods-top">
        <h4>商品列表</h4>
        <mark>共有数据：101</mark>
        <div id="goods-form">
          <div class="classify">
            <span>商品ID：</span>
            <input type="text" placeholder="输入商品ID"/>
          </div>
          <div class="classify">
            <span>商品名称：</span>
            <input type="text" placeholder="输入商品名称"/>
          </div>
          <div class="classify">
            <span>商品编码：</span>
            <input type="text" placeholder="输入商品编码"/>
          </div>
          <div class="classify">
            <span>商品分类：</span>
            <select>
              <option>事业一部</option>
              <option>事业二部</option>
            </select>
          </div>
          <div class="classify">
            <span>当前状态：</span>
            <select>
              <option>事业一部</option>
              <option>事业二部</option>
            </select>
          </div>
          <div class="classify">
            <span>首页显示：</span>
            <select>
              <option>事业一部</option>
              <option>事业二部</option>
            </select>
          </div>
          <div class="classify">
            <span>商家ID：</span>
            <input type="text" placeholder="输入商家ID"/>
          </div>
          <div class="classify">
            <span>商家名称：</span>
            <input type="text" placeholder="输入商家名称"/>
          </div>
        </div>
        <div id="goods-btn">
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
          <el-button type="primary" icon="el-icon-delete">清空</el-button>
          <el-button type="primary" icon="el-icon-circle-close">批量删除</el-button>
        </div>
    </div>
    <el-table ref="multipleTable"  tooltip-effect="dark"  style="width: 100%" @selection-change="handleSelectionChange" border>
      <el-table-column type="selection"></el-table-column>
      <el-table-column label="ID" width="100px"></el-table-column>
      <el-table-column label="商品" width="700px"></el-table-column>
      <el-table-column label="商品类别"></el-table-column>
      <el-table-column label="价格"></el-table-column>
      <el-table-column label="所属供货商"></el-table-column>
      <el-table-column label="状态"></el-table-column>
      <el-table-column label="操作" width="100px"></el-table-column>
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
  height: 250px;
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
  margin-left:400px;
}
#goods-form .classify:nth-of-type(1){margin-left: 0px;}
#goods-form .classify:nth-of-type(4){margin-left: 0px;}
#goods-form .classify:nth-of-type(7){margin-left: 0px;}
#goods-form .classify span{
  width: 80px;
  float: left;
  text-align: right;
  margin-top: 2px;
}
.classify select{
  width:191px;
  height:24px;
  background:rgba(255,255,255,1);
  border:1px solid rgba(191, 208, 226, 1);
  border-radius:12px;
  outline: none;
  color: #797979;
  text-indent: 10px;
  box-shadow:0px 3px 5px 0px rgba(48,115,248,0.1);
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
  text-align: right;
}


</style>
