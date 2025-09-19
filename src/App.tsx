// src/App.tsx
import { useState, useEffect } from 'react';
import './App.css';

// moc*画像のimportを削除

function App() {
  const [posts, setPosts] = useState(() => {
    const storedPosts = localStorage.getItem('matomerukun_posts');
    try {
      return storedPosts ? JSON.parse(storedPosts) : [];
    } catch (e) {
      console.error('Failed to parse posts from localStorage', e);
      return [];
    }
  });
  const [newUrl, setNewUrl] = useState('');

  useEffect(() => {
    localStorage.setItem('matomerukun_posts', JSON.stringify(posts));
  }, [posts]);

  const handleAddPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (newUrl.trim() === '') return;
  
    // この部分は現在仮のデータです。
    // 実際にはURLから情報を取得するバックエンドとの連携が必要です。
    const newPost = {
      image: 'https://via.placeholder.com/280',
      title: newUrl, 
      author: 'Unknown',
      date: new Date().toLocaleDateString(),
      url: newUrl,
    };
  
    setPosts([newPost, ...posts]);
    setNewUrl('');
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUrl(e.target.value);
  };

  return (
    <div className="container">
      <h1>まとめるくん</h1>
      <p>素材や​資料を​収集し、​活用できる形で​整理したい映​像​・画​像​制作者向けの、まとめるくんというプロダクトはツイート画像・映像素材の​管理アプリです。</p>
      <p>これは、一目で​見て、​素材や​資料の​判別ができ、Notionなどの​多機能な​メモアプリとは違って、操作を​学ばずとも​直観的に​理解できる​UIが備わっています。</p>

      <form onSubmit={handleAddPost} className="input-form">
        <input 
          type="text" 
          placeholder="ここにURLを入力" 
          value={newUrl} 
          onChange={handleInputChange} 
        />
        <button type="submit">保存</button>
      </form>

      <div className="grid-container">
        {posts.map((post, index) => (
          <a href={post.url} target="_blank" rel="noopener noreferrer" key={index} className="card-link">
            <div className="card">
              <img src={post.image} alt={post.title} className="card-image" />
              <div className="card-content">
                <h3>{post.title}</h3>
                <div className="card-meta">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;