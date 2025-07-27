// pages/index.tsx

import Head from 'next/head';
import Header from '../components/layout/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Project 0x02 Setup</title>
      </Head>
      <Header />
      <main className="p-6 text-center">
        <h1 className="text-3xl font-bold">Welcome to ALX Project 0x02 Setup</h1>
        <p className="mt-4 text-lg text-gray-600">This is the home page using Pages Router.</p>
      </main>
    </>
  );
}
