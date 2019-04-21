// $(document).ready(function() {
//     $('h1').hide()
// })


//點選隱藏標題，1234會隱藏
// $(document).ready(function() {
//     $('.button').click(function() {
//         $('#box').hide()
//     })
// })


//點選p段落，1234會隱藏
// $(document).ready(function() {
//     $('p').click(function() {
//         $('.title').hide()
//     })
// })


//toggle是可以切換開啟或隱藏
//點選隱藏標題，若沒有出現1234和p段落就會顯示，若有出現1234和p段落就會消失
$(document).ready(function() {
    $('.button').click(function () { 
        $('.title, #box2').toggle();//不管事id，class或是標籤都可以寫在一起
    });
})