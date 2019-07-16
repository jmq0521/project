<template>
  <div class="list">
     <div id="list-top">
        <h4>会员列表</h4>
        <mark>共有数据：101</mark>
        <div id="list-form">
          <div class="classify">
            <span>会员类型：</span>
            <select id="MemberType">
              <option v-for="item in MemberType" :value="item.id" :key="item.id">{{item.label}}</option>
            </select>
          </div>
          <div class="classify">
            <span>会员ID：</span>
            <input type="text" placeholder="输入会员ID"/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
          </div>
          <div class="classify">
            <span>手机号码：</span>
            <input type="text" placeholder="输入手机号码"/>
          </div>
          <div class="classify">
            <span>状态：</span>
            <select id="State">
              <option v-for="item in State" :value="item.id" :key="item.id">{{item.label}}</option>
            </select>
          </div>
          <div class="classify">
            <span>事业部：</span>
            <select id="Busin">
              <option v-for="item in Busin" :value="item.id" :key="item.id">{{item.label}}</option>
            </select>
          </div>
          <div class="classify">
            <span>会员姓名：</span>
            <input type="text" placeholder="输入会员姓名"/>
          </div>
          <div class="classify">
            <span>用户来源：</span>
            <select id="Source">
              <option v-for="item in Source" :value="item.id" :key="item.id">{{item.label}}</option>
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
        <div id="list-btn">
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
          <el-button type="primary" icon="el-icon-paperclip">导出</el-button>
          <el-button type="primary" icon="el-icon-delete">清空</el-button>
        </div>
    </div>
    <el-table ref="multipleTable"  tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange" border>
      <el-table-column type="selection"></el-table-column>
      <el-table-column label="会员名"></el-table-column>
      <el-table-column label="姓名"></el-table-column>
      <el-table-column label="联系人名"></el-table-column>
      <el-table-column label="账户"></el-table-column>
      <el-table-column label="级别"></el-table-column>
      <el-table-column label="是否有运营能力" width="120px"></el-table-column>
      <el-table-column label="推荐人手机号" width="120px"></el-table-column>
      <el-table-column label="推荐名额"></el-table-column>
      <el-table-column label="可提现金额" width="120px"></el-table-column>
      <el-table-column label="推荐名额"></el-table-column>
      <el-table-column label="已提现金额" width="120px"></el-table-column>
      <el-table-column label="加入时间"></el-table-column>
      <el-table-column label="状态"></el-table-column>
      <el-table-column label="积分商城"></el-table-column>
      <el-table-column label="事业部"></el-table-column>
      <el-table-column label="来源"></el-table-column>
      <el-table-column label="操作"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      msg: '',
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
      multipleSelection: [],
      //会员类型
      MemberType:[
        {
          value:'0',
          label:'采购商城'
        },
        {
          value:'1',
          label:'积分商城'
        },
      ],
      //状态
      State:[
        {
          value:'0',
          label:'所有'
        },
        {
          value:'1',
          label:'未审核'
        },
        {
          value:'2',
          label:'审核通过'
        },
        {
          value:'3',
          label:'审核未通过'
        },
        {
          value:'4',
          label:'审核中'
        },
      ],
      //所属事业部
      Busin:[
        {
          value:'0',
          label:'所属事业部'
        },
        {
          value:'1',
          label:'事业一部'
        },
        {
          value:'2',
          label:'事业二部'
        },
        {
          value:'3',
          label:'事业三部'
        },
        {
          value:'4',
          label:'事业四部'
        },
        {
          value:'5',
          label:'事业五部'
        },
        {
          value:'6',
          label:'事业六部'
        },
        {
          value:'7',
          label:'事业七部'
        },
        {
          value:'8',
          label:'事业八部'
        },
        {
          value:'9',
          label:'事业九部'
        },
        {
          value:'10',
          label:'网推事业部'
        },
      ],
      //用户来源
      Source:[
        {
          value:'1',
          label:'赠送名额'
        },
        {
          value:'2',
          label:'激活名额'
        },
      ],
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
#list-top{
  height: 250px;
  background: #fff;
  border-radius: 10px;
  box-shadow:0px 0px 20px 0px rgba(48,115,248,0.1);
}
#list-top h4{
  color: #53779D;
  font-size: 18px;
  margin: 24px 0 0 28px;
  float: left;
}
#list-top mark{
  color: #53779D;
  font-size: 12px;
  margin: 24px 28px 0 0;
  float: right;
  background: #fff;
}
#list-top #list-form{
  width: 100%;
  float: left;
  padding-left: 28px;
  box-sizing: border-box;
}
#list-form .classify{
  font-size: 14px;
  color: #666;
  float: left;
  margin-left: 300px;
  margin-top: 20px;
}
#list-form .classify:nth-of-type(1){margin-left: 0;}
#list-form .classify:nth-of-type(4){margin-left: 0;}
#list-form .classify:nth-of-type(7){margin-left: 0;}
#list-form .classify span{
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

#list-top #list-btn{
  width: 100%;
  float: left;
  margin-top: 15px;
  padding-left: 28px;
  box-sizing: border-box;
  text-align: right;
}


</style>
