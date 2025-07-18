
import Image from "next/image";
import {PROJECT} from "../constants";
import { useEffect, useState } from "react";

const Projects = ({activeSession}) => {
    // console.log(activeSession)

    const projects = ['project0','project1','project2','project3'];
    const delayClasses = ['delay-0', 'delay-100', 'delay-200', 'delay-300'];

    const [toShow,setToShow] = useState({project0: false, project1: false,project2: false,project3: false})
    const [showTitle, setShowTitle] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if(entry.target.id == "project-title"){
                    setShowTitle(() => {
                        return true
                    })
                }else{
                    setToShow((prev) => ({
                    ...prev,
                    [entry.target.id]: entry.isIntersecting
                    }));
                }

            });
        },
        {
            root: null,
            rootMargin: "0px",
            threshold: 0.4,
        }
        );

        projects.forEach((project) => {
        const section = document.querySelector(`#${project}`);
        if (section) {observer.observe(section)};
        });

        const title = document.querySelector("#project-title")
        observer.observe(title);

        return () => {
        projects.forEach((project) => {
            const section = document.querySelector(`#${project}`);
            if (section){
                observer.unobserve(section);
            }
        });
        };
    }, []);


    return(
        <div id="projects" className="scroll-mt-20">
            <h2 id="project-title"className={`
                my-12 text-center text-2xl
                font-semibold uppercase tracking-wide 
                text-slate-200
                transition-all transition-duration-900
                ${showTitle ? 'translate-y-0 opacity-100' : 'translate-y-30 opacity-0'}`}
            >
                Projects
            </h2>

            <div className="flex flex-wrap items-center justify-center gap-6">
                {PROJECT.map((project,index) => (
                    <a
                    id={`project${index}`}
                    key={index}
                    href={project.url}
                    target="_blank"
                    className={`
                        w-[300px] min-h-126
                        bg-slate-900/40 border-1 border-black rounded-3xl
                        flex flex-col items-start
                        transition-all duration-300 ease-in-out
                        shadow-white hover:shadow-lg hover:-translate-y-4
                        ${delayClasses[index]}
                        ${toShow[`project${index}`] ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}
                    `}
                    >
                        <Image 
                        src={project.image} 
                        alt={project.name}
                        width={300} 
                        height={200}
                        className="rounded-3xl h-[200px] w-[300px] object-cover"
                        />

                        <h3 className="ml-2 mt-3 text-2xl font-bold">{project.name}</h3>
                        <p className="ml-2 mt-1 text-[14px] h-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eum ipsam dolor fugiat inventore nesciunt provident nobis praesentium consequuntur vitae dolorem accusantium</p>
                        <div className="ml-2 mb-3 w-95/100 flex flex-row flex-wrap gap-1">
                            {project.technologies.map((tech,index) => (
                                <span key={index} className="border border-slate-400 rounded-full text-md px-2 py-1 text-slate-400 ">{tech}</span>
                            ))
                            }
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Projects;