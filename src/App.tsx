// src/App.tsx
import './App.css';
import moc1 from './assets/moc1.png'; // あなたがアップロードした画像のパスに修正してください
import moc2 from './assets/moc2.png'; 
import moc3 from './assets/moc3.png'; 
import moc4 from './assets/moc4.png'; 

// サンプルデータ
const posts = [
  {
    image: moc1,
    title: '運と脚力と私。',
    author: '原田 透子',
    date: '8日前',
  },
  {
    image: moc2,
    title: 'ローテーション',
    author: '晴れやか',
    date: '3日前',
  },
  {
    image: moc3,
    title: '筑波大学プロモーションビデオ（施設紹介）/ Get a look into some facilities on Tsukuba Campus',
    author: '筑波大学',
    date: '2日前',
  },
  {
    image: moc4,
    title: '【初心者向け】0から始めるAfter Effects #01 - 画面の見方について -',
    author: 'Putti Monkey Wrench',
    date: '1日前',
  },

];

function App() {
  return (
    <div className="container">
      <h1>まとめるくん</h1>
      <div className="grid-container">
        {posts.map((post, index) => (
          <div key={index} className="card">
            <img src={post.image} alt={post.title} className="card-image" />
            <div className="card-content">
              <h3>{post.title}</h3>
              <div className="card-meta">
                <span>{post.author}</span>
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;