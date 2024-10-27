chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status === "complete") {
      const url = new URL(tab.url);
      if (url.hostname === "www.youtube.com" && isYouTubeVideo()) {
        pauseVideo();
      }
    }
  });
  
  chrome.tabs.onActivated.addListener(function(activeInfo) {
    const tab = chrome.tabs.get(activeInfo.tabId);
    const url = new URL(tab.url);
    if (url.hostname === "www.youtube.com" && isYouTubeVideo()) {
      playVideo();
    }
  });