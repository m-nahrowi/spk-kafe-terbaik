// pages/index.js

import Link from 'next/link';

import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <Head>
        <title>Sistem Pencari Kafe Terbaik di Jogjakarta</title>
        <meta name="description" content="Sistem Pencari Kafe Terbaik di Jogjakarta menggunakan AHP, TOPSIS, dan SAW" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-4">Sistem Pencari Kafe Terbaik di Jogjakarta</h1>
        <p className="text-lg mb-8">Gunakan Analisis Hierarki Proses (AHP), Technique for Order of Preference by Similarity to Ideal Solution (TOPSIS), dan Simple Additive Weighting (SAW) untuk menemukan kafe terbaik!</p>
        <div className="flex gap-4">
          <Link href="/ahp">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Mulai AHP
            </button>
          </Link>
          <Link href="/topsis">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              Mulai TOPSIS
            </button>
          </Link>
          <Link href='/saw'>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
              Mulai SAW
            </button>
          </Link>

        </div>
      </main>

      <footer className="mt-8">
        <p className="text-gray-600 text-sm">&copy; 2024 Sistem Pencari Kafe Terbaik di Jogjakarta</p>
      </footer>
    </div>
  );
}

