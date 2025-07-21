import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import Nav from "./_components/Nav";
import Quiz from "./_components/Quiz";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="min-h-screen w-full px-4 py-4">
        <div className="max-w-7xl mx-auto space-y-4">
          <Hero />
          <Quiz />
        </div>
      </div>
      <Footer />
    </>
  );
}
