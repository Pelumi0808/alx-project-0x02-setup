// pages/about.tsx

import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="p-6 space-y-4">
        <h1 className="text-2xl font-bold">About Page</h1>

        <div className="flex gap-4 flex-wrap">
          <Button text="Small Button" size="small" shape="rounded-sm" />
          <Button text="Medium Button" size="medium" shape="rounded-md" />
          <Button text="Large Button" size="large" shape="rounded-full" />
        </div>
      </main>
    </>
  );
}
