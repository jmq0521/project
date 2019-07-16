<template>
  <div class="depo">
     <div id="depo-top">
        <h4>申请提现列表</h4>
        <mark>共有数据：101</mark>
        <div id="depo-form">
          <div class="classify">
            <span>银行卡号：</span>
            <input type="text" placeholder="收款方银行卡号"/>
          </div>
          <div class="classify">
            <span>收款人：</span>
            <input type="text" placeholder="收款人姓名"/>
          </div>
          <div class="classify">
            <span>开户行：</span>
            <input type="text" placeholder="开户行"/>
          </div>
          <div class="classify">
            <span>审核状态：</span>
            <select id="State">
              <option>请选择</option>
              <option v-for="item in State" :value="item.id" :key="item.id">{{item.label}}</option>
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
        <div id="depo-btn">
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
          <el-button type="primary" icon="el-icon-delete">清空</el-button>
        </div>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="name" label="ID" width="60px"></el-table-column>
      <el-table-column prop="date" label="UID" width="80px"></el-table-column>
      <el-table-column prop="date" label="商家提现当前的余额" width="150px"></el-table-column>
      <el-table-column prop="name" label="商家提现的上一次余额" width="180px"></el-table-column>
      <el-table-column prop="date" label="备注"></el-table-column>
      <el-table-column prop="name" label="订单号"></el-table-column>
      <el-table-column prop="date" label="提现金额"></el-table-column>
      <el-table-column prop="name" label="收款方银行卡号" width="150px"></el-table-column>
      <el-table-column prop="date" label="收款方用户名"></el-table-column>
      <el-table-column prop="name" label="收款方开户行"></el-table-column>
      <el-table-column prop="name" label="审核状态"></el-table-column>
      <el-table-column prop="date" label="添加时间"></el-table-column>
      <el-table-column prop="name" label="操作"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'depo',
  data () {
    return {
      //状态
      State:[
        {
          value:'1',
          label:'提现成功'
        },
        {
          value:'2',
          label:'审核中'
        },
        {
          value:'3',
          label:'审核通过'
        },
        {
          value:'4',
          label:'交易失败'
        },
        {
          value:'5',
          label:'审核不通过'
        },
      ],
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
#depo-top{
  height: 200px;
  background: #fff;
  border-radius: 10px;
  box-shadow:0px 0px 20px 0px rgba(48,115,248,0.1);
}
#depo-top h4{
  color: #53779D;
  font-size: 18px;
  margin: 24px 0 0 28px;
  float: left;
}
#depo-top mark{
  color: #53779D;
  font-size: 12px;
  margin: 24px 28px 0 0;
  float: right;
  background: #fff;
}
#depo-top #depo-form{
  width: 100%;
  float: left;
  padding-left: 28px;
  box-sizing: border-box;
}
#depo-form .classify{
  margin-left: 28px;
  font-size: 14px;
  color: #666;
  float: left;
  margin-left: 300px;
  margin-top: 20px;
}
#depo-form .classify:nth-of-type(1){margin-left: 0;}
#depo-form .classify:nth-of-type(4){margin-left: 0;}
#depo-form .classify:nth-of-type(7){margin-left: 0;}
#depo-form .classify span{
  width: 80px;
  float: left;
  text-align: right;
  margin-top: 2px;
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

#depo-top #depo-btn{
  width: 100%;
  float: left;
  margin-top: 15px;
  padding-left: 28px;
  box-sizing: border-box;
  text-align: right;
}


</style>
