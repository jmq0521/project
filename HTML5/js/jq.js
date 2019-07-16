
function antitime() {
      var time="2019-10-7 23:59:59";
      var to = new Date(time.replace(/-/g, "/"));
      var now = new Date();
      var deltaTime = to.getTime() - now.getTime();
      if (deltaTime <= 0) {
            window.clearInterval(timer);
            return;
      }
      var d= parseInt(deltaTime / (1000 * 60 * 60 * 24));
      var h = Math.floor(deltaTime / 1000 / 60 / 60 % 24);
      var m = Math.floor(deltaTime / 1000 / 60 % 60);
      var s = Math.floor(deltaTime / 1000 % 60);
      //把时间的数字转成字符串， 如果时分秒不足10， 则前面补0
      // var timeStr = ""+(h/10>=1?h=h:h="0"+h) + (m/10>=1?m=m:m="0"+m) + (s/10>=1?s=s:s="0"+s);
      $('.day-show').html(d);
      $('.hour-show').html(h);
      $('.minute-show').html(m);
      $('.second-show').html(s);
}
var timer = setInterval(antitime, 1000);





//底部导航栏
$(function(){
	$("#button-head .btn:nth-child(2)").bind({
		click:function(){
                  $("#button #contact").css("display","block");
                  $(".zhezhao").css("display","block");
		},
      });
    
    $("#button #contact").bind({
		click:function(){
            $("this").css("display","block");
		},
	})
})
$(function(){
    $("#button #contact i").bind({
		click:function(){
                  $("#button #contact").css("display","none");
                  $(".zhezhao").css("display","none");       
            },
	})
})

//侧边我的商品核销
$(function(){
	$("aside #side:nth-child(1)").bind({
		click:function(){
            $("#cancel").css("display","block");
            $(".zhezhao").css("display","block");
		},
      });
    
     $("#cancel").bind({
		click:function(){
            $("this").css("display","block");
		},
	})
})
$(function(){
     $("#cancel .cancel #img").bind({
		click:function(){
            $("#cancel").css("display","none");
            $(".zhezhao").css("display","none");
		},
	})
})

//侧边我的商品二维码
// $(function(){
// 	$("aside #side:nth-child(2)").bind({
// 		click:function(){
//             $("#code").css("display","block");
//             $(".zhezhao").css("display","block");
// 		},
//     });
    
//     $("#code").bind({
// 		click:function(){
//             $("this").css("display","block");
// 		},
// 	})
// })
// $(function(){
//     $("#code .code #img").bind({
// 		click:function(){
//             $("#code").css("display","none");
//             $(".zhezhao").css("display","none");
// 		},
// 	})
// })

//侧边我的
$(function(){
	$("#sid").bind({
		click:function(){
            $("#sid").css("display","none");
            $("aside").css("display","block");
		},
      });
    
      $("aside").bind({
		click:function(){
            $("this").css("display","block");
		},
      });

      $("aside #side1").bind({
		click:function(){
            $("aside").css("display","none");
            $("#sid").css("display","block");
		},
	})
})

//红包
$(function(){
	$("#pack .pack #img").bind({
		click:function(){
            $("#pack").css("display","none");
            $(".zhezhao").css("display","none");
		},
      });
})


$(function(){
      $("#music-btn").click(function(){
            var music = document.getElementById("music")
            if( music.paused === true ){
                  music.play();
            }else{
                  music.pause()
            }
      });
})
