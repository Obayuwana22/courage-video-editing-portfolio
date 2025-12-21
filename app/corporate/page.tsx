import React from "react";
import Link from "next/link";

// Placeholder project data
const projects = [
  {
    id: 1,
    title: "Corporate Project One",
    thumbnail: "/betone18.webp",
    slug: "corporate-project-one",
  },
  {
    id: 2,
    title: "Corporate Project Two",
    thumbnail: "/betone18.webp",
    slug: "corporate-project-two",
  },
  {
    id: 3,
    title: "Corporate Project Three",
    thumbnail: "/betone18.webp",
    slug: "corporate-project-three",
  },
  {
    id: 4,
    title: "Corporate Project Four",
    thumbnail: "/betone18.webp",
    slug: "corporate-project-four",
  },
  {
    id: 5,
    title: "Corporate Project Five",
    thumbnail: "/betone18.webp",
    slug: "corporate-project-five",
  },
  {
    id: 6,
    title: "Corporate Project Six",
    thumbnail: "/betone18.webp",
    slug: "corporate-project-six",
  },
];

export default function CorporatePage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20 px-5 xl:px-60">
      <h1 className="text-4xl md:text-5xl font-normal mb-12">
        Digital Content & Corporate
      </h1>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project) => (
          <Link
            href={`/corporate/${project.slug}`}
            key={project.id}
            className="group relative aspect-video overflow-hidden bg-gray-900 rounded-sm"
          >
            <img
              src={project.thumbnail}
              alt={project.title}
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
