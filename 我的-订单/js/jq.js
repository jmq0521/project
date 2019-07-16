//选项卡切换
$(function(){
	$('#main #order-list #nav-list li').click(function(){
		$(this).addClass('nav-list').siblings().removeClass('nav-list');
		$('#main #order-list >div:eq('+$(this).index()+')').show().siblings().not("#nav-list").hide()
	})
});