<template>
  <div class="mrech">
     <div id="mrech-top">
        <h4>商家提现记录</h4>
        <mark>共有数据：101</mark>
        <div id="mrech-form">
          <div class="classify">
            <span>商家ID：</span>
            <input type="text" placeholder="输入商家ID"/>
          </div>
          <div class="classify">
            <span>商家名称：</span>
            <input type="text" placeholder="输入商家名称"/>
          </div>
          <div class="classify">
            <span>处理状态：</span>
            <select>
              <option>事业一部</option>
              <option>事业二部</option>
            </select>
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
        </div>
        <div id="mrech-btn">
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
          <el-button type="primary" icon="el-icon-delete">清空</el-button>
          <el-button type="primary" icon="el-icon-paperclip">导出</el-button>
        </div>
    </div>
    <el-table  border style="width: 100%">
      <el-table-column prop="date" label="商家" width="200px"></el-table-column>
      <el-table-column prop="name" label="手机号码"></el-table-column>
      <el-table-column prop="date" label="银行账号" width="300px"></el-table-column>
      <el-table-column prop="name" label="银行信息" width="300px"></el-table-column>
      <el-table-column prop="date" label="剩余余额"></el-table-column>
      <el-table-column prop="name" label="本次申请提现金额" width="300px"></el-table-column>
      <el-table-column prop="date" label="处理状态"></el-table-column>
      <el-table-column prop="name" label="处理方式"></el-table-column>
      <el-table-column prop="name" label="提现审核"></el-table-column>
      <el-table-column prop="date" label="提现时间"></el-table-column>
      <el-table-column prop="name" label="提现时间"></el-table-column>
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
#mrech-top{
  height: 170px;
  background: #fff;
  border-radius: 10px;
  box-shadow:0px 0px 20px 0px rgba(48,115,248,0.1);
}
#mrech-top h4{
  color: #53779D;
  font-size: 18px;
  margin: 24px 0 0 28px;
  float: left;
}
#mrech-top mark{
  color: #53779D;
  font-size: 12px;
  margin: 24px 28px 0 0;
  float: right;
  background: #fff;
}
#mrech-top #mrech-form{
  width: 100%;
  float: left;
  margin-top: 10px;
  padding-left: 28px;
  box-sizing: border-box;
}
#mrech-form .classify{
  margin-left: 28px;
  font-size: 14px;
  color: #666;
  float: left;
  margin-left: 100px;
  margin-top: 20px;
}
#mrech-form .classify:nth-of-type(1){margin-left: 0;}
#mrech-form .classify span{
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

#mrech-top #mrech-btn{
  width: 100%;
  float: left;
  padding-left: 28px;
  box-sizing: border-box;
  text-align: right;
  margin-top: 20px;
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
  width: 600px;
  text-align: center;
  color: #53779D;
  font-size: 14px;
}


</style>
