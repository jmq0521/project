<template>
  <div class="stat">
     <div id="stat-top">
        <h4>产品统计</h4>
        <mark>共有数据：101</mark>
        <div id="stat-form">
          <div class="classify">
            <span>用户ID：</span>
            <input type="text" placeholder="输入会员编号"/>
          </div>
          <div class="classify">
            <span>日期范围：</span>
            <el-date-picker
              style="color:#666"
              v-model="value1"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
            <el-date-picker
              style="margin-left:-60px;color:#666"
              v-model="value2"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </div>
          <div class="classify">
            <span>供货商：</span>
            <select>
              <option>事业一部</option>
              <option>事业二部</option>
            </select>
          </div>
        </div>
        <div id="stat-btn">
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
          <el-button type="primary" icon="el-icon-delete">清空</el-button>
        </div>
    </div>
    <el-table  border style="width: 100%">
      <el-table-column prop="date" label="产品 ID" width="100px"></el-table-column>
      <el-table-column prop="name" label="产品名称" width="600px"></el-table-column>
      <el-table-column prop="date" label="所属供货商" width="220px"></el-table-column>
      <el-table-column prop="name" label="商品类型"></el-table-column>
      <el-table-column prop="date" label="销售数量"></el-table-column>
      <el-table-column prop="name" label="成本单价"></el-table-column>
      <el-table-column prop="date" label="销售单价"></el-table-column>
      <el-table-column prop="name" label="产品成本总价"></el-table-column>
      <el-table-column prop="date" label="销售金额"></el-table-column>
      <el-table-column prop="name" label="产品毛利"></el-table-column>
    </el-table>
    <table width="100%" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td>数据总计</td>
        <td>销售数量 : 5654</td>
        <td>成本单价 : 48794</td>
        <td>产品成本 : 11355</td>
        <td>产品毛利 : 12542</td>
      </tr>
    </table>

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
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date());
          }
        }, {
          text: '昨天',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
          }
        }, {
          text: '一周前',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
          }
        }]
      },
      value1: '',
      value2: '',
      
    }
  },
  methods:{
    
  }
}
</script>


<style scoped>
#stat-top{
  height: 120px;
  background: #fff;
  border-radius: 10px;
  box-shadow:0px 0px 20px 0px rgba(48,115,248,0.1);
}
#stat-top h4{
  color: #53779D;
  font-size: 18px;
  margin: 24px 0 0 28px;
  float: left;
}
#stat-top mark{
  color: #53779D;
  font-size: 12px;
  margin: 24px 28px 0 0;
  float: right;
  background: #fff;
}
#stat-top #stat-form{
  width: 100%;
  float: left;
  margin-top: 10px;
  padding-left: 28px;
  box-sizing: border-box;
}
#stat-form .classify{
  font-size: 14px;
  color: #666;
  float: left;
  margin-top: 15px;
}
#stat-form .classify:nth-of-type(2){margin-left: 30px;}
#stat-form .classify:nth-of-type(3){margin-left: -30px;}
#stat-form .classify span{
  min-width: 60px;
  margin-top: 3px;
  float: left;
}
.classify select{
  width:189px;
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

#stat-top #stat-btn{
  width: 100%;
  float: left;
  margin-top: -25px;
  padding-left: 28px;
  box-sizing: border-box;
  text-align: right;
}


table{
  width: 100%;
  margin-top: 20px;
  display: block;
  border-collapse:collapse;
  background: #fff;
  border-radius: 5px;
  box-shadow:0px 3px 5px 0px rgba(48,115,248,0.1);
}
table td{
  height: 40px;
  width: 400px;
  text-align: center;
  color: #53779D;
  font-size: 14px;
}


</style>
