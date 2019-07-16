<template>
  <el-container>
    <el-header>
      <div id="logo" @click="$router.push('/index')">企铛铛后台管理系统</div>
      <ul id="ul-li">
        <li>{{$route.name}}</li>
      </ul>
    
      <ul id="li-ul">
        <li>管理者ID<i class="iconfont">&#xe62f;</i>
          <ul>
            <li>个人信息</li>
            <li>修改密码</li>
            <li>退出</li>
          </ul>
        </li>
      </ul>
      <p>您的位置：{{$route.name}}</p>
    </el-header>
    
    <el-container style="min-height:900px">
      <el-aside width="200px">
        <el-menu>
          <el-submenu index="1">
            <template slot="title">
            <div style="float:left;width:30px;margin-right:5px;"><img src="../../image/icon1.png" /></div>
              会员管理
            </template>
            <el-menu-item index="1-1" @click="$router.push('/list')">会员列表</el-menu-item>
            <el-menu-item index="1-2" @click="$router.push('/grade')">级别配置</el-menu-item>
            <el-menu-item index="1-3" @click="$router.push('/reco')">推荐名额流水</el-menu-item>
            <el-menu-item index="1-4" @click="$router.push('/buy')">名额购买记录</el-menu-item>
            <el-menu-item index="1-5">推荐关系图</el-menu-item>
            <el-menu-item index="1-6">推荐关系树状图</el-menu-item>
            <el-menu-item index="1-7" @click="$router.push('/addMark')">添加市场中心会员</el-menu-item>
            <el-menu-item index="1-8" @click="$router.push('/rech')">充值保证金记录</el-menu-item>
            <el-menu-item index="1-9" @click="$router.push('/line')">线下支付凭证</el-menu-item>
            <el-menu-item index="1-10" @click="$router.push('/busin')">事业部列表</el-menu-item>
            <el-menu-item index="1-11" @click="$router.push('/deposit')">申请提现列表</el-menu-item>
            <el-menu-item index="1-12" @click="$router.push('/order')">推荐名额订单</el-menu-item>
            <el-menu-item index="1-13" @click="$router.push('/mark')">市场中心会员行业分类</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
            <div style="float:left;width:30px;margin-right:5px;"><img src="../../image/icon2.png"/></div>
              Banner管理
            </template>
            <el-menu-item index="2-1" @click="$router.push('/banner')">Banner列表</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
            <div style="float:left;width:30px;margin-right:5px;"><img src="../../image/icon3.png"/></div>
              协议管理
            </template>
            <el-menu-item index="3-1" @click="$router.push('/agree')">协议列表</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
            <div style="float:left;width:30px;margin-right:5px;"><img src="../../image/icon4.png"/></div>
              楼层管理
            </template>
            <el-menu-item index="4-1" @click="$router.push('/floor')">楼层列表</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
            <div style="float:left;width:30px;margin-right:5px;"><img src="../../image/icon5.png"/></div>
              广告管理
            </template>
            <el-menu-item index="5-1" @click="$router.push('/adv')">广告分组</el-menu-item>
            <el-menu-item index="5-2" @click="$router.push('/advList')">广告列表</el-menu-item>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
            <div style="float:left;width:30px;margin-right:5px;"><img src="../../image/icon6.png"/></div>
              统计销售
            </template>
            <el-menu-item index="6-1" @click="$router.push('/stat')">产品统计</el-menu-item>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title">
            <div style="float:left;width:30px;margin-right:5px;"><img src="../../image/icon7.png"/></div>
              交易管理
            </template>
            <el-menu-item index="7-1" @click="$router.push('/shop')">购物记录</el-menu-item>
          </el-submenu>
          <el-submenu index="8">
            <template slot="title">
            <div style="float:left;width:30px;margin-right:5px;"><img src="../../image/icon8.png"/></div>
              帮助中心
            </template>
            <el-menu-item index="8-1" @click="$router.push('/info')">资讯列表</el-menu-item>
            <el-menu-item index="8-2" @click="$router.push('/infoClas')">资讯分类</el-menu-item>
            <el-menu-item index="8-3" @click="$router.push('/infoShow')">资讯展示</el-menu-item>
          </el-submenu>
          <el-submenu index="9">
            <template slot="title">
            <div style="float:left;width:30px;margin-right:5px;"><img src="../../image/icon9.png"/></div>
              商品管理
            </template>
            <el-menu-item index="9-1" @click="$router.push('/goodsList')">商品列表</el-menu-item>
            <el-menu-item index="9-2" @click="$router.push('/goodsClas')">商品分类</el-menu-item>
          </el-submenu>
          <el-submenu index="10">
            <template slot="title">
            <div style="float:left;width:30px;margin-right:5px;"><img src="../../image/icon10.png" /></div>
              订单管理
            </template>
            <el-menu-item index="10-1" @click="$router.push('/orderList')">订单列表</el-menu-item>
            <el-menu-item index="10-2">处理订单</el-menu-item>
          </el-submenu>
          <el-submenu index="11">
            <template slot="title">
            <div style="float:left;width:30px;margin-right:5px;"><img src="../../image/icon11.png"/></div>
              商家管理
            </template>
            <el-menu-item index="11-1" @click="$router.push('merchList')">商家列表</el-menu-item>
            <el-menu-item index="11-2" @click="$router.push('merchShop')">商家结算记录</el-menu-item>
            <el-menu-item index="11-3" @click="$router.push('merchDepo')">商家提现</el-menu-item>
            <el-menu-item index="11-4" @click="$router.push('merchType')">商家类型</el-menu-item>
          </el-submenu>
          <el-submenu index="12">
            <template slot="title">
            <div style="float:left;width:30px;margin-right:5px;"><img src="../../image/icon12.png"/></div>
              系统管理
            </template>
            <el-menu-item index="12-1">分组管理</el-menu-item>
            <el-menu-item index="12-2">节点管理</el-menu-item>
            <el-menu-item index="12-3">角色管理</el-menu-item>
            <el-menu-item index="12-4">用户管理</el-menu-item>
            <el-menu-item index="12-5">节点图</el-menu-item>
            <el-menu-item index="12-6">操作日志</el-menu-item>
            <el-menu-item index="12-7">登录日志</el-menu-item>
            <el-menu-item index="12-8">系统管理</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "index",
  data(){
    return{
    
    }
  },
  methods:{

  },

  mounted(){
    
  }
}
</script>

