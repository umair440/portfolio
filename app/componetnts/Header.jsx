"use client";
import { useState, useEffect, use } from "react";
import { BsFileTextFill } from "react-icons/bs";

const navItems = [
  { label: "Home", id: "home" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Let's connect!", id: "contact" },
];

const Header = () => {
  const [activeSession, setActiveSession] = useState("home");
  const [showDropdown, setShowDropdown] = useState(false);


  const handleClick = (e, section) => {
    e.preventDefault();
    setActiveSession(section);
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSession(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.6,
      }
    );

    navItems.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      navItems.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) observer.unobserve(section);
      });
    };
  }, []);


  const activatedropdown = () => {
    setShowDropdown(!showDropdown);
    console.log(showDropdown)
  }

  return (
    <div className="fixed top-0 left-0 w-full h-40 flex justify-center text-xl font-semibold  lg:left-1/2 lg:-translate-x-1/2">
      <div className="relative w-full overflow-visible h-23 px-5">
        <div className="flex flex-row justify-center sm:justify-around items-center gap-10 sm:gap-0 lg:gap-10 h-full w-full mx-auto sm:w-full lg:w-95/100 backdrop-blur-sm [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]">
          <div className="flex flex-row items-center gap-2 w-50">
            <BsFileTextFill fontSize={30} />
            <h1 className="bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent animate-gradient-x w-full">Umair Sadiq</h1>
          </div>
          <div className="flex flex-row justify-between w-8/10 h-full">
            <ul className="flex flex-row justify-end items-center gap-5 w-full h-full lg:gap-20">
              {navItems.map(({ label, id }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => handleClick(e, id)}
                    className={`h-full flex items-center hidden md:flex transition-all duration-300 ease-in-out transform ${
                      activeSession === id
                        ? "border-b-2 border-white text-white -translate-y-1"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li><button onClick={activatedropdown}><BsFileTextFill fontSize={30} className="md:hidden cursor-pointer"/></button></li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`absolute z-10 opacity-0 left-1/2 -translate-x-1/2  w-full sm:w-9/10 mx-auto sm:w-full lg:w-95/100 mx-auto backdrop-blur-sm rounded-3xl pb-2 flex flex-col justify-start items-center gap-5 md:hidden transition transition-all duration-300 ease-in-out ${showDropdown ? 'top-20 opacity-100 pointer-events-auto' : '-top-5 opacity-0 pointer-events-none'}`}>
        <ul className="flex flex-col w-full items-center justifu-center gap-3">
          {navItems.map(({label,id}) => (
              <li
              key={id}
              className="w-full text-center hover:bg-slate-900 transition-colors border-1/5 border-slate-900"
              >
                <a
                  href={`#${id}`}
                  onClick={(e) => {handleClick(e, id);
                    setShowDropdown(false)}}
                  className="underline w-full block py-2 semibold"

                >
                  {label}
                </a>
              </li>
          ))}
        </ul>
      </div>
    </div>
    
  );
};

export default Header;
