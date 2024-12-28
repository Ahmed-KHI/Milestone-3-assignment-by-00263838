'use client'
import Hero from "./components/Hero";
import BookSection from "./components/BookSection";
import Discount from "./components/Discount";

export default function Home() {
  return (
    <main>
      <Hero/>
      <BookSection/>
      <Discount/>
    </main>
  );
}