<template>
  <div class="merch">
      <div class="pop">
        <span>商家名称：</span>
        <input type="text" />
      </div>
      <div class="pop">
        <span>商家分类：</span>
        <select>
          <option>轮播图</option>
          <option>广告图</option>
        </select>
      </div>
      <div class="pop">
        <span>手机：</span>
        <input type="text" />
      </div>
      <div class="pop">
        <span>负责人微信：</span>
        <input type="text" />
      </div>
      <div class="pop">
        <span>售后客服电话：</span>
        <input type="text" />
      </div>
      <div class="pop">
        <span>银行账号：</span>
        <input type="text" />
      </div>
      <div class="pop">
        <span>开户行：</span>
        <select>
          <option>选择银行</option>
          <option>选择开户行</option>
        </select>
      </div>
      <div class="pop">
        <span>商家网址：</span>
        <input type="text" />
      </div>
      <div class="pop">
        <span>主营产品：</span>
        <select>
          <option>选择银行</option>
          <option>选择开户行</option>
        </select>
      </div>
      <div class="pop">
        <span>所在地：</span>
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
      <div class="pop">
        <span>详细地址：</span>
        <input type="text" />
      </div>
      <div class="pop">
        <span>企业资质：</span>
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>
      <div class="pop">
        <span>供应商 LOGO：</span>
        <div style="display:inline-block">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handle">
            <img v-if="image" :src="image" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
      </div>
        <div class="pop">
        <span>商家提现方式：</span>
        <select>
          <option>选择银行</option>
          <option>选择开户行</option>
        </select>
      </div>
      <div class="pop">
        <span>商家提现比率：</span>
        <input type="text" />
      </div>
      <div class="pop">
        <span>商家提现倍数：</span>
        <input type="text" />
      </div>
     
      <div class="pop">
        <span>商家介绍：</span>
        <UE :defaultMsg=defaultMsg :config=config ref="ue" style="display:inline-block;"></UE>
      </div>
       <div id="btn" @click="dialogVisible = false">提交并发布</div>
  </div>
</template>

<script>
import UE from '../../components/ue/ue.vue';
export default {
  name: 'list',
  data () {
    return {
      defaultMsg: '',
      imageUrl: '',
      image:'',
      config: {
        initialFrameWidth: 1500,
        initialFrameHeight: 800,
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
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    handle(res, file) {
      this.image = URL.createObjectURL(file.raw);
    },

  }
}
</script>


<style scoped>
 .merch{background: #fff;float: left;width: 100%;}

.pop{
  width: 100%;
  margin-left: 10px;
  font-size: 14px;
  color: #666;
  display: block;
  margin-top: 20px;
}
.pop:nth-of-type(10) select{width: 145px;}

.pop span{
  text-align: right;
  margin-top: 2px;
  float: left;
  width: 140px;
  text-align: right;
}
.pop select{
  width:500px;
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
  width:500px;
  height:24px;
  background:rgba(255,255,255,1);
  border:1px solid rgba(191, 208, 226, 1);
  box-shadow:0px 3px 5px 0px rgba(48,115,248,0.1);
  border-radius:12px;
  outline: none;
  text-indent: 15px;
}
.pop textarea{
  width:400px;
  height:120px;
  background:rgba(255,255,255,1);
  border:1px solid rgba(191, 208, 226, 1);
  border-radius:12px;
  outline: none;
  color: #797979;
  text-indent: 10px;
  box-shadow:0px 3px 5px 0px rgba(48,115,248,0.1);
  resize:none;
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
  display: block;
}
#btn:hover{
  background: #53779D;
  color: #fff;
}



.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}


</style>
