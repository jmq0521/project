<template>
  <div class="info">
     <div id="info-top">
        <h4>资讯列表</h4>
        <mark>共有数据：101</mark>
        <div id="info-form">
          <div class="classify">
            <span>用户ID：</span>
            <input type="text" placeholder="输入会员编号"/>
          </div>
          <div class="classify">
            <span>新闻分类：</span>
            <select>
              <option>事业一部</option>
              <option>事业二部</option>
            </select>
          </div>
          <div class="classify">
            <span>发布状态：</span>
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
        <div id="info-btn">
          <el-button type="primary" icon="el-icon-circle-plus-outline" @click="$router.push('/Addinfo')">添加资讯</el-button>
          <el-button type="primary" icon="el-icon-circle-close">批量删除</el-button>
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

    <el-pagination
      background
      layout="prev, pager, next"
      :total="100">
    </el-pagination>
  </div>
</template>

<script>
import UE from '../../components/ue/ue.vue';
export default {
  name: 'list',
  data () {
    return {
      defaultMsg: '',
      dialogVisible:false,
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
      config: {
        initialFrameWidth: null,
        initialFrameHeight: 700
      }

    }
  },
  components: {UE},
  methods:{
    getUEContent() {
        let content = this.$refs.ue.getUEContent();
        this.$notify({
          title: '获取成功，可在控制台查看！',
          message: content,
          type: 'success'
        });
        console.log(content)
      }

  }
}
</script>


<style scoped>
#info-top{
  height: 170px;
  background: #fff;
  border-radius: 10px;
  box-shadow:0px 0px 20px 0px rgba(48,115,248,0.1);
}
#info-top h4{
  color: #53779D;
  font-size: 18px;
  margin: 24px 0 0 28px;
  float: left;
}
#info-top mark{
  color: #53779D;
  font-size: 12px;
  margin: 24px 28px 0 0;
  float: right;
  background: #fff;
}
#info-top #info-form{
  width: 100%;
  float: left;
  margin-top: 10px;
  padding-left: 28px;
  box-sizing: border-box;
}
#info-form .classify{
  font-size: 14px;
  color: #666;
  float: left;
  margin-top: 15px;
  margin-left: 30px;
}
#info-form .classify:nth-of-type(1){margin-left: 0px;}
#info-form .classify span{
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

#info-top #info-btn{
  width: 100%;
  float: left;
  margin-top: 20px;
  padding-left: 28px;
  box-sizing: border-box;
  text-align: right;
}


</style>
