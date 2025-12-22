import Image from "next/image";
import React from "react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] text-black pt-32 xl:pt-72 pb-20 xl:pb-60 px-5 ">
      <div className="flex flex-col lg:flex-row xl:justify-center xl:items-start lg:gap-14  xl:gap-28 ">
        <div className="h-150">
          <Image
            src="/about-placeholder.webp"
            alt="About Courage Obayuwana Films"
            width={550}
            height={550}
            className="object-cover h-full"
            priority
          />
        </div>

        <div className="mt-5 xl:mt-0 max-w-[600px]">
          <h1 className="text-3xl md:text-4xl font-normal mb-8">About</h1>

          <div className="max-w-3xl">
            <p className="text-base mb-3">
              I am passionate about filmmaking and constantly strive to push my
              boundaries, embracing every project as an opportunity to learn and
              grow. My strengths are a knack for building strong characters and
              compelling narratives, being it fiction or documentary, finding
              the story. I’m a London-based filmmaker and editor (a full member
              of the British Film Editors Association - BFE - and Sundance
              alumnus).
            </p>

            <p className="text-base mb-3">
              I have a diverse background in filmmaking, having worked as editor
              on narrative features for some years. Credits include The Black
              Book (3rd Most watched film globally on Netflix in Oct 2023 –
              winner of Best Editing AMVCA Africa Magic award, 2024). I was
              editor and producer of Europa: Based on a True Story (IDFA, 2019,
              winner of Best Feature at Carbonia IFF, 2020), ‘Things of the
              Aimless Wanderer’ (Sundance, 2015, winner of Audience award at
              Film Madrid, 2015) and editor of Grey Matter (Tribeca, 2011,
              winner of Best Actor award and Jury Special Mention at Tribeca).
            </p>

            <p className="text-base mb-3  ">
              I was Self-shooting PD of documentaries ‘The Arrows of Truth’
              (Best feature doc at Berlin Independent Film Festival, 2018) and
              ‘Justice Seekers’ (Al Jazeera English, Witness, 2014).
            </p>

            <p className="text-base mb-10">
              I currently deliver work for a number of production companies, I
              shoot and edit content for agencies, higher education
              institutions, museums and art galleries, both in the UK and
              abroad.
            </p>

            {/* <div className="mt-12 pt-8">
              <h2 className="text-2xl md:text-3xl font-normal mb-4">Skills</h2>
              <ul className="space-y-2 text-base md:text-lg text-black/80">
                <li>• Film Editing</li>
                <li>• Documentary Production</li>
                <li>• Narrative Storytelling</li>
                <li>• Digital Content Creation</li>
                <li>• Post-Production</li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </main>
  );
}
