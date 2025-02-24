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
function playTrailer(videoUrl) {
    window.open(videoUrl, '_blank');
}

function navigateToVideo(videoUrl) {
    window.location.href = videoUrl;
}

function filterCards(category) {
    let cards = document.querySelectorAll('.card');
    let buttons = document.querySelectorAll('.filter-btn');
    
    buttons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[onclick="filterCards('${category}')"]`).classList.add('active');

    cards.forEach(card => {
        if (category === 'all' || card.dataset.category.includes(category)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}