<style scoped>
  .el-header{
    background-color: #fff;
    color: #333;
    line-height: 60px;
    padding: 0;
  }
  .el-header #logo{
    width: 200px;
    height: 100%;
    background: #ECF3FF;
    line-height: 60px;
    text-align: center;
    font-size: 16px;
    font-weight: 400px;
    color: #2F4B76;
    float: left;
    cursor: pointer;
  }
  .el-header #ul-li{
    float: left;
    width: 325px;
    height: 100%;
    margin-left: 15px;
  }
  .el-header #ul-li li{
    float: left;
    height: 25px;
    margin-left: 12px;
    margin-top: 17px;
    line-height: 25px;
    border-radius: 25px;
    color: #FFF;
    background:#759BCF;
    font-size:12px;
    font-weight: 400px;
    cursor: pointer;
    padding-left: 15px;
    padding-right: 15px;
    box-sizing: border-box;
  }

  .el-header p{
    height:12px;
    font-size:12px;
    font-weight:400;
    color:rgba(153,153,153,1);
    line-height:60px;
    float: right;
   
  } 

  .el-header #li-ul{
    width:130px;
    height:60px;
    float: right;
    font-size:14px;
    text-align: center;
    position: relative;
    cursor: pointer;
    margin-left: 30px;
    margin-right: 25px;
  }
  #li-ul li{
    width: 100%;
    height: 100%;
    color:rgba(153,153,153,1);
  }

  #li-ul li:hover{
    background:rgba(248,250,254,1);
    color: #53779D;
  }
  #li-ul li:hover ul{display: block}
  .el-header #li-ul ul{
    width:130px;
    height:120px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(238,238,238,1);
    box-shadow:0px 3px 5px 0px rgba(0, 0, 0, 0.1);
    border-radius:0px 0px 5px 5px;
    position: absolute;
    top: 60px;
    left: 0;
    display: none;
    z-index: 10000;
  }
  .el-header #li-ul ul li{
    height: 39px;
    line-height: 39px;
    text-align: center;
    color: #666;
    font-size: 14px;
    border-bottom: 1px solid rgba(243,243,243,1);
  }
   .el-header #li-ul i{
    font-size: 12px;
    font-weight: normal;
    margin-left: 2px;
    color: #53779D;
  }





  .el-aside {
    line-height: 200px;
    text-align:left;
    color: #A3AABA;
    /* height:1050px;
    overflow: auto; */
  }
  .el-menu{border-right: none;}
  
  .el-main {background-color: #F5F5F5;color: #4D5B7E;border-top: 1px solid rgba(185,187,255,1);}
  
  body > .el-container {
    margin-bottom: 40px;
  }
  

</style>
