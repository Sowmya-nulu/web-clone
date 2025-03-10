// JavaScript for handling video playback and transitions

const mobileVideos = [
    "podcast-video1", 
    "podcast-video2", 
    "podcast-video3", 
    "podcast-video4", 
    "podcast-video5", 
    "podcast-video6"
  ];
  
  let currentVideoMobile = 0;
  let videosPlayedMobile = 0;
  let timeoutIDMobile;
  let resetTimerIDMobile;
  
  function playNextVideoMobile() {
    let videoEl = document.getElementById(mobileVideos[currentVideoMobile]);
    currentVideoMobile = (currentVideoMobile + 1) % mobileVideos.length;
    videoEl.style.display = "block";
    videoEl.play();
  
    timeoutIDMobile = setTimeout(function() {
      videoEl.style.display = "none";
      videosPlayedMobile++;
      
      if (videosPlayedMobile === mobileVideos.length) {
        videosPlayedMobile = 0;
        resetVideosMobile();
      } else {
        playNextVideoMobile();
      }
    }, 3000);
  }
  
  function resetVideosMobile() {
    clearTimeout(resetTimerIDMobile);
    clearTimeout(timeoutIDMobile);
    videosPlayedMobile = 0;
  
    mobileVideos.forEach(videoId => {
      let video = document.getElementById(videoId);
      video.currentTime = 0;
      video.style.display = "none";
    });
  
    playNextVideoMobile();
  }
  
  playNextVideoMobile();
  
  // Desktop video player logic
  const desktopVideos = ["video1", "video2", "video3", "video4", "video5", "video6"];
  let currentVideoDesktop = 0;
  let videosPlayedDesktop = 0;
  let timeoutIDDesktop;
  let resetTimerIDDesktop;
  
  function playNextVideoDesktop() {
    let video = document.getElementById(desktopVideos[currentVideoDesktop]);
    currentVideoDesktop = (currentVideoDesktop + 1) % desktopVideos.length;
    video.style.display = "block";
    video.play();
  
    timeoutIDDesktop = setTimeout(function() {
      video.style.display = "none";
      videosPlayedDesktop++;
  
      if (videosPlayedDesktop === desktopVideos.length) {
        videosPlayedDesktop = 0;
        resetVideosDesktop();
      } else {
        playNextVideoDesktop();
      }
    }, 3000);
  }
  
  function resetVideosDesktop() {
    clearTimeout(timeoutIDDesktop);
    clearTimeout(resetTimerIDDesktop);
    videosPlayedDesktop = 0;
  
    desktopVideos.forEach(videoId => {
      let video = document.getElementById(videoId);
      video.currentTime = 0;
      video.pause();
      video.style.display = "none";
    });
  
    playNextVideoDesktop();
  }
  
  playNextVideoDesktop();
  
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
const feedbacks = [
  { name: "Sai Rohith", role: "Fellow at CCBP 4.0 Academy | NxtWave", feedback: "I feel lucky to get access to top-notch experts. Thanks to NxtWave!", img: "profile1.jpg" },
  { name: "Neha Panakanapalli", role: "Fellow at CCBP 4.0 Academy | NxtWave", feedback: "These podcasts are special! I learned so much.", img: "profile2.jpg" },
  { name: "Rahul Guturi", role: "Fellow at CCBP 4.0 Academy | NxtWave", feedback: "The podcast with Sanjay Sehgal is the best!", img: "profile3.jpg" }
];

const carouselContent = document.getElementById('carousel-content');

feedbacks.forEach((item, index) => {
  const activeClass = index === 0 ? 'active' : '';
  const carouselItem = `
      <div class="carousel-item ${activeClass}">
          <div class="col-md-8 mx-auto">
              <div class="feedback-card">
                  <div class="d-flex align-items-center">
                      <img src="${item.img}" alt="${item.name}">
                      <div class="ms-3">
                          <h5>${item.name}</h5>
                          <p>${item.role}</p>
                      </div>
                  </div>
                  <p>${item.feedback} <a href="#" class="text-info">Read More on LinkedIn</a></p>
              </div>
          </div>
      </div>`;
  carouselContent.innerHTML += carouselItem;
});