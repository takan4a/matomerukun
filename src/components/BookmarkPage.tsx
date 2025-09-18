import { useState, useEffect } from "react";

type Bookmark = {
  title: string;
  url: string;
};

export default function BookmarkPage() {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

  // 初期読み込み
  useEffect(() => {
    chrome.storage.local.get(["bookmarks"], (result: { bookmarks?: Bookmark[] }) => {
      setBookmarks(result.bookmarks || []);
    });
  }, []);

  

  // 削除
  const deleteBookmark = (index: number) => {
    chrome.storage.local.get(["bookmarks"], (result: { bookmarks?: Bookmark[] }) => {
      const updated = (result.bookmarks || []).filter((_, i) => i !== index);
      chrome.storage.local.set({ bookmarks: updated }, () => {
        setBookmarks(updated);
      });
    });
  };

  return (
    <div>
      <h1>My Bookmarks</h1>
      <ul>
        {bookmarks.map((bm, i) => (
          <li key={i}>
            <a href={bm.url} target="_blank" rel="noreferrer">
              {bm.title}
            </a>
            <button onClick={() => deleteBookmark(i)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
