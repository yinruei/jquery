//preventDefault取消他預設的行為
$(document).ready(function () {
    $('.close').click(function (e) { 
        e.preventDefault();
    });
});

$(document).ready(function () {
    $('.box').css('width','800px')
    $('.box').css('height','800px')
    $('.box').css('background','#ccc')
});

$(document).ready(function () {
    $('.dropdown').click(function (e) { 
        e.preventDefault();
        $('.dropdown').toggleClass('active');
        $('.dropdown-open').slideToggle();
    });
});