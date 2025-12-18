import Hero from "@/components/Hero";
import MobileNavbar from "@/components/MobileNavbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="relative h-screen overflow-hidden">
        <video
          // poster="/bg-fallback.jpg" // Optional: Fallback image while video loads
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/betkingvideo.mp4" type="video/mp4" />
        </video>
        <div className="fixed inset-0 bg-black/60 z-10" />
        <section className="relative z-10">
          <header>
            <MobileNavbar />
          </header>
          <main className="mx-5">
            <Hero />
          </main>
        </section>
      </section>
    </div>
  );
}
