<template>
  <div class="order">
     <div id="order-top">
        <h4>订单列表</h4>
        <mark>共有数据：101</mark>
        <div id="order-form">
          <div class="classify">
            <span>商品ID：</span>
            <input type="text" placeholder="输入商品ID"/>
          </div>
          <div class="classify">
            <span>商家ID：</span>
            <input type="text" placeholder="输入商家ID"/>
          </div>
          <div class="classify">
            <span>收货人：</span>
            <input type="text" placeholder="输入收货人姓名"/>
          </div>
          <div class="classify">
            <span>联系电话：</span>
            <input type="text" placeholder="输入联系电话"/>
          </div>
          <div class="classify">
            <span>来源ID：</span>
            <input type="text" placeholder="输入来源ID"/>
          </div>
          <div class="classify">
            <span>订单号：</span>
            <input type="text" placeholder="输入订单号"/>
          </div>
          <div class="classify">
            <span>事业部：</span>
            <select>
              <option>事业一部</option>
              <option>事业二部</option>
            </select>
          </div>
          <div class="classify">
            <span>订单类型：</span>
            <select>
              <option>事业一部</option>
              <option>事业二部</option>
            </select>
          </div>
          <div class="classify">
            <span>供货商：</span>
            <select>
              <option>事业一部</option>
              <option>事业二部</option>
            </select>
          </div>
          <div class="classify">
            <span>交易状态：</span>
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
          <div class="classify">
            <span>发货日期：</span>
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
        <div id="order-btn">
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
          <el-button type="primary" icon="el-icon-delete">清空</el-button>
          <el-button type="primary" icon="el-icon-circle-close">批量删除</el-button>
        </div>
    </div>
    <table class="t-head">
       <thead>
        <tr>
          <th width="300">商品</th>
          <th width="120">规格</th>
          <th width="120">单价(元)</th>
          <th width="120">数量</th>
          <th width="120">实付款</th>
          <th width="200">支付宝微信订单</th>
          <th width="200">供货商</th>
          <th width="300">订单信息</th>
          <th width="100">物流信息</th>
          <th width="100">交易状态</th>
        </tr>
      </thead>
    </table>


    <table  border="0" cellspacing="0" cellpadding="0" class="table">
      <thead>
        <tr width="100%">
          <th>wwwww</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td width="150">行业</td>
          <td width="850">公司</td>
          <td width="150">是否合作</td>
          <td width="150">时间</td>
          <td width="150">行业</td>
          <td width="150">是否合作</td>
          <td width="150">时间</td>
        </tr>   
      </tbody>
    
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
      multipleSelection: [],
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
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
}
</script>


<style scoped>
#order-top{
  height: 280px;
  background: #fff;
  border-radius: 10px;
  box-shadow:0px 0px 20px 0px rgba(48,115,248,0.1);
}
#order-top h4{
  color: #53779D;
  font-size: 18px;
  margin: 24px 0 0 28px;
  float: left;
}
#order-top mark{
  color: #53779D;
  font-size: 12px;
  margin: 24px 28px 0 0;
  float: right;
  background: #fff;
}
#order-top #order-form{
  width: 100%;
  float: left;
  margin-top: 10px;
  padding-left: 28px;
  box-sizing: border-box;
}
#order-form .classify{
  font-size: 14px;
  color: #666;
  float: left;
  margin-top: 15px;
  margin-left:300px;
}
#order-form .classify:nth-of-type(1){margin-left: 0px;}
#order-form .classify:nth-of-type(4){margin-left: 0px;}
#order-form .classify:nth-of-type(7){margin-left: 0px;}
#order-form .classify:nth-of-type(10){margin-left: 0px;}
#order-form .classify:nth-of-type(12){margin-left: 108px;}
#order-form .classify span{
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

#order-top #order-btn{
  width: 100%;
  float: left;
  margin-top: 20px;
  padding-left: 28px;
  box-sizing: border-box;
  text-align: right;
}

.t-head{
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  margin-top: 20px;
  display: block;
  border-collapse:collapse;
  background: #fff;
  border-radius: 5px;
  box-shadow:0px 3px 5px 0px rgba(48,115,248,0.1);
  color: #53779D;
}

.table{
  width: 100%;
  height: 130x;
  display: block;
  border-collapse:collapse;
  margin-top:15px;
  border: 1px solid #eee;
}
.table thead{border-bottom: 1px solid #eee;height: 35px;display: block;line-height: 35px;background-color: #f5fafe;}
.table thead tr th{font-weight: normal;}
.table td{
  height: 95px;
  text-align: center;
  border-collapse:collapse;
  border-right: 1px solid #eee;
  background: #fff;
}
.table td:nth-of-type(7){border-right: none;}


</style>
