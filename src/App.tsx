// src/App.tsx
import './App.css';
import moc1 from './assets/moc1.png'; // あなたがアップロードした画像のパスに修正してください
import moc2 from './assets/moc2.png'; 
import moc3 from './assets/moc3.png'; 
import moc4 from './assets/moc4.png'; 

import BookmarkPage from "./components/BookmarkPage";

// サンプルデータ
const posts = [
  {
    image: moc1,
    title: '運と脚力と私。',
    author: '原田 透子',
    date: '8日前',
    url: 'https://note.com/helikesmycheeks/n/n51b9b1ba942e',
  },
  {
    image: moc2,
    title: '今週のようす。',
    author: '菅平高原実験所｜Sugadaira Research Station',
    date: '3日前',
    url: 'https://x.com/srs_kyoten/status/1953693747541127173',
  },
  {
    image: moc3,
    title: '筑波大学プロモーションビデオ（施設紹介）/ Get a look into some facilities on Tsukuba Campus',
    author: '筑波大学',
    date: '2日前',
    url: 'https://youtu.be/bQy_pSCDqbQ?si=l6Tqav9t1k6dzrXn',
  },
  {
    image: moc4,
    title: '【初心者向け】0から始めるAfter Effects #01 - 画面の見方について -',
    author: 'Putti Monkey Wrench',
    date: '1日前',
    url: 'https://youtu.be/rHsY5wQApCw?si=N1pxH-wl7IHIVqQ2',
  },

];


function App() {
  return (
    <div className="container">

<BookmarkPage />

      <h1>まとめるくん</h1>
      <p>素材や​資料を​収集し、​活用できる形で​整理したい映​像​・画​像​制作者向けの、まとめるくんというプロダクトはツイート画像・映像素材の​管理アプリです。</p>
      <p>これは、一目で​見て、​素材や​資料の​判別ができ、Notionなどの​多機能な​メモアプリとは違って、操作を​学ばずとも​直観的に​理解できる​UIが備わっています。</p>
      <div className="grid-container">
        {posts.map((post, index) => (
          // カード全体をaタグで囲む
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