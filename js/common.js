
// 1. figma로 기능소개 작업 후 포트폴리오에 올리기

history.scrollRestoration = "manual"




///////////// load /////////////////////////
$('header').load('./inc.html header > div');
$('footer').load('./inc.html footer > div');
$('.cart_wrap').load('./inc.html .cart_wrap > div');




////////// cart toggle ////////////////////
setTimeout(function () {

$('.cart_on').on('click', function () {
    $('.cart').toggleClass('active');
    $('.cart_bg').toggleClass('active');
})

$('.cart_off').on('click', function () {
    $('.cart').toggleClass('active');
    $('.cart_bg').toggleClass('active');
})

// 백드롭요소 클릭시 active 지우기
$('.cart_bg').on('click', function(){
    $(this).removeClass('active');
    $('.cart').removeClass('active');
})




////////////// mobile burger /////////////////////
$('.burger_btn').on('click', function(){
    $(this).toggleClass('active');
    $('.m_menu').toggleClass('active');
    $('.m_menu_bg').toggleClass('active');
    
})

// 백드롭요소 클릭시 active 지우기
$('.m_menu_bg').on('click', function(){
    $(this).removeClass('active');
    $('.m_menu').removeClass('active');
    $('.burger_btn').removeClass('active');
})



////////////////// time ///////////////
var clockTarget = document.querySelector('.time');

function clock() {
    var date = new Date();
    
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    clockTarget.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}


function init(){
    clock();
    setInterval(clock, 1000);
}

init();

}, 1000)







//////////  .underbar wheelEvent /////////////////////
$('main').on('mousewheel',function(e){
    var wheel = e.originalEvent.wheelDelta;

    if(wheel>0){
        // upWheel
        $('.underbar').removeClass('active');
    }else{
        // downWheel
        $('.underbar').addClass('active');
    }
})




//////////////////////////////////////////


$('.haus_btn').on('click',function(){
    
    localStorage.setItem("key1", "hauswear");
    location.href= $(this).find('a').attr('href');
})