import React from "react";
import Link from "next/link";
import Image from "next/image";

// Placeholder project data
const projects = [
  {
    id: 1,
    title: "Project One",
    thumbnail: "/betone18.webp",
    slug: "project-one",
  },
  {
    id: 2,
    title: "Project Two",
    thumbnail: "/betone18.webp",
    slug: "project-two",
  },
  {
    id: 3,
    title: "Project Three",
    thumbnail: "/betone18.webp",
    slug: "project-three",
  },
  {
    id: 4,
    title: "Project Four",
    thumbnail: "/betone18.webp",
    slug: "project-four",
  },
  {
    id: 5,
    title: "Project Five",
    thumbnail: "/betone18.webp",
    slug: "project-five",
  },
  {
    id: 6,
    title: "Project Six",
    thumbnail: "/betone18.webp",
    slug: "project-six",
  },
];

export default function FactualPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20 px-5 xl:px-20">
      <h1 className="text-lg md:text-2xl font-normal mb-20 xl:my-60 text-center">
        I work in documentary
        <br />
        as self-shooting PD and editor.
        <br />
        Here&apos;s a sample of past and current projects.
      </h1>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project) => (
          <Link
            href={`/factual/${project.slug}`}
            key={project.id}
            className="group relative aspect-video overflow-hidden bg-gray-900 rounded-sm"
          >
            <Image
              src={project.thumbnail}
              alt={project.title}
              width={500}
              height={500}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Hover Overlay with Title */}
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <h3 className="text-xl md:text-2xl font-normal text-center px-4">
                {project.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
