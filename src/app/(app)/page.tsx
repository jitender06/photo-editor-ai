import { Hero } from "@/components/Hero";
import { NavBar } from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-[#ffa48d] via-white to-[#ff9b8d]">
      <NavBar />
      <Hero />
    </main>
  );
}
