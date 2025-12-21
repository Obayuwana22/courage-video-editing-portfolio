import Image from "next/image";
import React from "react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] text-black pt-32 xl:pt-72 pb-20 xl:pb-60 px-5 xl:px-60">
      <div className="flex flex-col xl:flex-row xl:justify-center xl:items-start xl:gap-20 bg-red-500 xl:mx-20">
        <Image
          src="/about-placeholder.webp"
          alt="Logo"
          width={500}
          height={500}
          className=""
        />

        <div>
          <h1 className="text-4xl md:text-5xl font-normal mb-8">About</h1>

          <div className="max-w-3xl">
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              As a filmmaker and editor, I am passionate about bringing stories
              to life, crafting impactful films that resonate and inspire.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80">
              With years of experience in documentary, narrative fiction, and
              digital content, I specialize in creating compelling visual
              narratives that connect with audiences on a deeper level.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-black/80">
              My work has been featured across major platforms including BBC,
              Google, Amazon, and Al Jazeera, where I&apos;ve had the privilege
              of telling stories that matter.
            </p>

            <div className="mt-12 pt-8 border-t border-black/10">
              <h2 className="text-2xl md:text-3xl font-normal mb-4">Skills</h2>
              <ul className="space-y-2 text-base md:text-lg text-black/80">
                <li>• Film Editing</li>
                <li>• Documentary Production</li>
                <li>• Narrative Storytelling</li>
                <li>• Digital Content Creation</li>
                <li>• Post-Production</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
