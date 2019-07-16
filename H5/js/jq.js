
var starttime = new Date("2019/12/14");
setInterval(function(){
    var nowtime = new Date();
    var time = starttime - nowtime;
    var day = parseInt(time / 1000 / 60 / 60 / 24);
    var hour = parseInt(time / 1000 / 60 / 60 % 24);
    var minute = parseInt(time / 1000 / 60 % 60);
    var seconds = parseInt(time / 1000 % 60);
    if (day <= 9) day = '0' + day;
    if (hour <= 9) hour = '0' + hour;
    if (minute <= 9) minute = '0' + minute;
	if (seconds <= 9) seconds = '0' + seconds;
	$('.day-show').html(day);
	$('.hour-show').html(hour);
	$('.minute-show').html(minute);
	$('.second-show').html(seconds);
}, 1000);