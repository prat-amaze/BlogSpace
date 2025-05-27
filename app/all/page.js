import React from 'react';
import Link from 'next/link';
import { headers } from "next/headers";

const page = async () => {
  const headersList = headers();
    const host = headersList.get("host");
    const protocol = "http";
    const baseUrl = `${protocol}://${host}`;
  
    const res = await fetch(`${baseUrl}/api/add`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch blog: ${res.statusText}`);
  }

  const data = await res.json();

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">All Blogs</h1>
      
      <div className="max-w-4xl mx-auto grid gap-6">
        {data.map((e) => (
          <Link
            href={`/display/${e.title}`}
            key={e._id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
          >
            <h2 className="text-xl font-semibold text-gray-800">{e.title}</h2>
            <p className="text-sm text-gray-500 mt-1">Click to read...</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
