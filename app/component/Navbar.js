"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();
  const noNavbarRoutes = ['/write']; 
  const shouldHide = noNavbarRoutes.includes(pathname);

  if (shouldHide) return null;

  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 bg-amber-50 shadow">
      {/* Logo */}
      <Link href="/" className="text-xl font-bold text-blue-600 hover:opacity-80 transition">
        BlogSpace
      </Link>

      {/* Buttons */}
      <div className="flex gap-4">
        <Link href="/write">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            Write
          </button>
        </Link>
        <Link href="/all">
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition">
            View
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
