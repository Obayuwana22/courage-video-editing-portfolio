import React from "react";
import Link from "next/link";

// Placeholder project data
const projects = [
  {
    id: 1,
    title: "Fiction Project One",
    thumbnail: "/betone18.webp",
    slug: "fiction-project-one",
  },
  {
    id: 2,
    title: "Fiction Project Two",
    thumbnail: "/betone18.webp",
    slug: "fiction-project-two",
  },
  {
    id: 3,
    title: "Fiction Project Three",
    thumbnail: "/betone18.webp",
    slug: "fiction-project-three",
  },
  {
    id: 4,
    title: "Fiction Project Four",
    thumbnail: "/betone18.webp",
    slug: "fiction-project-four",
  },
  {
    id: 5,
    title: "Fiction Project Five",
    thumbnail: "/betone18.webp",
    slug: "fiction-project-five",
  },
  {
    id: 6,
    title: "Fiction Project Six",
    thumbnail: "/betone18.webp",
    slug: "fiction-project-six",
  },
];

export default function FictionPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20 px-5 xl:px-60">
      <h1 className="text-4xl md:text-5xl font-normal mb-12">
        Narrative Fiction
      </h1>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project) => (
          <Link
            href={`/fiction/${project.slug}`}
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
