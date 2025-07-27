// components/common/PostCard.tsx

import { PostProps } from '@/interfaces';

export default function PostCard({ title, body, userId }: PostProps) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '1rem',
      marginBottom: '1rem',
      backgroundColor: '#fefefe'
    }}>
      <h3>{title}</h3>
      <p>{body}</p>
      <small>User ID: {userId}</small>
    </div>
  );
}
