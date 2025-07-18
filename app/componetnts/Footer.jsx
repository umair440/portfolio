import { BsTwitterX } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="mb-8 mt-20">
        <div className="flex items-center justify-center gap-8">
            <a href="http://x.com" target="_blank" rel="noopener noreferrer">
                <BsTwitterX fontSize={25} className="opacity-50 hover:opacity-80"/>
            </a>

            <a href="https://github.com/umair440?tab=repositories" target="_blank" rel="noopener noreferrer">
                <FaGithub fontSize={25} className="opacity-50 hover:opacity-80"/>
            </a>

            <a href="linkedin.com/in/umair-sadiq-04803b281" target="_blank" rel="noopener noreferrer">
                <FaLinkedin fontSize={25} className="opacity-50 hover:opacity-80"/>
            </a>
        </div>

        <p className="mt-8 text-center text-sm tracking-wide text-slate-700">
            &copy; Umair's portfolio. All rights reserved.
        </p>
    </div>
  )
}

export default Footer
