"use client";

// COMPONENTS
import HeroSection from "./components/HeroSection";
import NavigationBar from "./components/NavigationBar";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="flex min-h-96 w-full flex-col items-center justify-between relative z-0">
          <HeroSection />
        </div>
      </main>
    </>
  );
}
