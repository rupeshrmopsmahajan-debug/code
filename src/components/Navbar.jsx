"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  // State for dropdown menus
  const [setOpenDropdown] = useState(null);

  const links = [
    { name: "Home", href: "/" },
    { name: "Docs", href: "#docs" },
  ];

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-black/10 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="text-lg font-bold tracking-tight text-black">
          FileVerse
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-neutral-600">
          {links.map((link) =>
            link.subLinks ? (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => setOpenDropdown(link.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 hover:text-black transition-colors">
                  {link.name}
                  <ChevronDown className="size-4" />
                </button>
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-black transition-colors"
              >
                {link.name}
              </Link>
            ),
          )}
        </div>

        {/* Authentication Actions */}
        <div className="flex items-center gap-3">
          {/* Shown when user is logged out */}
          <Show when="signed-out">
            <SignInButton mode="modal">
              <button className="text-sm font-medium text-neutral-600 hover:text-black cursor-pointer px-3 py-1.5 transition">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="bg-black text-white text-sm font-medium border border-black rounded-md px-4 py-1.5 cursor-pointer hover:bg-neutral-800 transition">
                Get Started
              </button>
            </SignUpButton>
          </Show>

          {/* Shown when user is logged in */}
          <Show when="signed-in">
            <Link
              href="/dashboard"
              className="text-sm font-medium text-neutral-800 hover:text-black mr-2 border border-neutral-300 rounded-md px-3 py-1.5 transition"
            >
              Dashboard
            </Link>
            <UserButton />
          </Show>
        </div>
      </div>
    </nav>
  );
}
