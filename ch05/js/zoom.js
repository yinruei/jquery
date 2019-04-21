$(document).ready(function () {
    //字體放大
    $('.font-b').click(function (e) {
        //取消預設值
        e.preventDefault();
        //調整p段落的字體大小
        $('.content p').css('font-size', '20px');
    });



// $(document).ready(function () {
    //字體放中
    $('.font-m').click(function (e) {
        //取消預設值
        e.preventDefault();
        //調整p段落的字體大小
        $('.content p').css('font-size', '16px');
    });


// $(document).ready(function () {
    //字體放小
    $('.font-s').click(function (e) {
        //取消預設值 
        e.preventDefault();
        //調整p段落的字體大小
        $('.content p').css('font-size', '12px');
    });


//close關閉
    $('.ad-close').click(function (e) { 
        e.preventDefault();
        $('.ad').fadeOut();
    });
});
