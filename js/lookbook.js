let data;
let txt;

let elData = '';
let elDataM = '';
let elTitle = '';
let elInfo = '';

let key;




//////////// json 불러오기 ////////////////////


$.ajax({
    url: "data.json",
    success: function (json) {
        data = json;

        ////////// localStorage key값 받아오기 ///////
        txt = localStorage.getItem("key1");

        console.log(txt);
        if (txt == 'ss2022') {
            key = data.ss2022
        } else if (txt == 'asics') {
            key = data.asics
        } else {
            key = data.hauswear
        }
        slide();






        setTimeout(function () {
            localStorage.removeItem("key1")
        }, 2000)



    }
})





function slide() {
    $.each(key, function (k, v) {
        console.log(k, v)

        elTitle = `
        <img src="${v.title_img}">
        `;

        elData += `
        <div class="swiper-slide">
        <figure><img src="${v.img_a}"></figure>
        <figure><img src="${v.img_b}"></figure>
        </div>
        `;

        elDataM += `
        <div class="swiper look_swp no_${k}">
        <div class="swiper-pagination" ></div>
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <div class="slide-item"><img src="${v.img_a}"></div>
            </div>
            <div class="swiper-slide">
                <div class="slide-item"><img src="${v.img_b}"></div>
            </div>
        </div>
        </div>
        `


        elInfo = `<p><span>${v.info}<span></p>`

        $('.slide_title').html(elTitle);
        $('.swiper-wrapper').html(elData);
        $('.info_desktop').html(elInfo);
        $('.mobile').html(elDataM);
        $('.no_0').after('<div class="info_mobile"></div>');
        $('.info_mobile').html(elInfo);
    })

    ///////// swiper /////////////////////////////


    var swiper = new Swiper(".look_swp", {

        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: '.swiper-pagination'
        },
        breakpoints: {
            1024: {
                slidesPerView: 1.5,
                spaceBetween: 100,
            }
        }
    });





}


// function asics() {


//     $.each(data.asics, function (k, v) {
//         elData += `
//         <div class="swiper-slide">
//         <figure><img src="${v.img_a}"></figure>
//         <figure><img src="${v.img_b}"></figure>
//         </div>
//         `;

//         elTitle = `
//         <img src="${v.title_img}">
//         `;

//         elInfo = `<p><span>${v.info}<span></p>`

//         $('.swiper-wrapper').html(elData);
//         $('.slide_title').html(elTitle);
//         $('.info_desktop').html(elInfo);

//     })

// }

// function ss2022() {


//     $.each(data.ss2022, function (k, v) {
//         elData += `
//         <div class="swiper-slide">
//         <figure><img src="${v.img_a}"></figure>
//         <figure><img src="${v.img_b}"></figure>
//         </div>
//         `;

//         elTitle = `
//         <img src="${v.title_img}">
//         `;

//         elInfo = `<p><span>${v.info}<span></p>`

//         $('.swiper-wrapper').html(elData);
//         $('.slide_title').html(elTitle);
//         $('.info_desktop').html(elInfo);

//     })

// }




