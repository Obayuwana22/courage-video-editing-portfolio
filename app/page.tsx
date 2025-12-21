import Brands from "@/components/Brands";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <main className="">
        <section className="">
          <Hero />
          {/* <video
            poster="/betone18.webp"
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full object-cover h-screen"
          >
            <source src="/betkingvideo.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/60 " /> */}
        </section>
        <div className="bg-black px-5 relative">
          <div>
            <Brands />
          </div>
          <section id="contact" className="mt-20 md:mt-32">
            <Contact />
          </section>
        </div>
      </main>
    </>
  );
}
