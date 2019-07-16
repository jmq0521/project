<template>
  <div class="line">
     <div id="line-top">
        <h4>协议列表</h4>
        <mark>共有数据：101</mark>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="name" label="ID" width="100px"></el-table-column>
      <el-table-column prop="date" label="协议标题"></el-table-column>
      <el-table-column prop="name" label="备注"></el-table-column>
      <el-table-column prop="date" label="添加时间"></el-table-column>
      <el-table-column prop="name" label="操作" width="100px">
        <template slot-scope="scope">
          <span style="display:block;">
            <el-button type="primary" icon="el-icon-edit"></el-button>
          </span>
        </template>
      </el-table-column>
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
  name: 'line',
  data () {
    return {
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
