<template>
  <div id="login">
    <div id="login-bg">
      <div id="head" @click="$router.push('/index')">商城v1.0后台管理系统  |  简体中文</div>
      <div id="form">
        <form>
          <p>
            <mark>企铛铛</mark>
            <span>商城v1.0后台管理系统</span>
          </p>
          <input type="text" placeholder="|   请输入用户名"/>
          <input type="password" placeholder="|   请输入密码"/>
          <input type="text" placeholder="请输入验证码"/>
          <input type="button" @click="createdCode" class="verification" v-model="checkCode" /> 
          <div id="btn" @click="$router.push('/index')">登录</div>
        </form>
        <p>copyright 2017 by 企铛铛（北京）科技有限公司</p>

      </div>
    
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      code:'',
      checkCode:'',                   
      picVerification:''
    }
  },
  created(){
    this.createdCode()
  },
  methods:{
     createdCode(){      // 先清空验证码输入      
        this.code = ""      
        this.checkCode = ""      
        this.picVerification = ""      // 验证码长度      
        const codeLength = 4      // 随机数      
        const random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z')      
        for(let i = 0;i < codeLength;i++){        // 取得随机数的索引(0~35)        
          let index = Math.floor(Math.random() * 36)        // 根据索引取得随机数加到code上        
          this.code += random[index]      
        }      // 把code值赋给验证码      
        this.checkCode = this.code    
     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#login{position: relative;}
#login-bg{
  position:fixed;
  top: 0;
  left: 0;
  width:100%;
  height:100%;
  min-width: 1000px;
  z-index:-10;
  zoom: 1;
  background-image: url(../../image/login-bj.png);
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
}
#login-bg #head{
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: right;
  color: #fff;
  font-size: 16px;
  background: rgba(0,0,0,.3);
  padding-right: 50px;
  box-sizing: border-box;
}
#login-bg #form{
  width:486px;
  position: absolute;
  top: 20%;
  right: 18%;
}
#form form{
  width:486px;
  height:489px;
  background:rgba(255,255,255,1);
  box-shadow:0px 4px 10px 5px rgba(0, 0, 0, 0.1);
  border-radius:27px;
}
form p{
  width: 100%;
  height: 105px;
  line-height: 105px;
  border-bottom: 1px solid rgba(69,111,234,0.3);
  text-align: center;
}
form p mark{
  background: #fff;
  color: #3C4DFD;
  font-size: 30px;
  margin-right: 20px;
  font-weight: bold;
}
form p span{
  color: #666;
  font-size: 22px;
}

form input{
  width:377px;
  height:50px;
  line-height: 50px;
  background:rgba(255,255,255,1);
  border:1px solid rgba(30, 133, 255, 1);
  box-shadow:0px 2px 10px 0px rgba(60,77,253,0.2);
  opacity:0.84;
  border-radius:25px;
  margin: 35px auto;
  display: block;
  outline: none;
  font-size: 20px;
  color: #D8D6D6;
  text-indent: 50px;
}

#form input:nth-of-type(1){background: url("../../image/input01.png") no-repeat 20px center;background-size:20px 20px;}
#form input:nth-of-type(2){background: url("../../image/input02.png") no-repeat 20px center;background-size:20px 20px;}

form input:nth-of-type(3){
  width:178px;
  height:50px;
  background:rgba(255,255,255,1);
  border:1px solid rgba(200, 202, 206, 1);
  opacity:0.84;
  border-radius:25px;
  text-align: center;
  text-indent: 0px;
  margin-left: 55px;
  display: inline-block;
  margin-top: 0;
  margin-bottom: 0;
}
form input:nth-of-type(4){
  width:178px;
  height:50px;
  background:rgba(181,181,181,1);
  border:1px solid rgba(200, 202, 206, 1);
  opacity:0.84;
  margin-right: 55px;
  float: right;
  text-align: center;
  margin-top: 0;
  margin-bottom: 0;
  border-radius: 0;
  text-indent: 0px;
  color: #666;
  font-size: 40px;
  cursor: pointer;
}

form #btn{
  width:377px;
  height:50px;
  line-height: 50px;
  text-align: center;
  color: #F5EFFF;
  font-size: 20px;
  background:rgba(90,97,254,1);
  border-radius:23px;
  margin: 35px auto;
  cursor: pointer;
}

#form p{
  text-align: center;
  margin-top: 30px;
  color: #fff;
  font-size: 14px;
}
</style>
