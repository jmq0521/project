<template>
  <div class="cent">
    <div id="cent-top">
      <h4>欢迎使用 企铛铛 后台管理系统！</h4>
      <span>登录次数：101</span>
      <div id="ul-li">
        <p>上次登录IP：182.50.112.190&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上次登录时间：2019-05-07 10:22:56&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上次登录时间：2019-05-07 10:22:56</p>     
        <p>本次登录IP：182.50.112.190&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本次登录时间：2019-05-07 14:19:54&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本次登录地点：中国 北京 北京</p>
      </div>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="统计"></el-table-column>
      <el-table-column prop="name" label="资讯库"></el-table-column>
      <el-table-column prop="date" label="图片库"></el-table-column>
      <el-table-column prop="name" label="产品库"></el-table-column>
      <el-table-column prop="date" label="用户"></el-table-column>
      <el-table-column prop="name" label="管理员"></el-table-column>
    </el-table>
    <div id="cent-foot">
      <p>Copyright ©2017 商城v1.0 All Rights Reserved.</p>
      <p>本后台系统由企铛铛(北京)科技有限公司提供技术支持</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cent',
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
      },{
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
  }
}
</script>


<style scoped>
#cent-top{
  height: 150px;
  background: #fff;
  border-radius: 10px;
  box-shadow:0px 0px 20px 0px rgba(48,115,248,0.1);
}
#cent-top h4{
  color: #53779D;
  font-size: 24px;
  margin: 24px 0 0 28px;
  float: left;
}
#cent-top span{
  color: #999;
  font-size: 12px;
  margin: 24px 28px 0 0;
  float: right;
}
#cent-top #ul-li{
  width: 100%;
  float: left;
  margin-top: 15px;
}
#cent-top #ul-li p{
  font-size: 14px;
  color: #999;
  margin-top: 10px;
  text-indent: 28px;

}
#cent-top #ul-li li:nth-of-type(1){margin-left: 28px;}
#cent-top #ul-li li:nth-of-type(4){margin-left: 28px;}


#cent-foot{
  width: 100%;
  margin-top: 20px;
}
#cent-foot p{
  width: 100%;
  text-align: center;
  font-size: 12px;
  color:#53779D;
  margin-top: 10px;
}
</style>
