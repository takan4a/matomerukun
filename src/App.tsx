// src/App.tsx
import './App.css';
import apple_irasutoya from '/fruit_apple.png';

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://www.irasutoya.com/2012/11/blog-post.html" target="_blank" rel="noopener noreferrer">
          <img src={apple_irasutoya} className="logo" alt="Apple irasutoya" />
        </a>
      </div>
      <h1>まとめるくん</h1>
      <h2>「まとめるくん」は、参考資料として素材や資料を収集して活用できる形で整理したいクリエイター向けの、サイトなどをまとめる管理アプリです。 このプロダクトを用いることで、クリエイターは一目で素材や資料を一覧することができるようになります。また、Notionなどの多機能なメモアプリとは異なり、操作が分かりやすいUIが備わっています。</h2>
      <p>これは、シンプルな画像とテキストを表示するデモページです。</p>
    </div>
  );
}

export default App;