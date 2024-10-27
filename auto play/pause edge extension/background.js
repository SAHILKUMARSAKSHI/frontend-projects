let currentTabId = null;

// Listen for tab activation
chrome.tabs.onActivated.addListener(activeInfo => {
  if (currentTabId !== null) {
    // Send pause message to the previous tab
    chrome.tabs.sendMessage(currentTabId, { action: "pause" });
  }

  currentTabId = activeInfo.tabId;

  // Check if the new tab is a YouTube video
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    if (tab.url && tab.url.includes("youtube.com/watch")) {
      chrome.tabs.sendMessage(activeInfo.tabId, { action: "play" });
    }
  });
});

// Listen for tab updates (URL change within the same tab)
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tabId === currentTabId && changeInfo.status === 'complete') {
    if (tab.url && tab.url.includes("youtube.com/watch")) {
      chrome.tabs.sendMessage(tabId, { action: "play" });
    }
  }
});
