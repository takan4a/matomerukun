// src/App.tsx
import './App.css';
import appleImage from './assets/fruit_apple.png'; // あなたがアップロードした画像のパスに修正してください

// サンプルデータ
const posts = [
  {
    image: appleImage,
    title: '【創作漫画】しっぽと恋心 21話',
    author: '近場うみ',
    date: '8日前',
  },
  {
    image: appleImage,
    title: '【コミックエッセイ】敬老の日に不謹慎かもしれませんがイラスト',
    author: 'あんこさん',
    date: '3日前',
  },
  {
    image: appleImage,
    title: '【世界陸上】1秒後、世界が変わった瞬間の目撃者になった',
    author: '三輪清朗(みわこうさく)',
    date: '18時間前',
  },
  {
    image: appleImage,
    title: '『フルリモート』でも信頼されるエンジニアとしてやっていること',
    author: 'ひろ@個人アプリ開発者',
    date: '20時間前',
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