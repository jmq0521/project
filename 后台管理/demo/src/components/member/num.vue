<template>
  <div class="num">
    <div id="num-top">
      <h4>名额优惠</h4>
      <mark>共有数据：101</mark>
      <div id="num-btn">
        <el-button type="primary" icon="el-icon-circle-plus-outline" @click="dialogVisible = true">添加优惠方案</el-button>
      </div>
    </div>
    <el-table border style="width: 100%">
      <el-table-column prop="name" label="ID"></el-table-column>
      <el-table-column prop="date" label="方案名称"></el-table-column>
      <el-table-column prop="date" label="级别名称"></el-table-column>
      <el-table-column prop="name" label="购买的级别名称"></el-table-column>
      <el-table-column prop="name" label="状态"></el-table-column>
      <el-table-column prop="name" label="操作"></el-table-column>
    </el-table>

    <el-pagination
      background
      layout="prev, pager, next"
      :total="100">
    </el-pagination>

    <el-dialog
      title="首页 > 会员管理 > 添加购买名额优惠方案"
      top="200px"
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
      width="40%">
      <div class="pop">
        <span>商家级别：</span>
        <select id="Busin">
          <option v-for="item in Busin" :value="item.id" :key="item.id">{{item.label}}</option>
        </select>
      </div>
      <div class="pop">
        <span>商家购买的级别：</span>
        <select id="BusinType">
          <option v-for="item in BusinType" :value="item.id" :key="item.id">{{item.label}}</option>
        </select>
      </div>
      <div class="pop">
        <span>方案名称：</span>
        <input type="text" />
      </div>
      <div class="pop">
        <span>状态：</span>
        <input type="radio" id="one" value="1" v-model="type" style="height:12px;width:12px;">
        <label for="one">开启</label>
        <input type="radio" id="two" value="2" v-model="type" style="height:12px;width:12px;margin-left:15px;">
        <label for="two">关闭</label>
      </div>
      <span slot="footer" class="dialog-footer">
       <div id="btn" @click="dialogVisible = false">提交并发布</div>
      </span>
    </el-dialog>

  </div>
</template>

<script>
export default {
  name: 'num',
  data () {
    return {
      dialogVisible: false,
      //商家级别
      Busin:[
        {
          value:'0',
          label:'企业联盟版'
        },
        {
          value:'1',
          label:'市场中心'
        },
      ],
      //商家购买的级别
      BusinType:[
        {
          value:'0',
          label:'企业标准版'
        },
        {
          value:'1',
          label:'企业至尊版'
        },
        {
          value:'0',
          label:'企业联盟版'
        },
        {
          value:'1',
          label:'市场中心'
        },
      ],
      type:''
    }
  },
  methods:{
     
  }
}
</script>


<style scoped>
#num-top{
  height: 110px;
  background: #fff;
  border-radius: 10px;
  box-shadow:0px 0px 20px 0px rgba(48,115,248,0.1);
}
#num-top h4{
  margin: 24px 0 0 28px;
  color: #53779D;
  font-size: 20px;
  margin-left:28px;
  float: left;
  cursor: pointer;
}
#num-top mark{
  margin: 24px 28px 0 0;
  color: #53779D;
  font-size: 12px;
  margin-right: 28px;
  float: right;
  background: #fff;
}
#num-top #num-btn{
  width: 100%;
  float: left;
  padding-left: 28px;
  box-sizing: border-box;
  text-align: left;
  margin-top: 20px;
}


.pop{
  margin-left: 30px;
  font-size: 14px;
  color: #666;
  float: left;
  margin-top: 20px;
}
.pop:nth-of-type(2){margin-left: 200px;}
.pop:nth-of-type(4){margin-left: 200px;}
.pop:nth-of-type(4) span{margin-top: -1px;}


.pop span{
  float: left;
  text-align: right;
  margin-top: 2px;
}
.pop select{
  width:150px;
  height:24px;
  background:rgba(255,255,255,1);
  border:1px solid rgba(191, 208, 226, 1);
  border-radius:12px;
  outline: none;
  color: #797979;
  text-indent: 10px;
  box-shadow:0px 3px 5px 0px rgba(48,115,248,0.1);
}
.pop input{
  width:150px;
  height:24px;
  background:rgba(255,255,255,1);
  border:1px solid rgba(191, 208, 226, 1);
  box-shadow:0px 3px 5px 0px rgba(48,115,248,0.1);
  border-radius:12px;
  outline: none;
  text-indent: 15px;
}


#btn{
  width:120px;
  height:25px;
  line-height: 25px;
  background:rgba(255,255,255,1);
  border:1px solid rgba(191, 208, 226, 1);
  border-radius:12px;
  outline: none;
  box-shadow:0px 3px 5px 0px rgba(48,115,248,0.1);
  text-align: center;
  font-size: 14px;
  margin: 15px auto;
  cursor: pointer;
  color: #53779D;
}
#btn:hover{
  background: #53779D;
  color: #fff;
}
</style>
