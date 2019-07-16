<template>
  <div class="banner">

    <div id="banner-top">
      <h4>Banner列表</h4>
      <mark>共有数据：101</mark>
      <div id="banner-btn">
        <el-button type="primary" icon="el-icon-circle-plus-outline" @click="dialogVisible = true">添加Banner</el-button>
      </div>
    </div>

    <el-table border style="width: 100%">
      <el-table-column prop="name" label="ID" width="100px"></el-table-column>
      <el-table-column prop="date" label="商品ID"></el-table-column>
      <el-table-column prop="date" label="商品名称" width="700px"></el-table-column>
      <el-table-column prop="name" label="商品图片"></el-table-column>
      <el-table-column prop="name" label="banner 类型"></el-table-column>
      <el-table-column prop="date" label="PC banner 展示位置" width="200px"></el-table-column>
      <el-table-column prop="name" label="排序"></el-table-column>
      <el-table-column prop="name" label="操作"></el-table-column>
    </el-table>

    <el-pagination
      background
      layout="prev, pager, next"
      :total="100">`  
    </el-pagination>

    <el-dialog
      title="首页 > Banner 管理 > 添加 Banner"
      top="200px"
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
      width="40%">
      <div class="pop">
        <span>商品 ID：</span>
        <input type="text"  placeholder="请输入商品ID"/>
      </div>
      <div class="pop">
        <span>Banner 类型：</span>
        <select id="BannerType">
          <option v-for="item in BannerType" :value="item.id" :key="item.id">{{item.label}}</option>
        </select>
      </div>
      <div class="pop">
        <span>PC banner 显示位置：</span>
          <select id="BannerPlace">
          <option v-for="item in BannerPlace" :value="item.id" :key="item.id">{{item.label}}</option>
        </select>
      </div>
      <div class="pop">
        <span>Banner 图片：</span>
        <div style="float:left;">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
      </div>
      <div class="pop">
        <span>商品排序：</span>
        <input type="text" />
      </div>
      <span slot="footer" class="dialog-footer">
        <div id="btn" @click="dialogVisible = false">提交并发布</div>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'banner',
  data () {
    return {
      //banner类型
      BannerType:[
        {
          value:'0',
          label:'PC banner'
        },
        {
          value:'1',
          label:'App banner'
        },
      ],
      //banner位置
      BannerPlace:[
        {
          value:'0',
          label:'App banner 无位置'
        },
        {
          value:'1',
          label:'PC 顶部'
        },
        {
          value:'2',
          label:'PC 底部'
        },
      ],
      dialogVisible: false,
      imageUrl: ''
    }
  },
  methods:{
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
  }
}
</script>


<style scoped>
#banner-top{
  height: 110px;
  background: #fff;
  border-radius: 10px;
  box-shadow:0px 0px 20px 0px rgba(48,115,248,0.1);
}
#banner-top h4{
  margin: 24px 0 0 28px;
  color: #53779D;
  font-size: 20px;
  margin-left:28px;
  float: left;
  cursor: pointer;
}
#banner-top mark{
  margin: 24px 28px 0 0;
  color: #53779D;
  font-size: 12px;
  margin-right: 28px;
  float: right;
  background: #fff;
}
#banner-top #banner-btn{
  width: 100%;
  float: left;
  padding-left: 28px;
  box-sizing: border-box;
  text-align: left;
  margin-top: 20px;
}




.pop{
  margin-left: 50px;
  font-size: 14px;
  color: #666;
  float: left;
  margin-top: 20px;
}
.pop span{
  width: 150px;
  float: left;
  text-align: right;
  margin-top: 2px;
}
.pop select{
  width:400px;
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
  width:400px;
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
