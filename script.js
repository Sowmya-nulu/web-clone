document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const videos = document.querySelectorAll(".carousel-video");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    let index = 0;

    function showVideo(idx) {
        const offset = -idx * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    nextBtn.addEventListener("click", function() {
        index = (index + 1) % videos.length;
        showVideo(index);
    });

    prevBtn.addEventListener("click", function() {
        index = (index - 1 + videos.length) % videos.length;
        showVideo(index);
    });

    showVideo(index);
});
