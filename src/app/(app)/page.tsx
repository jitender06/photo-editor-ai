import Cta from "@/components/Cta";
import { Hero } from "@/components/Hero";
import { NavBar } from "@/components/NavBar";

export default function Home() {
  return (
    <>
      <main className="bg-gradient-to-br from-[#ffa48d] via-white to-[#ff9b8d]">
        <NavBar />
        <Hero />
      </main>
      <Cta />
    </>
  );
}
