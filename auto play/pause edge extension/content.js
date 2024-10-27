// Listen for messages from the background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    const video = document.querySelector("video");
    if (video) {
      if (message.action === "pause") {
        video.pause();
      } else if (message.action === "play") {
        video.play();
      }
    }
  });
  