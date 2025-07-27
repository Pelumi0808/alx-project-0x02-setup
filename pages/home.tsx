// pages/home.tsx

import Card from '@/components/common/Card';

export default function HomePage() {
  return (
    <main>
      <h1>Home Page</h1>
      <Card title="Welcome" content="This is the homepage of our project." />
      <Card title="About the Project" content="This site demonstrates basic Next.js features." />
    </main>
  );
}
