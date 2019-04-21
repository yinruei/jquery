//slideDown滑動出現、slideDown滑動消失、slideToggle沒有的話就出現有的話就消失
// $(document).ready(function () {
//     $('.button').click(function (e) {
//         $('.text').slideToggle(1000);
//     });
// });


//fadeIn預設隱藏的東西打開、fadeOut預設開啟的東西給關閉、fadeToggle預設開啟的東西給關閉，預設關閉的東西給打開
// $(document).ready(function () {
//     $('.button').click(function (e) {
//         $('.text').fadeToggle(1000);
//     });
// });


$(document).ready(function () {
    $('.button').click(function (e) { 
        $('.text').toggleClass('active');       
    });
});

//jquery鏈式寫法
$(document).ready(function () {
    $('.start').click(function (e) { 
        // $('.box').slideUp(3000).slideDown(1000).slideUp(3000).slideDown(1000);
        $('.box').fadeOut(3000).fadeIn(1000).fadeOut(3000).fadeIn(1000);
        
    });
});