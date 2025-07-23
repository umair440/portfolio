import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { PROJECT } from "../constants";

const Projects = ({ activeSession }) => {
  const [visibleProjects, setVisibleProjects] = useState({});
  const [showTitle, setShowTitle] = useState(false);
  const projectRefs = useRef({});

  const delayClasses = ['delay-0', 'delay-100', 'delay-200', 'delay-300'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (target.id === "project-title" && isIntersecting) {
            setShowTitle(true);
          } else {
            const id = target.getAttribute("data-project-id");
            if (id) {
              setVisibleProjects((prev) => ({
                ...prev,
                [id]: isIntersecting,
              }));
            }
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    // Observe the title
    const titleEl = document.getElementById("project-title");
    if (titleEl) observer.observe(titleEl);

    // Observe each project card
    PROJECT.forEach((_, index) => {
      const id = `project${index}`;
      const el = projectRefs.current[id];
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div id="projects" className="scroll-mt-20">
      <h2
        id="project-title"
        className={`my-12 text-center text-2xl font-semibold uppercase tracking-wide text-slate-200 transition-all duration-900 ${
          showTitle ? "translate-y-0 opacity-100" : "translate-y-30 opacity-0"
        }`}
      >
        Projects
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-6">
        {PROJECT.map((project, index) => {
          const id = `project${index}`;
          const isVisible = visibleProjects[id];

          return (
            <a
              key={id}
              id={id}
              data-project-id={id}
              ref={(el) => (projectRefs.current[id] = el)}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-[300px] min-h-126 bg-slate-900/40 border border-black rounded-3xl flex flex-col items-start transition-all duration-300 ease-in-out shadow-white hover:shadow-lg hover:-translate-y-4 ${
                delayClasses[index % delayClasses.length]
              } ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
            >
              <Image
                src={project.image}
                alt={project.name}
                width={300}
                height={200}
                className="rounded-3xl h-[200px] w-[300px] object-cover"
              />

              <h3 className="ml-2 mt-3 text-2xl font-bold">{project.name}</h3>
              <p className="ml-2 mt-1 text-sm h-50 text-slate-300">
                {project.description || "No description provided."}
              </p>
              <div className="ml-2 mb-3 w-[95%] flex flex-wrap gap-1">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="border border-slate-400 rounded-full text-sm px-2 py-1 text-slate-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
