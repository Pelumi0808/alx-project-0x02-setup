// pages/home.tsx

import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';
import { useState } from 'react';

export default function HomePage() {
  const [posts, setPosts] = useState([
    { title: 'Welcome', content: 'This is the homepage of our project.' },
    { title: 'About the Project', content: 'This site demonstrates basic Next.js features.' },
  ]);

  const [showModal, setShowModal] = useState(false);

  const handleAddPost = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
  };

  return (
    <>
      <Header />
      <main>
        <h1>Home Page</h1>
        <button onClick={() => setShowModal(true)}>Add New Post</button>

        {showModal && (
          <PostModal onClose={() => setShowModal(false)} onSubmit={handleAddPost} />
        )}

        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
      </main>
    </>
  );
}
