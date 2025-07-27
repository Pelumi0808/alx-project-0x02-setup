// components/layout/Header.tsx

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 flex gap-6 text-lg font-medium">
      <Link href="/">Home</Link>
      <Link href="/home">/home</Link>
      <Link href="/about">/about</Link>
    </header>
  );
}
