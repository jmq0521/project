<template>
  <div class="mark">
    <div id="mark-top">
      <h4>添加市场中心会员</h4>
    </div>
    <form>
      <div><span><mark>*</mark>用户名：</span><input type="text" autocomplete="off" placeholder="请输入手机号"/></div>
      <div><span><mark>*</mark>密码：</span><input type="text" autocomplete="off"/></div>
      <div><span><mark>*</mark>确认密码：</span><input type="text" autocomplete="off"/></div>
      <div><span><mark>*</mark>商家名称：</span><input type="text" autocomplete="off"/></div>
      <div><span><mark>*</mark>负责人：</span><input type="text" autocomplete="off"/></div>
      <div><span><mark>*</mark>手机号：</span><input type="text" autocomplete="off"/></div>
      <div><span><mark>*</mark>所属类别：</span>
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select> --
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
      <div><span><mark>*</mark>人均消费：</span><input type="text" autocomplete="off" placeholder="请输入人均消费"/></div>
      <div>
        <span> <mark>*</mark>营业时间</span>
        <el-time-select
          placeholder="起始时间"
          style="margin:1px 0 0 0;"
          v-model="startTime"
          :picker-options="{
            start: '00:00',
            step: '00:15',
            end: '24:00'
          }">
        </el-time-select>
        <el-time-select
          placeholder="结束时间"
          style="margin:1px 0 0 -55px;"
          v-model="endTime"
          :picker-options="{
            start: '00:00',
            step: '00:15',
            end: '24:00',
          }">
        </el-time-select>
      </div>
      <div><span><mark>*</mark>所在地区：</span>
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select> --
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select> --
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
      <div><span><mark>*</mark>详细地址：</span><input type="text" autocomplete="off" /></div>
      <div><span><mark>*</mark>事业部：</span>
        <select id="Busin">
          <option v-for="item in Busin" :value="item.id" :key="item.id">{{item.label}}</option>
        </select>
      </div>
      <div><span><mark>*</mark>是否是城市代理：</span>
        <select id="Agent">
         <option v-for="item in Agent" :value="item.id" :key="item.id">{{item.label}}</option>
        </select>
      </div>
      <div id="btn">确认添加</div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'addmark',
  data () {
    return {
      startTime: '',
      endTime: '',
      //所属事业部
      Busin:[
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
      //是否城市代理
      Agent:[
        {
          value:'1',
          label:'是'
        },
        {
          value:'2',
          label:'否'
        },
      ],
    }
  },
  methods:{
   
  }
}
</script>

<style scoped>
#mark-top{
  height: 50px;
  background: #fff;
  border-radius: 10px;
  box-shadow:0px 0px 20px 0px rgba(48,115,248,0.1);
}
#mark-top h4{
  height: 100%;
  line-height: 50px;
  color: #53779D;
  font-size: 15px;
  margin-left:28px;
  float: left;
  cursor: pointer;
}

.mark form{
  width: 100%;
  height: 800px;
  border-radius: 10px;
  background: #fff;
  margin-top: 20px;
  padding-left: 200px;
  box-sizing: border-box;
}


form div{
  font-size: 14px;
  color: #313131;
  margin-top: 20px;
  float: left;
  width: 100%;
  height: 30px;
}

form div span{width: 130px;float: left;margin-top:2px;}
form div span mark{color: #ff0000;background: #fff;float: left;margin-top: 2px;}
form div input{
  width:800px;
  height:26px;
  background:rgba(255,255,255,1);
  border:1px solid rgba(191, 208, 226, 1);
  border-radius:12px;
  outline: none;
  color: #797979;
  box-shadow:0px 3px 5px 0px rgba(48,115,248,0.1);
  text-indent: 10px;
}
form div select{
  width: 145px;
  background:rgba(255,255,255,1);
  border:1px solid rgba(191, 208, 226, 1);
  border-radius:12px;
  outline: none;
  color: #797979;
  box-shadow:0px 3px 5px 0px rgba(48,115,248,0.1);
  text-indent: 10px;
  height:26px;
}
#btn{
  width: 150px;
  height: 30px;
  line-height: 30px;
  background: #53779D;
  color: #fff;
  text-align: center;
  border-radius: 20px;
  margin: 50px 0 0 300px;
  cursor: pointer;
}



</style>
