<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import './iconfont/iconfont.css'
export default {
  name: 'App'
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    list-style: none;
    font-family:'PingFangSC-Regular';
  }
  /* 表格 */
  .el-table{
    border-radius: 10px;
    margin-top: 20px;
    color: #999;
  }

  .el-table th {
    background-color: #f5fafe;
    color:#53779D;
  }
  .el-table td, .el-table th.is-leaf {
    text-align: center;
  }



  /* 侧边栏一级导航 */
  .el-submenu__title {
    color: #4D5B7E;
    font-weight: bold;
    padding: 0 40px !important;
  }
  
  /* 侧边栏二级导航 */
  .el-submenu .el-menu-item {
    color: #A3AABA;
    text-align: left;
    font-size: 14px;
  }
  .el-menu-item.is-active {
    color: #4D5B7E;
    background: #fff;
  }


  /* 日期 */
  .el-input__inner{
    width:150px;
    height:24px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(191, 208, 226, 1);
    border-radius:12px;
    outline: none;
    color: #797979;
    box-shadow:0px 3px 5px 0px rgba(48,115,248,0.1);
  }
  .el-input__icon {line-height: 25px;}
  .el-input__suffix {right: 75px;}
  /* 时间 */
  .el-icon-time {margin-top: -2px;}

  /* 按钮 */
  .el-button {
    cursor: pointer;
    background: #FFF;
    color: #53779D;
    text-align: center;
    padding: 0 10px 0 10px;
    box-sizing: border-box;
    font-size: 14px;
    height:24px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(191, 208, 226, 1);
    border-radius:12px;
    margin-right: 10px;
    margin-left: 10px;
  }
  .el-button--primary:focus, .el-button--primary:hover {
    background: #53779D;
    border-color: #fff;
    color: #FFF;
  }




  /* 分页 */
  .el-pagination{
    margin-top: 20px;
    float: right;
  }
  .el-pagination.is-background .el-pager li {
    margin: 0 5px;
    background-color: #fff;
    color: #666;
    min-width: 30px;
    border-radius: 50%;
    font-weight: normal;
  }
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #53779D;
    color: #FFF;
    box-shadow:0px 3px 10px 0px rgba(48,115,248,0.1);
  }



  /* 弹框 */
  .el-dialog__title {
    line-height: 24px;
    font-size: 15px;
    color: #333;
  }
  .el-dialog__body {
    padding: 5px 15px;
    color: #606266;
    font-size: 14px;
    max-height: 700px;
    min-height: 280px;
    overflow: auto;
  }


  /* 上传图片 */
  .el-upload{border: 1px solid #eee;}
</style>
