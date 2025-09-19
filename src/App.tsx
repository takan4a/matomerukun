import { useState, useEffect } from 'react';
import './App.css';
import moc1 from './assets/moc1.png';
import moc2 from './assets/moc2.png';
import moc3 from './assets/moc3.png';
import moc4 from './assets/moc4.png';

interface Post {
  id: number;
  url: string;
  title: string | null;
  author: string | null;
  date: string;
}

const staticPosts = [
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
  const [dynamicPosts, setDynamicPosts] = useState<Post[]>([]);

  useEffect(() => {
    // 自分のVercelプロジェクトのURLに置き換えてください
    const apiEndpoint = 'https://https://matomerukun.vercel.app/api/posts';

    const fetchPosts = async () => {
      try {
        const response = await fetch(apiEndpoint);
        if (response.ok) {
          const data = await response.json();
          setDynamicPosts(data);
        } else {
          console.error('Failed to fetch posts:', response.status);
        }
      } catch (error) {
        console.error('Network error while fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  // ローカルストレージを削除し、Placeholderを使用
  const allPosts = [
    ...dynamicPosts.map(post => ({
      ...post,
      image: 'https://via.placeholder.com/280', // TODO: 画像取得ロジックを追加
      date: new Date(post.date).toLocaleDateString('ja-JP'),
    })),
    ...staticPosts
  ];

  return (
    <div className="container">
      <h1>まとめるくん</h1>
      <p>素材や​資料を​収集し、​活用できる形で​整理したい映​像​・画​像​制作者向けの、まとめるくんというプロダクトはツイート画像・映像素材の​管理アプリです。</p>
      <p>これは、一目で​見て、​素材や​資料の​判別ができ、Notionなどの​多機能な​メモアプリとは違って、操作を​学ばずとも​直観的に​理解できる​UIが備わっています。</p>

      <div className="input-form">
        <input
          type="url"
          id="urlInput"
          placeholder="ここにURLを貼り付けてください"
        />
        <button id="saveButton">保存</button>
      </div>

      <div className="grid-container">
        {allPosts.map((post, index) => (
          <a href={post.url} target="_blank" rel="noopener noreferrer" key={index} className="card-link">
            <div className="card">
              <img src={post.image || 'https://via.placeholder.com/280'} alt={post.title || 'No Title'} className="card-image" />
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