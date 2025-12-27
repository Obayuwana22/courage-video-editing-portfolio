import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";

// 🔒 Only allow statically generated slugs
export const dynamicParams = false;

// 🧱 Pre-generate all project pages at build time
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

const page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;

  const currentIndex = projects.findIndex((project) => project.slug === slug);

  if (currentIndex === -1) {
    return (
      <div className="flex justify-center items-center bg-black text-white min-h-screen pt-32 pb-20 px-5 xl:px-20">
        <div className="text-center space-y-5">
          <h1 className="text-2xl font-bold">Project not found</h1>
          <p className="text-white/70 max-w-sm">
            The project you’re looking for might have been removed or the URL is
            incorrect.
          </p>
          <Link
            href="/"
            className="mt-4 px-6 py-2 bg-white text-black rounded hover:bg-gray-200 transition"
          >
            <span>🏠</span> Home
          </Link>
        </div>
      </div>
    );
  }

  const project = projects[currentIndex];

  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;

  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <main className="bg-black text-white min-h-screen pt-32 pb-20 px-5 xl:px-20">
      <div className="mb-20 xl:mt-28 xl:mb-10">
        <h1 className="text-2xl xl:text-4xl font-normal text-center mb-10">
          {project.title}
        </h1>
        <p className="text-sm md:text-lg xl:text-xl text-center">{project.creators}</p>
        <p className="text-sm md:text-lg xl:text-xl text-center text-cyan-200">
          My role: {project.role}
        </p>
      </div>

      <video
        poster={project.thumbnail}
        // autoPlay
        loop
        muted
        playsInline
        controls
        className="w-full max-w-4xl mx-auto rounded-lg"
      >
        <source src={project.video} type="video/mp4" />
      </video>

      <div className="flex justify-between gap-10 mt-20">
        {prevProject ? (
          <Link
            href={`/factual/${prevProject.slug}`}
            className="flex items-center text-sm xl:text-3xl opacity-80 hover:opacity-100 cursor-pointer"
          >
            <ChevronLeft className="w-14 h-14" />
            {prevProject.title}
          </Link>
        ) : (
          <span />
        )}

        {nextProject && (
          <Link
            href={`/factual/${nextProject.slug}`}
            className="flex items-center text-sm xl:text-3xl  opacity-80 hover:opacity-100 cursor-pointer"
          >
            {nextProject.title}
            <ChevronRight className="w-14 h-14" />
          </Link>
        )}
      </div>
    </main>
  );
};

export default page;
