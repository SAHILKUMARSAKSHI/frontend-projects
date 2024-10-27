function isYouTubeVideo() {
    return document.querySelector("video.html5-main-video");
  }
  
  function pauseVideo() {
    const video = document.querySelector("video.html5-main-video");
    video.pause();
  }
  
  function playVideo() {
    const video = document.querySelector("video.html5-main-video");
    video.play();
  }