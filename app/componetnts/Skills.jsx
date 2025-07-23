import { SKILLS } from "../constants"

import { FaHtml5,FaCss3,FaReact, } from "react-icons/fa"
{SKILLS}
const Skills = ({}) => {
  return (
    <div className="mt-20 scroll-mt-20" id="skills">
      <div className="flex flex-col items-center justify-center">
        <h2 className="my-12 text-center text-4xl font-semibold uppercase tracking-wide text-slate-100">
            Skills
        </h2>

        <ul>
            {SKILLS.map((skills,index) => (
                <li key={index} className="m-10 border-b border-slate-400 text-2xl tracking-tighter lg:py-10 lg:text-4xl">
                    {skills}
                </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default Skills
