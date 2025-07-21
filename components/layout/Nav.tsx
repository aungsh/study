"use client";

import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 p-4 flex justify-center">
      <Card
        className={`transition-all duration-300 w-full max-w-sm flex items-center px-6 py-8 ${
          isScrolled
            ? "backdrop-blur-md bg-white/20 border-white/30 shadow-lg"
            : "bg-transparent border-transparent shadow-none"
        } rounded-4xl`}
      >
        <div className="flex w-full items-center justify-center gap-4">
          <nav className="flex gap-6 items-center">
            <Link href="/" className="hover:underline text-xl font-bold">
              Home
            </Link>
            <Link href="/faq" className="hover:underline text-xl font-bold">
              FAQ
            </Link>
            <Link href="/about" className="hover:underline text-xl font-bold">
              About
            </Link>
          </nav>
        </div>
      </Card>
    </div>
  );
}
