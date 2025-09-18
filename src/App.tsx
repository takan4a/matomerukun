// src/App.tsx
import './App.css';
import moc1 from './assets/moc1.png'; // あなたがアップロードした画像のパスに修正してください
import moc2 from './assets/moc2.png'; 

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