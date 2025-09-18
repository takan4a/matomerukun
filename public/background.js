chrome.action.onClicked.addListener((tab) => {
  if (!tab.url || !tab.title) return;

  const newBookmark = { title: tab.title, url: tab.url };

  chrome.storage.local.get(["bookmarks"], (result) => {
    const updated = [...(result.bookmarks || []), newBookmark];
    chrome.storage.local.set({ bookmarks: updated }, () => {
      console.log("保存しました:", newBookmark);
    });
  });
});
