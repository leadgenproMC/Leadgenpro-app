"use client";

import { Header, Hero, CTASection, Footer } from "@/components/landing";
import ChatBot from "@/components/ChatBot";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <CTASection />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}
