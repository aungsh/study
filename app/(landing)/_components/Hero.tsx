import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github } from "lucide-react";

export default function Hero() {
  return (
    <>
      <div className="pt-34 pb-22">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center relative">
          <div className="max-w-4xl mx-auto">
            <Button size="sm" className="mt-1">
              v0.1
            </Button>
            <h1 className="relative flex flex-col items-center text-center text-5xl font-bold leading-[1.05] tracking-tight delay-50 sm:text-8xl sm:leading-none">
              Awesome Learning Tools for Students
            </h1>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="https://github.com/aungsh/study" passHref>
                <Button
                  className="px-12 py-6 text-lg text-emerald-100 rounded-2xl"
                  size={"2xl"}
                >
                  <Github className="" /> View on GitHub
                </Button>
              </Link>
              <Link href="https://swanhtataung.com" passHref>
                <Button
                  variant="ghost"
                  className="px-12 py-6 text-lg rounded-2xl"
                  size={"2xl"}
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
