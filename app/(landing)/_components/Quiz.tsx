import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Quiz() {
  return (
    <div className="relative isolate overflow-hidden py-24 sm:py-32 rounded-lg">
      {/* Animated pastel background with blur effect */}
      <div className="absolute inset-0 -z-10">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100"></div>

        {/* Subtle grid pattern overlay for texture */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>

      {/* Content with backdrop blur for better readability */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block backdrop-blur-sm bg-white/30 p-2 px-4 rounded-full mb-4">
            <span className="text-sm font-semibold text-blue-600">Hello</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
            PDF To{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500">
              Quiz
            </span>{" "}
          </h1>

          <p className="mt-6 text-lg text-gray-800 max-w-2xl leading-relaxed backdrop-blur-sm bg-white/20">
            Generate a quiz from your PDF documents. Upload your PDF and receive
            a quiz with multiple choice questions based on the content.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="https://github.com/aungsh/study-tools" passHref>
              <Button className="">Lets Go!</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
