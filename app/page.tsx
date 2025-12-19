import Brands from "@/components/Brands";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MobileNavbar from "@/components/MobileNavbar";

export default function Home() {
  return (
    <>
      <div className="relative ">
        <video
          poster="/betone18.webp"
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full  object-cover h-screen"
        >
          <source src="/betkingvideo.mp4" type="video/mp4" />
        </video>
        <div className="fixed inset-0 bg-black/60 z-10" />
        <div className="relative z-10">
          <header>
            <MobileNavbar />
          </header>
          <main className="">
            <section>
              <Hero />
            </section>
            <div className="bg-black px-5">
              <div>
                <Brands />
              </div>
              <section className="mt-20 md:mt-32">
                <Contact />
              </section>

              <Footer />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
