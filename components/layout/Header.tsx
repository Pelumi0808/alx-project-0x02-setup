import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-700 text-white p-4 flex gap-6">
      <nav>
        <ul className="flex gap-6">
          <li>
            <Link href="/home" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/posts" className="hover:underline">
              Posts
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}