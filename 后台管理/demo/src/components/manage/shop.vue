<template>
  <div class="shop">
     <div id="shop-top">
        <h4>购物记录</h4>
        <mark>共有数据：101</mark>
        <div id="shop-form">
          <div class="classify">
            <span>会员编号：</span>
            <input type="text" placeholder="输入会员编号"/>
          </div>
          <div class="classify">
            <span>交易类型：</span>
            <select>
              <option>事业一部</option>
              <option>事业二部</option>
            </select>
          </div>
          <div class="classify">
            <span>交易金额：</span>
            <input type="text" style="width:100px;">    -      <input type="text" style="width:100px;"/>
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
        <div id="shop-btn">
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
          <el-button type="primary" icon="el-icon-delete">清空</el-button>
        </div>
    </div>
    <el-table  border style="width: 100%">
      <el-table-column prop="date" label="ID" width="100px"></el-table-column>
      <el-table-column prop="name" label="会员编号"></el-table-column>
      <el-table-column prop="date" label="交易类别"></el-table-column>
      <el-table-column prop="name" label="交易金额"></el-table-column>
      <el-table-column prop="date" label="账户余额"></el-table-column>
      <el-table-column prop="name" label="金额来源"></el-table-column>
      <el-table-column prop="date" label="备注" width="600px"></el-table-column>
      <el-table-column prop="name" label="时间"></el-table-column>
    </el-table>
    <table width="100%" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td>当前页小计：</td>
        <td>充值：20012</td>
        <td>扣币：-1051.35</td>
      </tr>
      <tr>
        <td>数据总计：</td>
        <td>充值：20012</td>
        <td>扣币：-1051.35</td>
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
#shop-top{
  height: 170px;
  background: #fff;
  border-radius: 10px;
  box-shadow:0px 0px 20px 0px rgba(48,115,248,0.1);
}
#shop-top h4{
  color: #53779D;
  font-size: 18px;
  margin: 24px 0 0 28px;
  float: left;
}
#shop-top mark{
  color: #53779D;
  font-size: 12px;
  margin: 24px 28px 0 0;
  float: right;
  background: #fff;
}
#shop-top #shop-form{
  width: 100%;
  float: left;
  margin-top: 10px;
  padding-left: 28px;
  box-sizing: border-box;
}
#shop-form .classify{
  margin-left: 28px;
  font-size: 14px;
  color: #666;
  float: left;
  margin-left: 80px;
  margin-top: 20px;
}
#shop-form .classify:nth-of-type(1){margin-left: 0;}
#shop-form .classify span{
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

#shop-top #shop-btn{
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
