import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Sparkles } from "lucide-react";

const Quiz = () => (
  <Card className="relative py-24 sm:py-32 rounded-4xl shadow-xl overflow-hidden">
    {/* Background with overlay */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('/richard-horvath-_nWaeTF6qo0-unsplash.jpg')",
      }}
    />

    {/* Content */}
    <div className="relative mx-auto max-w-3xl px-6 text-center">
      <div className="inline-block p-2 px-4 rounded-full mb-4 bg-white/30 backdrop-blur-md">
        <span className="text-white flex flex-row gap-2">
          <Sparkles />
          Gemini AI
        </span>
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white/70 mb-6">
        PDF To Quiz
      </h1>

      <p className="text-lg font-extrabold text-white/80 mb-10">
        Generate a quiz from your PDF documents.
      </p>

      <Link href="https://github.com/aungsh/study-tools">
        <Button
          className="text-lg text-emerald-100 rounded-2xl shadow-xl"
          size={"2xl"}
        >
          Lets Go!
        </Button>
      </Link>
    </div>
  </Card>
);

export default Quiz;
