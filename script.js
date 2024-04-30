var video = document.getElementById("myvideo");
var btn = document.getElementById("watch");

function playvideo() {
    if(video.paused) {
        video.play();
        btn.querySelector('.fa').classList.replace('.fa-play-circle', 'fa-pause-circle');
    }
    else {
        video.pause();
        btn.querySelector('.fa').classList.replace('fa-pause-circle', 'fa-play-circle')
    }
}




    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1.5,
        centeredSlides: true,
        spaceBetween: 30,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        loop: true,
    });


    