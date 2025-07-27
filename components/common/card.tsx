// components/common/Card.tsx

import { CardProps } from '@/interfaces';

export default function Card({ title, content }: CardProps) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '1rem',
      marginBottom: '1rem',
      backgroundColor: '#f9f9f9'
    }}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}
