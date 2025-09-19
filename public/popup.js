function renderPosts(posts) {
  const container = document.getElementById("posts");
  container.innerHTML = "";
  posts.forEach((post) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <a href="${post.url}" target="_blank">${post.url}</a>
    `;
    container.appendChild(card);
  });
}

// 初期表示
chrome.storage.local.get({ posts: [] }, (data) => {
  renderPosts(data.posts);
});

// ストレージ更新を監視（新しいURL追加時に再描画）
chrome.storage.onChanged.addListener((changes, namespace) => {
  if (changes.posts) {
    renderPosts(changes.posts.newValue);
  }
});
