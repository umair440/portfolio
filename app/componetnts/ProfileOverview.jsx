"use client"

import Image from "next/image";
import favicon from "@/public/file.svg";
import {FaDownload} from "react-icons/fa";
import {motion} from "framer-motion";

const ProfileOverview = ({activeSession}) => {
  return (
    <div className="my-24 scroll-mt-20 mb-29" id="home">
        <motion.div 
        initial = {{opacity:0, y:-100}}
        animate = {{opacity:1,  y:0}}
        transition={{duration:1}}
        className="flex flex-col items-center justify-center gap-4">
            <Image src={favicon} width={110} height={110} alt='iconCover' 
            className="rounded-full border-2 border-slate-400"/>
            <h1 className="text-2xl font-bold">{'Umair Sadiq'}</h1>
            <p className="tracking-tighter">{'London'}</p>
            <a href="../global.css" target="_blank" rel="noopener noreferrer" download
            className="flex items-center gap-x-2 rounded-full bg-gray-300
            px-3 py-2 text-sm font-semibold tracking-tight text-slate-950 hover:text-teal-800">
                Download my CV
                <FaDownload />
            </a>

            <p className="my-10 text-center text-5xl font-semibold tracking-tighter md:text-[4rem] lg:text-[5rem]">
              {"Welcome to my Portfolio".split('').map((char,index) => (
                <motion.span key={index} initial={{opacity:0, y:50}} animate={{opacity:1, y:0}} transition={{duration:0.9, delay: index * 0.15}}>
                  {char} 
                </motion.span>
              ))}
            </p>

            <p className="mb-10 max-w-2xl p-1 text-center text-xl tracking-tight text-slate-400 lg:text-3xl">
              I am passionate {" "}
              <span className="border-b-2 font-medium text-slate-200">
                Full Stack Development
              </span>{" "}
              with a knack for creating seamless, user-friendly web applications.
              Specialising in both {" "}
              <span className="font-medium text-slate-200">front-end </span>
              and{" "}
              <span className="font-medium text-slate-200">back-end</span>{" "}
              development, enusring a cohesive and efficent user experience from start to finish
            </p>

        </motion.div>
      
    </div>
  )
}

export default ProfileOverview
