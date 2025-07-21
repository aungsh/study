import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github } from "lucide-react";

export default function Hero() {
  return (
    <header className="relative isolate overflow-hidden py-24 sm:py-32 rounded-lg">
      {/* Animated pastel background with blur effect */}
      <div className="absolute inset-0 -z-10">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>

        {/* Blurred blobs */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            filter: "blur(70px)",
            opacity: 0.7,
          }}
        >
          {/* Pastel colored blobs that move slowly */}
          <div className="absolute h-64 w-64 rounded-full bg-pink-200"></div>
          <div className="absolute h-80 w-80 rounded-full bg-purple-200"></div>
          <div className="absolute h-72 w-72 rounded-full bg-blue-200"></div>
          <div className="absolute h-56 w-56 rounded-full bg-teal-200"></div>
        </div>

        {/* Subtle grid pattern overlay for texture */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>

      {/* Content with backdrop blur for better readability */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-8xl sm:text-7xl md:text-8xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Awesome Study <br />
            Tools for{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-400">
              Success
            </span>
          </h1>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="https://github.com/aungsh/study-tools" passHref>
              <Button className="">
                <Github />
                View on GitHub
              </Button>
            </Link>
            <Link href="https://swanhtataung.com" passHref>
              <Button variant="secondary" className="">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
