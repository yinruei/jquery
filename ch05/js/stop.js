$(document).ready(function () {
    $('.start').click(function (e) { 
        //stop可以馬上中斷目前的動畫效果，在緊接著另外的動畫效果
        $('.box').stop().slideToggle(3000);
    });
});