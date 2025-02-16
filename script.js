// Load Fonts
WebFont.load({
    google: {
        families: ["Open Sans:300,300italic,400,400italic,600,600italic,700,700italic,800,800italic",
                   "Inter:regular,500,600,700","Epilogue:regular","Yeseva One:regular",
                   "Kaushan Script:regular","IBM Plex Mono:regular,600","Inter:300,regular"]
    }
});

// Typekit Fallback
try {
    Typekit.load();
} catch (e) {}

// Detect Touch Support
!function(o,c) {
    var n=c.documentElement,t=" w-mod-";
    n.className+=t+"js",
    ("ontouchstart" in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className+=t+"touch")
}(window,document);

// Video Playback Logic
const videos = ["podcast-video1", "podcast-video2", "podcast-video3"];
let currentVideo = 0;

function playNextVideo() {
    let videoElement = document.getElementById(videos[currentVideo]);
    currentVideo = (currentVideo + 1) % videos.length;
    videoElement.style.display = "block";
    videoElement.play();

    setTimeout(() => {
        videoElement.style.display = "none";
        playNextVideo();
    }, 3000);
}

playNextVideo();
