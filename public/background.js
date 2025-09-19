chrome.action.onClicked.addListener((tab) => {
  if (tab.url) {
    // 保存
    chrome.storage.local.get({ posts: [] }, (data) => {
      const newPosts = [...data.posts, { url: tab.url }];
      chrome.storage.local.set({ posts: newPosts });
    });
  }
});
