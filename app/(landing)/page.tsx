import Hero from "./_components/Hero";
import Quiz from "./_components/Quiz";

export default function Home() {
  return (
    <>
      <div className="min-h-screen w-full bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-white px-4 py-4">
        <div className="max-w-7xl mx-auto space-y-4">
          <Hero />
          <Quiz />
        </div>
      </div>
    </>
  );
}
