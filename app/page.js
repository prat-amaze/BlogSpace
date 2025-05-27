import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-amber-100 p-4">
      <h1 className="text-4xl font-bold mb-8">Welcome to the Blog App</h1>
      
      <div className="flex gap-6">
        <Link href="/write">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-blue-600 transition">
            ✍️ Write a Blog
          </button>
        </Link>

        <Link href="/all">
          <button className="bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-green-600 transition">
            📖 View All Blogs
          </button>
        </Link>
      </div>
    </main>
  );
}
