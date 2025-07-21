import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github, Heart, Users } from "lucide-react";

export default function About() {
  return (
    <>
      <h1 className="text-8xl font-bold">About</h1>
      <div className="flex items-center gap-2 text-lg font-bold text-gray-800 mb-8">
        <Heart className="text-red-500" />
        <span>A project made with passion</span>
      </div>

      <div className="max-w-4xl space-y-6 text-lg leading-relaxed">
        <p className="text-balance">
          This is a{" "}
          <span className="font-semibold text-emerald-600">
            for fun project
          </span>{" "}
          designed to help students with their learning journey. We believe that
          education should be accessible, engaging, and enjoyable for everyone.
        </p>

        <p className="text-balance">
          Our goal is to create awesome learning tools that make studying more
          effective and less stressful. Whether you're cramming for exams,
          working on assignments, or just curious about the world, we're here to
          support your educational adventures.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          Thank you for ussing the website!
        </div>
      </div>
    </>
  );
}
